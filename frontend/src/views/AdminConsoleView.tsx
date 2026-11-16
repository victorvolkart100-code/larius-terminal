import React, { useEffect, useState } from 'react';
import { Lock, LogOut, RefreshCw, ShieldCheck, Volume2 } from 'lucide-react';
import {
  fetchAdminFinancialParams,
  fetchAdminLogs,
  fetchAdminPromptBlueprint,
  fetchAdminVoiceConfig,
  loginAdmin,
  logoutAdmin,
  requestLariusSpeechAudio,
  saveAdminFinancialParams,
  saveAdminVoiceConfig,
  verifyAdminSession,
} from '../services/api';
import {
  FinancialParamsAdmin,
  PromptLayerAdmin,
  SystemLogEntry,
  VoiceConfigAdminView,
  VoiceProvider,
} from '../types/investimentos';
import { BrandLogo } from '../components/hud/BrandLogo';

interface AdminConsoleViewProps {
  onExitToPublic: () => void;
}

export const AdminConsoleView: React.FC<AdminConsoleViewProps> = ({ onExitToPublic }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [privateKey, setPrivateKey] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  const [voiceCfg, setVoiceCfg] = useState<VoiceConfigAdminView | null>(null);
  const [newApiKey, setNewApiKey] = useState('');
  const [finParams, setFinParams] = useState<FinancialParamsAdmin | null>(null);
  const [promptLayers, setPromptLayers] = useState<PromptLayerAdmin[]>([]);
  const [logs, setLogs] = useState<SystemLogEntry[]>([]);

  const loadAdminWorkspace = async () => {
    const [vc, fp, bp, logList] = await Promise.all([
      fetchAdminVoiceConfig(),
      fetchAdminFinancialParams(),
      fetchAdminPromptBlueprint('MODERADO', 'INTERMEDIARIO'),
      fetchAdminLogs(),
    ]);
    if (vc) setVoiceCfg(vc);
    if (fp) setFinParams(fp);
    if (bp) setPromptLayers(bp.layers);
    setLogs(logList);
  };

  useEffect(() => {
    let active = true;
    void verifyAdminSession().then((ok) => {
      if (!active) return;
      setAuthenticated(ok);
      setCheckingSession(false);
      if (ok) void loadAdminWorkspace();
    });
    return () => {
      active = false;
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    const res = await loginAdmin(privateKey);
    if (res.ok) {
      setAuthenticated(true);
      setPrivateKey('');
      await loadAdminWorkspace();
    } else {
      setAuthError(res.error || 'Falha na autenticação.');
    }
  };

  const handleLogout = async () => {
    await logoutAdmin();
    setAuthenticated(false);
    setVoiceCfg(null);
    setFinParams(null);
    setLogs([]);
  };

  const handleSaveVoice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!voiceCfg) return;
    const updated = await saveAdminVoiceConfig({
      provider: voiceCfg.provider,
      voice_id: voiceCfg.voice_id,
      api_key: newApiKey || undefined,
      xtts_endpoint: voiceCfg.xtts_endpoint,
      stability: voiceCfg.stability,
      similarity_boost: voiceCfg.similarity_boost,
      speed: voiceCfg.speed,
      pitch_shift: voiceCfg.pitch_shift,
    });
    if (updated) {
      setVoiceCfg(updated);
      setNewApiKey('');
      setStatusNotice('Calibração do Voice Clone salva no back-end.');
      void loadAdminWorkspace();
    }
  };

  const handleTestVoiceTTS = async () => {
    setStatusNotice('Solicitando síntese segura em /api/larius/tts...');
    const blob = await requestLariusSpeechAudio(
      'Modo Arquiteto verificado. Síntese de voz isolada via rota segura no servidor.'
    );
    if (blob) {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.onended = () => URL.revokeObjectURL(url);
      await audio.play();
      setStatusNotice('Áudio devolvido com sucesso por /api/larius/tts.');
    } else {
      setStatusNotice('Configuração de LARIUS_VOICE_ID / VOICE_API_KEY pendente ou provedor indisponível.');
    }
    void loadAdminWorkspace();
  };

  const handleSaveFinancial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!finParams) return;
    const saved = await saveAdminFinancialParams(finParams);
    if (saved) {
      setFinParams(saved);
      setStatusNotice('Parâmetros do motor financeiro atualizados no servidor.');
      void loadAdminWorkspace();
    }
  };

  if (checkingSession) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-void font-mono text-xs text-accretion-gold">
        Verificando sessão do Modo Arquiteto...
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="w-full max-w-md space-y-5 border border-hud-border bg-hud-surface p-7 shadow-hud backdrop-blur-[16px]">
          <div className="flex items-center justify-between border-b border-hud-border pb-4">
            <div className="flex items-center gap-2.5">
              <Lock className="h-4 w-4 text-accretion-gold" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accretion-photon">
                MODO ARQUITETO // /ADMIN
              </span>
            </div>
            <button
              onClick={onExitToPublic}
              className="font-mono text-[11px] text-text-muted transition-colors hover:text-accretion-gold"
            >
              ← Voltar (/)
            </button>
          </div>

          <div className="py-1">
            <BrandLogo compact />
          </div>

          <p className="text-xs leading-relaxed text-text-muted">
            Área restrita protegida pelas variáveis <code className="text-accretion-gold">ADMIN_SECRET_TOKEN</code> /{' '}
            <code className="text-accretion-gold">LARIUS_ADMIN_PRIVATE_KEY</code> do arquivo{' '}
            <code className="text-accretion-photon">backend/.env</code>. Credenciais de voz e parâmetros internos nunca
            são expostos na interface pública.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-text-muted">
                Chave Privada (.env)
              </label>
              <input
                type="password"
                required
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                placeholder="Digite ADMIN_SECRET_TOKEN"
                className="mt-1.5 w-full border border-hud-border bg-void/90 px-3.5 py-2.5 font-mono text-xs text-text-primary placeholder-text-muted/60 focus:border-hud-borderActive focus:outline-none"
              />
            </div>

            {authError && (
              <div className="border border-signal-negative/35 bg-signal-negative/10 p-3 font-mono text-[11px] text-signal-negative">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-accretion-gold py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-void shadow-[0_0_20px_rgba(245,183,79,0.22)] transition-colors hover:bg-accretion-photon"
            >
              Autenticar Arquiteto
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <section className="relative z-10 mx-auto max-w-[1380px] space-y-6 px-5 pb-16 pt-8 md:px-[36px]">
      <div className="flex flex-wrap items-center justify-between gap-4 border border-hud-border bg-hud-surface px-6 py-4 shadow-hud backdrop-blur-[16px]">
        <div className="flex items-center gap-4">
          <BrandLogo compact />
          <div className="h-6 w-px bg-hud-border" />
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-signal-positive" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-signal-positive">
                AUTENTICADO // SESSÃO HMAC PRIVADA
              </div>
              <h1 className="font-display text-lg font-medium text-text-primary">
                Painel Arquiteto — /admin
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 font-mono text-xs">
          <button
            onClick={onExitToPublic}
            className="border border-hud-border bg-void/85 px-3.5 py-2 text-text-primary transition-colors hover:border-hud-borderActive hover:text-accretion-gold"
          >
            Interface Pública (/)
          </button>
          <button
            onClick={() => void handleLogout()}
            className="flex items-center gap-1.5 border border-signal-negative/35 bg-signal-negative/10 px-3.5 py-2 text-signal-negative transition-colors hover:bg-signal-negative/20"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Encerrar Sessão</span>
          </button>
        </div>
      </div>

      {statusNotice && (
        <div className="border border-signal-positive/35 bg-signal-positive/10 px-4 py-2.5 font-mono text-xs text-signal-positive">
          {statusNotice}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* 1. Isolated Voice Clone Calibration */}
        {voiceCfg && (
          <form
            onSubmit={handleSaveVoice}
            className="space-y-4 border border-hud-border bg-hud-surface p-6 shadow-hud backdrop-blur-[16px] lg:col-span-6"
          >
            <div className="flex items-center justify-between border-b border-hud-border pb-3">
              <div>
                <div className="font-mono text-[10px] uppercase text-accretion-gold">
                  ROTA ISOLADA /API/LARIUS/TTS
                </div>
                <h2 className="font-display text-base font-medium text-text-primary">
                  Calibração da Voz Clonada (Back-end Only)
                </h2>
              </div>
              <button
                type="button"
                onClick={() => void handleTestVoiceTTS()}
                className="flex items-center gap-1.5 border border-hud-borderActive bg-nebula px-3 py-1.5 font-mono text-[11px] text-accretion-gold transition-colors hover:bg-accretion-gold/15 hover:text-accretion-photon"
              >
                <Volume2 className="h-3.5 w-3.5" />
                <span>Testar /api/larius/tts</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 font-mono text-xs sm:grid-cols-2">
              <div>
                <label className="block text-[10px] uppercase text-text-muted">Provedor TTS</label>
                <select
                  value={voiceCfg.provider}
                  onChange={(e) =>
                    setVoiceCfg({ ...voiceCfg, provider: e.target.value as VoiceProvider })
                  }
                  className="mt-1 w-full border border-hud-border bg-void/90 px-3 py-2 text-accretion-gold focus:border-hud-borderActive focus:outline-none"
                >
                  <option value="elevenlabs">ElevenLabs</option>
                  <option value="cartesia">Cartesia Sonic</option>
                  <option value="xtts">Coqui XTTS (Self-Hosted)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-text-muted">Voice ID do Clone</label>
                <input
                  type="text"
                  value={voiceCfg.voice_id}
                  onChange={(e) => setVoiceCfg({ ...voiceCfg, voice_id: e.target.value })}
                  placeholder="ID da sua voz clonada"
                  className="mt-1 w-full border border-hud-border bg-void/90 px-3 py-2 text-text-primary focus:border-hud-borderActive focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase text-text-muted">
                  API Key (Atual: {voiceCfg.api_key_masked})
                </label>
                <input
                  type="password"
                  value={newApiKey}
                  onChange={(e) => setNewApiKey(e.target.value)}
                  placeholder="Preencha apenas para atualizar chave"
                  className="mt-1 w-full border border-hud-border bg-void/90 px-3 py-2 text-text-primary focus:border-hud-borderActive focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase text-text-muted">XTTS Endpoint (se XTTS)</label>
                <input
                  type="text"
                  value={voiceCfg.xtts_endpoint}
                  onChange={(e) => setVoiceCfg({ ...voiceCfg, xtts_endpoint: e.target.value })}
                  className="mt-1 w-full border border-hud-border bg-void/90 px-3 py-2 text-text-primary focus:border-hud-borderActive focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border border-hud-border bg-void/80 p-4 font-mono text-xs">
              {(
                [
                  ['stability', 'Estabilidade', 0, 1, 0.02],
                  ['similarity_boost', 'Similaridade do Clone', 0, 1, 0.02],
                  ['speed', 'Cadência (Speed)', 0.75, 1.3, 0.02],
                  ['pitch_shift', 'Pitch Shift', 0.8, 1.2, 0.02],
                ] as Array<[keyof VoiceConfigAdminView, string, number, number, number]>
              ).map(([field, label, min, max, step]) => (
                <div key={field}>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-text-muted">{label}</span>
                    <strong className="text-accretion-gold">{Number(voiceCfg[field]).toFixed(2)}</strong>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={Number(voiceCfg[field])}
                    onChange={(e) =>
                      setVoiceCfg({ ...voiceCfg, [field]: Number(e.target.value) })
                    }
                    className="mt-1 w-full accent-[#F5B74F]"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-accretion-gold py-2.5 font-mono text-xs font-semibold uppercase text-void transition-colors hover:bg-accretion-photon"
            >
              Salvar Calibração no Servidor
            </button>
          </form>
        )}

        {/* 2. Financial Engine Parameters */}
        {finParams && (
          <form
            onSubmit={handleSaveFinancial}
            className="space-y-4 border border-hud-border bg-hud-surface p-6 shadow-hud backdrop-blur-[16px] lg:col-span-6"
          >
            <div className="border-b border-hud-border pb-3">
              <div className="font-mono text-[10px] uppercase text-accretion-gold">
                MOTOR QUANTITATIVO & PROMPT CVM 19
              </div>
              <h2 className="font-display text-base font-medium text-text-primary">
                Parâmetros Financeiros do Sistema
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs sm:grid-cols-3">
              {(
                [
                  ['selic_pct', 'Selic (% a.a.)'],
                  ['ipca_pct', 'IPCA (% a.a.)'],
                  ['usd_brl', 'Dólar (R$)'],
                  ['dbgg_gdp_pct', 'Dívida/PIB (%)'],
                  ['default_expected_return_pct', 'Retorno Alvo (% a.a.)'],
                ] as Array<[keyof FinancialParamsAdmin, string]>
              ).map(([key, label]) => (
                <div key={key} className="border border-hud-border bg-void/85 p-3">
                  <label className="block text-[10px] uppercase text-text-muted">{label}</label>
                  <input
                    type="number"
                    step="0.05"
                    value={Number(finParams[key])}
                    onChange={(e) =>
                      setFinParams({ ...finParams, [key]: Number(e.target.value) })
                    }
                    className="mt-1 w-full bg-transparent text-sm font-bold text-accretion-photon focus:outline-none"
                  />
                </div>
              ))}
            </div>

            <div className="border border-hud-border bg-void/85 p-3 font-mono text-xs">
              <label className="block text-[10px] uppercase text-text-muted">
                Diretriz Base do Prompt Fiduciário (CVM 19)
              </label>
              <textarea
                rows={3}
                value={finParams.prompt_guardrail_note}
                onChange={(e) =>
                  setFinParams({ ...finParams, prompt_guardrail_note: e.target.value })
                }
                className="mt-1 w-full bg-transparent text-xs text-text-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accretion-gold py-2.5 font-mono text-xs font-semibold uppercase text-void transition-colors hover:bg-accretion-photon"
            >
              Aplicar Parâmetros no Motor
            </button>
          </form>
        )}
      </div>

      {/* 3. Prompt Layers Blueprint + Live Audit Logs */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-3 border border-hud-border bg-hud-surface p-6 shadow-hud backdrop-blur-[16px] lg:col-span-5">
          <div className="font-mono text-[10px] uppercase text-accretion-gold">
            ENGENHARIA DE PROMPT RESTRITA AO SERVIDOR
          </div>
          <h3 className="font-display text-base font-medium text-text-primary">Camadas Internas do Larius</h3>
          <div className="space-y-2.5">
            {promptLayers.map((layer) => (
              <div key={layer.layer_id} className="border border-hud-border bg-void/80 p-3 font-mono text-xs">
                <div className="font-semibold text-accretion-photon">{layer.title}</div>
                <p className="mt-1 text-[11px] text-text-muted">{layer.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 border border-hud-border bg-hud-surface p-6 shadow-hud backdrop-blur-[16px] lg:col-span-7">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase text-accretion-gold">AUDITORIA & TELEMETRIA</div>
              <h3 className="font-display text-base font-medium text-text-primary">Logs do Sistema</h3>
            </div>
            <button
              onClick={() => void loadAdminWorkspace()}
              className="flex items-center gap-1.5 border border-hud-border bg-void/85 px-3 py-1.5 font-mono text-[11px] text-accretion-gold transition-colors hover:border-hud-borderActive hover:text-accretion-photon"
            >
              <RefreshCw className="h-3 w-3" />
              <span>Atualizar</span>
            </button>
          </div>

          <div className="max-h-72 space-y-1.5 overflow-y-auto border border-hud-border bg-void/85 p-3 font-mono text-[11px]">
            {logs.map((entry, idx) => (
              <div
                key={`${entry.timestamp}-${idx}`}
                className="flex flex-wrap items-baseline gap-2 border-b border-hud-border/40 pb-1.5"
              >
                <span className="text-text-muted">{entry.timestamp}</span>
                <span
                  className={
                    entry.level === 'ERROR'
                      ? 'text-signal-negative'
                      : entry.level === 'WARN'
                      ? 'text-accretion-gold'
                      : 'text-signal-positive'
                  }
                >
                  [{entry.category}/{entry.level}]
                </span>
                <span className="text-text-primary">{entry.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
