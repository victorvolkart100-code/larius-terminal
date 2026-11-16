import React, { useEffect, useState } from 'react';
import {
  checkBackendHealth,
  fetchAssets,
  fetchBrokers,
} from './services/api';
import { ASSETS_CATALOG, BROKERS_CATALOG, MACRO_SNAPSHOT } from './data/quantData';
import { Asset, Broker, HudViewId, ShaderUniformParams } from './types/investimentos';
import { useAudioAnalyzer } from './hooks/useAudioAnalyzer';
import { ArchitecturalGrid } from './components/hud/ArchitecturalGrid';
import { TopNavHud } from './components/hud/TopNavHud';
import { HudOverviewView } from './views/HudOverviewView';
import { LariusAdvisorView } from './views/LariusAdvisorView';
import { PortfolioMatrixView } from './views/PortfolioMatrixView';
import { WealthSimulatorView } from './views/WealthSimulatorView';
import { SystemArchitectureView } from './views/SystemArchitectureView';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<HudViewId>('hud');
  const [backendMode, setBackendMode] = useState<'FASTAPI' | 'LOCAL_TS'>('LOCAL_TS');
  const [stealthMode, setStealthMode] = useState(false);
  const [assets, setAssets] = useState<Asset[]>(ASSETS_CATALOG);
  const [brokers, setBrokers] = useState<Broker[]>(BROKERS_CATALOG);
  const [pendingAdvisorPrompt, setPendingAdvisorPrompt] = useState<string | null>(null);
  const [shaderParams, setShaderParams] = useState<ShaderUniformParams>({
    audioEnergy: 0.14,
    turbulence: 1.05,
    displacement: 0.22,
    pointSize: 2.1,
    coreOpacity: 0.84,
  });

  const audio = useAudioAnalyzer();

  useEffect(() => {
    void checkBackendHealth().then(setBackendMode);
    void fetchAssets().then(setAssets);
    void fetchBrokers().then(setBrokers);

    const handleKeys = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === 'h') {
        setStealthMode((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, []);

  const routeToLariusWithPrompt = (promptText: string) => {
    setPendingAdvisorPrompt(promptText);
    setActiveView('larius');
  };

  return (
    <div className="relative min-h-screen w-full bg-[#030304] text-[#F4F4F5]">
      <ArchitecturalGrid />

      <TopNavHud
        activeView={activeView}
        onSelectView={setActiveView}
        macro={MACRO_SNAPSHOT}
        backendMode={backendMode}
        stealthMode={stealthMode}
        onToggleStealth={() => setStealthMode((s) => !s)}
        isVoiceActive={audio.isSpeaking || audio.isListening}
        onQuickVoiceClick={() => setActiveView('larius')}
      />

      <main className="relative z-10">
        {activeView === 'hud' && (
          <HudOverviewView
            macro={MACRO_SNAPSHOT}
            stealthMode={stealthMode}
            isSpeaking={audio.isSpeaking || audio.isListening}
            shaderParams={shaderParams}
            getAudioEnergy={audio.getAudioEnergy}
            onNavigate={setActiveView}
            onAskFromHud={routeToLariusWithPrompt}
          />
        )}

        {activeView === 'larius' && (
          <LariusAdvisorView
            initialPrompt={pendingAdvisorPrompt}
            onConsumeInitialPrompt={() => setPendingAdvisorPrompt(null)}
            isSpeaking={audio.isSpeaking}
            isListening={audio.isListening}
            muted={audio.muted}
            shaderParams={shaderParams}
            getAudioEnergy={audio.getAudioEnergy}
            onToggleMute={() => audio.setMuted((m) => !m)}
            onStopSpeech={audio.stopSpeaking}
            onSpeak={audio.speak}
            onStartVoice={(cb) => {
              audio.startVoiceCommand(cb);
            }}
            onConnectMic={audio.connectMicrophone}
            micConnected={audio.micConnected}
          />
        )}

        {activeView === 'assets' && (
          <PortfolioMatrixView
            assets={assets}
            stealthMode={stealthMode}
            onInspectAssetWithLarius={(ticker) =>
              routeToLariusWithPrompt(`Larius, faça a análise técnica e fundamentalista de ${ticker}.`)
            }
          />
        )}

        {activeView === 'compound' && (
          <WealthSimulatorView
            brokers={brokers}
            stealthMode={stealthMode}
            onAskBrokerWithLarius={(brokerName) =>
              routeToLariusWithPrompt(`Larius, audite taxas, segurança e CDBs do ${brokerName}.`)
            }
          />
        )}

        {activeView === 'architecture' && (
          <SystemArchitectureView
            shaderParams={shaderParams}
            onChangeShaderParams={setShaderParams}
            getAudioEnergy={audio.getAudioEnergy}
            backendMode={backendMode}
          />
        )}
      </main>
    </div>
  );
};

export default App;
