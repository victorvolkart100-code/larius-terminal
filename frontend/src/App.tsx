import React, { Suspense, useEffect, useState } from 'react';
import {
  checkBackendOnline,
  fetchAssets,
  fetchBrokers,
  fetchMacroSnapshot,
} from './services/api';
import { ASSETS_CATALOG, BROKERS_CATALOG, MACRO_SNAPSHOT } from './data/quantData';
import {
  Asset,
  Broker,
  ExperienceLevel,
  HudViewId,
  MacroSnapshot,
  RiskProfile,
  ShaderUniformParams,
} from './types/investimentos';
import { useAudioAnalyzer } from './hooks/useAudioAnalyzer';
import { ArchitecturalGrid } from './components/hud/ArchitecturalGrid';
import { TopNavHud } from './components/hud/TopNavHud';
import { HudOverviewView } from './views/HudOverviewView';
import { LariusAdvisorView } from './views/LariusAdvisorView';
import { PortfolioMatrixView } from './views/PortfolioMatrixView';
import { WealthSimulatorView } from './views/WealthSimulatorView';

const LazyAdminConsoleView = React.lazy(() =>
  import('./views/AdminConsoleView').then((mod) => ({ default: mod.AdminConsoleView }))
);

function isAdminPath(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.pathname === '/admin' || window.location.hash === '#/admin';
}

const DEFAULT_SHADER_PARAMS: ShaderUniformParams = {
  audioEnergy: 0.14,
  turbulence: 1.05,
  displacement: 0.22,
  pointSize: 2.1,
  coreOpacity: 0.84,
};

export const App: React.FC = () => {
  const [adminRoute, setAdminRoute] = useState<boolean>(isAdminPath);
  const [activeView, setActiveView] = useState<HudViewId>('hud');
  const [stealthMode, setStealthMode] = useState(false);
  const [riskProfile, setRiskProfile] = useState<RiskProfile>('MODERADO');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>('INTERMEDIARIO');
  const [macro, setMacro] = useState<MacroSnapshot>(MACRO_SNAPSHOT);
  const [assets, setAssets] = useState<Asset[]>(ASSETS_CATALOG);
  const [brokers, setBrokers] = useState<Broker[]>(BROKERS_CATALOG);
  const [pendingAdvisorPrompt, setPendingAdvisorPrompt] = useState<string | null>(null);

  const audio = useAudioAnalyzer();

  useEffect(() => {
    void checkBackendOnline().then((online) => {
      if (online) {
        void fetchMacroSnapshot().then(setMacro);
      }
      void fetchAssets().then(setAssets);
      void fetchBrokers().then(setBrokers);
    });

    const syncRoute = () => setAdminRoute(isAdminPath());
    const handleKeys = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === 'h') {
        setStealthMode((prev) => !prev);
      }
    };

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('keydown', handleKeys);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('keydown', handleKeys);
    };
  }, []);

  const routeToLariusWithPrompt = (promptText: string) => {
    setPendingAdvisorPrompt(promptText);
    setActiveView('larius');
  };

  const exitAdminToPublic = () => {
    if (window.location.pathname === '/admin') {
      window.history.pushState({}, '', '/');
    } else if (window.location.hash === '#/admin') {
      window.location.hash = '';
    }
    setAdminRoute(false);
    void checkBackendOnline().then((online) => {
      if (online) void fetchMacroSnapshot().then(setMacro);
    });
  };

  if (adminRoute) {
    return (
      <div className="relative min-h-screen w-full bg-[#030304] text-[#F4F4F5]">
        <ArchitecturalGrid />
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center font-mono text-xs text-zinc-400">
              Carregando Modo Arquiteto...
            </div>
          }
        >
          <LazyAdminConsoleView onExitToPublic={exitAdminToPublic} />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-[#030304] text-[#F4F4F5]">
      <ArchitecturalGrid />

      <TopNavHud
        activeView={activeView}
        onSelectView={setActiveView}
        macro={macro}
        stealthMode={stealthMode}
        onToggleStealth={() => setStealthMode((s) => !s)}
        isVoiceActive={audio.isSpeaking || audio.isListening}
        onQuickVoiceClick={() => setActiveView('larius')}
      />

      <main className="relative z-10">
        {activeView === 'hud' && (
          <HudOverviewView
            macro={macro}
            stealthMode={stealthMode}
            riskProfile={riskProfile}
            onChangeRiskProfile={setRiskProfile}
            isSpeaking={audio.isSpeaking || audio.isListening}
            shaderParams={DEFAULT_SHADER_PARAMS}
            getAudioEnergy={audio.getAudioEnergy}
            onNavigate={setActiveView}
            onAskFromHud={routeToLariusWithPrompt}
          />
        )}

        {activeView === 'larius' && (
          <LariusAdvisorView
            initialPrompt={pendingAdvisorPrompt}
            onConsumeInitialPrompt={() => setPendingAdvisorPrompt(null)}
            riskProfile={riskProfile}
            onChangeRiskProfile={setRiskProfile}
            experienceLevel={experienceLevel}
            onChangeExperienceLevel={setExperienceLevel}
            isSpeaking={audio.isSpeaking}
            isListening={audio.isListening}
            muted={audio.muted}
            shaderParams={DEFAULT_SHADER_PARAMS}
            getAudioEnergy={audio.getAudioEnergy}
            onToggleMute={() => audio.setMuted((m) => !m)}
            onStopSpeech={audio.stopSpeaking}
            onSpeak={(txt) => void audio.speak(txt)}
            onStartVoice={(cb) => {
              audio.startVoiceCommand(cb);
            }}
          />
        )}

        {activeView === 'assets' && (
          <PortfolioMatrixView
            assets={assets}
            stealthMode={stealthMode}
            riskProfile={riskProfile}
            onChangeRiskProfile={setRiskProfile}
            onInspectAssetWithLarius={(ticker) =>
              routeToLariusWithPrompt(`Larius, faça uma análise sobre ${ticker}.`)
            }
          />
        )}

        {activeView === 'compound' && (
          <WealthSimulatorView
            brokers={brokers}
            stealthMode={stealthMode}
            onAskBrokerWithLarius={(brokerName) =>
              routeToLariusWithPrompt(`Larius, compare taxas e benefícios do ${brokerName}.`)
            }
          />
        )}
      </main>
    </div>
  );
};

export default App;
