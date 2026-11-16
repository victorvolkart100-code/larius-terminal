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
    setStatusNotice('Solicitando síntese segura em /api/lariustts...');
    const blob = await requestLariusSpeechAudio(
      'Modo Arquiteto verificado. Síntese de voz isolada via rota segura no servidor.'
    );
    if (blob) {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.onended = () => URL.revokeObjectURL(url);
      await audio.play();
      setStatusNotice('Áudio devolvido com sucesso por /api/lariustts.');
    } else {
      setStatusNotice('Configuração de VOICE_CLONE_ID / VOICE_API_KEY pendente ou provedor indisponível.');
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
      <div className="flex min-h-screen items-center justify-center bg-[#030304] font-mono text-xs text-zinc-400">
        Verificando sessão do Modo Arquiteto...
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="w-full max-w-md space-y-5 border border-white/[0.14] bg-[#09090B]/95 p-7 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2.5">
              <Lock className="h-4 w-4 text-white" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white">
                MODO ARQUITETO // /ADMIN
              </span>
            </div>
            <button
              onClick={onExitToPublic}
              className="font-mono text-[11px] text-zinc-400 hover:text-white"
            >
              ← Voltar (/)
            </button>
          </div>

          <p className="text-xs leading-relaxed text-zinc-400">
            Área restrita protegida pela variável <code className="text-zinc-200">LARIUS_ADMIN_PRIVATE_KEY</code> do arquivo{' '}
            <code className="text-zinc-200">backend/.env</code>. Credenciais de voz e parâmetros internos nunca são
            expostos na interface pública.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Chave Privada (.env)
              </label>
              <input
                type="password"
                required
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                placeholder="Digite LARIUS_ADMIN_PRIVATE_KEY"
                className="mt-1.5 w-full border border-white/[0.14] bg-[#030304] px-3.5 py-2.5 font-mono text-xs text-white placeholder-zinc-600 focus:border-white/50 focus:outline-none"
              />
            </div>

            {authError && (
              <div className="border border-rose-400/30 bg-rose-500/10 p-3 font-mono text-[11px] text-rose-300">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#F4F4F5] py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#030304] hover:bg-white"
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
      <div className="flex flex-wrap items-center justify-between gap-4 border border-white/[0.1] bg-[#09090B]/95 px-6 py-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-emerald-400" />
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-400">
              AUTENTICADO // SESSÃO HMAC PRIVADA
            </div>
            <h1 className="font-display text-lg font-medium text-white">
              Painel Arquiteto — D.investimentos (/admin)
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2.5 font-mono text-xs">
          <button
            onClick={onExitToPublic}
            className="border border-white/[0.14] bg-[#030304] px-3.5 py-2 text-zinc-200 hover:border-white/40"
          >
            Interface Pública (/)
          </button>
          <button
            onClick={() => void handleLogout()}
            className="flex items-center gap-1.5 border border-rose-400/30 bg-rose-500/10 px-3.5 py-2 text-rose-300 hover:bg-rose-500/20"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Encerrar Sessão</span>
          </button>
        </div>
      </div>

      {statusNotice && (
        <div className="border border-emerald-400/30 bg-emerald-500/10 px-4 py-2.5 font-mono text-xs text-emerald-300">
          {statusNotice}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* 1. Isolated Voice Clone Calibration */}
        {voiceCfg && (
          <form
            onSubmit={handleSaveVoice}
            className="space-y-4 border border-white/[0.08] bg-[#09090B]/95 p-6 lg:col-span-6"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
              <div>
                <div className="font-mono text-[10px] uppercase text-zinc-500">
                  ROTA ISOLADA /API/LARIUSTTS
                </div>
                <h2 className="font-display text-base font-medium text-white">
                  Calibração da Voz Clonada (Back-end Only)
                </h2>
              </div>
              <button
                type="button"
                onClick={() => void handleTestVoiceTTS()}
                className="flex items-center gap-1.5 border border-white/20 bg-[#141418] px-3 py-1.5 font-mono text-[11px] text-white hover:border-white/50"
              >
                <Volume2 className="h-3.5 w-3.5" />
                <span>Testar /api/lariustts</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 font-mono text-xs">
              <div>
                <label className="block text-[10px] uppercase text-zinc-500">Provedor TTS</label>
                <select
                  value={voiceCfg.provider}
                  onChange={(e) =>
                    setVoiceCfg({ ...voiceCfg, provider: e.target.value as VoiceProvider })
                  }
                  className="mt-1 w-full border border-white/[0.12] bg-[#030304] px-3 py-2 text-white"
                >
                  <option value="elevenlabs">ElevenLabs</option>
                  <option value="cartesia">Cartesia Sonic</option>
                  <option value="xtts">Coqui XTTS (Self-Hosted)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-zinc-500">Voice ID do Clone</label>
                <input
                  type="text"
                  value={voiceCfg.voice_id}
                  onChange={(e) => setVoiceCfg({ ...voiceCfg, voice_id: e.target.value })}
                  placeholder="ID da sua voz clonada"
                  className="mt-1 w-full border border-white/[0.12] bg-[#030304] px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase text-zinc-500">
                  API Key (Atual: {voiceCfg.api_key_masked})
                </label>
                <input
                  type="password"
                  value={newApiKey}
                  onChange={(e) => setNewApiKey(e.target.value)}
                  placeholder="Preencha apenas para atualizar chave"
                  className="mt-1 w-full border border-white/[0.12] bg-[#030304] px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase text-zinc-500">XTTS Endpoint (se XTTS)</label>
                <input
                  type="text"
                  value={voiceCfg.xtts_endpoint}
                  onChange={(e) => setVoiceCfg({ ...voiceCfg, xtts_endpoint: e.target.value })}
                  className="mt-1 w-full border border-white/[0.12] bg-[#030304] px-3 py-2 text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border border-white/[0.06] bg-[#030304] p-4 font-mono text-xs">
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
                    <span className="text-zinc-400">{label}</span>
                    <strong className="text-white">{Number(voiceCfg[field]).toFixed(2)}</strong>
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
                    className="mt-1 w-full accent-white"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#F4F4F5] py-2.5 font-mono text-xs font-semibold uppercase text-[#030304] hover:bg-white"
            >
              Salvar Calibração no Servidor
            </button>
          </form>
        )}

        {/* 2. Financial Engine Parameters */}
        {finParams && (
          <form
            onSubmit={handleSaveFinancial}
            className="space-y-4 border border-white/[0.08] bg-[#09090B]/95 p-6 lg:col-span-6"
          >
            <div className="border-b border-white/[0.07] pb-3">
              <div className="font-mono text-[10px] uppercase text-zinc-500">
                MOTOR QUANTITATIVO & PROMPT CVM 19
              </div>
              <h2 className="font-display text-base font-medium text-white">
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
                <div key={key} className="border border-white/[0.08] bg-[#030304] p-3">
                  <label className="block text-[10px] uppercase text-zinc-500">{label}</label>
                  <input
                    type="number"
                    step="0.05"
                    value={Number(finParams[key])}
                    onChange={(e) =>
                      setFinParams({ ...finParams, [key]: Number(e.target.value) })
                    }
                    className="mt-1 w-full bg-transparent text-sm font-bold text-white focus:outline-none"
                  />
                </div>
              ))}
            </div>

            <div className="border border-white/[0.08] bg-[#030304] p-3 font-mono text-xs">
              <label className="block text-[10px] uppercase text-zinc-500">
                Diretriz Base do Prompt Fiduciário (CVM 19)
              </label>
              <textarea
                rows={3}
                value={finParams.prompt_guardrail_note}
                onChange={(e) =>
                  setFinParams({ ...finParams, prompt_guardrail_note: e.target.value })
                }
                className="mt-1 w-full bg-transparent text-xs text-zinc-200 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F4F4F5] py-2.5 font-mono text-xs font-semibold uppercase text-[#030304] hover:bg-white"
            >
              Aplicar Parâmetros no Motor
            </button>
          </form>
        )}
      </div>

      {/* 3. Prompt Layers Blueprint + Live Audit Logs */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-3 border border-white/[0.08] bg-[#09090B]/95 p-6 lg:col-span-5">
          <div className="font-mono text-[10px] uppercase text-zinc-500">
            ENGENHARIA DE PROMPT RESTRITA AO SERVIDOR
          </div>
          <h3 className="font-display text-base font-medium text-white">Camadas Internas do Larius</h3>
          <div className="space-y-2.5">
            {promptLayers.map((layer) => (
              <div key={layer.layer_id} className="border border-white/[0.07] bg-[#030304] p-3 font-mono text-xs">
                <div className="font-semibold text-white">{layer.title}</div>
                <p className="mt-1 text-[11px] text-zinc-400">{layer.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 border border-white/[0.08] bg-[#09090B]/95 p-6 lg:col-span-7">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase text-zinc-500">AUDITORIA & TELEMETRIA</div>
              <h3 className="font-display text-base font-medium text-white">Logs do Sistema</h3>
            </div>
            <button
              onClick={() => void loadAdminWorkspace()}
              className="flex items-center gap-1.5 border border-white/[0.12] bg-[#030304] px-3 py-1.5 font-mono text-[11px] text-zinc-300 hover:text-white"
            >
              <RefreshCw className="h-3 w-3" />
              <span>Atualizar</span>
            </button>
          </div>

          <div className="max-h-72 space-y-1.5 overflow-y-auto border border-white/[0.07] bg-[#030304] p-3 font-mono text-[11px]">
            {logs.map((entry, idx) => (
              <div key={`${entry.timestamp}-${idx}`} className="flex flex-wrap items-baseline gap-2 border-b border-white/[0.04] pb-1.5">
                <span className="text-zinc-500">{entry.timestamp}</span>
                <span
                  className={
                    entry.level === 'ERROR'
                      ? 'text-rose-400'
                      : entry.level === 'WARN'
                      ? 'text-amber-300'
                      : 'text-emerald-400'
                  }
                >
                  [{entry.category}/{entry.level}]
                </span>
                <span className="text-zinc-200">{entry.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
