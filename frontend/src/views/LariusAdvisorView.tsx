import React, { useEffect, useState } from 'react';
import { Code2, Mic, Send, Volume2, VolumeX } from 'lucide-react';
import { askLariusAdvisor } from '../services/api';
import { DEFAULT_PROMPT_LAYERS } from '../data/quantData';
import { AdvisorPersona, AdvisorResponse, PromptEngineeringLayer, ShaderUniformParams } from '../types/investimentos';
import { LariusShaderCanvas } from '../components/three/LariusShaderCanvas';

interface ChatMessage {
  id: string;
  sender: 'user' | 'larius';
  text: string;
  tickers?: string[];
  focusMode?: string;
}

interface LariusAdvisorViewProps {
  initialPrompt: string | null;
  onConsumeInitialPrompt: () => void;
  isSpeaking: boolean;
  isListening: boolean;
  muted: boolean;
  shaderParams: ShaderUniformParams;
  getAudioEnergy: () => number;
  onToggleMute: () => void;
  onStopSpeech: () => void;
  onSpeak: (text: string) => void;
  onStartVoice: (cb: (transcript: string) => void) => void;
  onConnectMic: () => void;
  micConnected: boolean;
}

const PERSONA_OPTIONS: Array<{ id: AdvisorPersona; label: string; desc: string }> = [
  { id: 'fiduciario', label: 'Fiduciário CVM 19', desc: 'Renda isenta & preservação' },
  { id: 'quantitativo', label: 'Estrategista Quant', desc: 'Múltiplos, Sharpe & Beta' },
  { id: 'auditor_custos', label: 'Auditor Bancário', desc: 'Taxas, CDBs & IR regressivo' },
];

const QUICK_PROMPTS = [
  'Qual a alocação recomendada hoje para R$ 3.000/mês?',
  'Compare bancos e corretoras (Íon Itaú, Inter, C6 e XP).',
  'Demonstre juros compostos + Imposto de Renda vs CDB.',
  'Faça uma análise completa de WEGE3 e ITUB4.',
];

export const LariusAdvisorView: React.FC<LariusAdvisorViewProps> = ({
  initialPrompt,
  onConsumeInitialPrompt,
  isSpeaking,
  isListening,
  muted,
  shaderParams,
  getAudioEnergy,
  onToggleMute,
  onStopSpeech,
  onSpeak,
  onStartVoice,
  onConnectMic,
  micConnected,
}) => {
  const [persona, setPersona] = useState<AdvisorPersona>('fiduciario');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPromptLayers, setShowPromptLayers] = useState(false);
  const [layers, setLayers] = useState<PromptEngineeringLayer[]>(DEFAULT_PROMPT_LAYERS);
  const [activeFocus, setActiveFocus] = useState<AdvisorResponse['hud_focus_mode']>('CORE');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'larius',
      text: 'Olá. Sou o Larius, consultor patrimonial do D.investimentos. Selecione uma persona de análise, fale pelo microfone ou envie uma pergunta sobre B3, Imposto de Renda ou bancos.',
      tickers: ['ITUB4', 'SBSP3', 'WEGE3'],
      focusMode: 'CORE',
    },
  ]);

  const sendQuestion = async (questionText: string) => {
    const trimmed = questionText.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    const res = await askLariusAdvisor(trimmed, persona);
    setLayers(res.layers);
    setActiveFocus(res.hud_focus_mode);

    const aiMsg: ChatMessage = {
      id: `l-${Date.now()}`,
      sender: 'larius',
      text: res.reply_markdown,
      tickers: res.referenced_tickers,
      focusMode: res.hud_focus_mode,
    };
    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false);
    onSpeak(res.speech_script);
  };

  useEffect(() => {
    if (initialPrompt) {
      void sendQuestion(initialPrompt);
      onConsumeInitialPrompt();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPrompt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const txt = input;
    setInput('');
    void sendQuestion(txt);
  };

  return (
    <section className="mx-auto flex min-h-screen max-w-[1380px] flex-col gap-6 px-5 pb-10 pt-[96px] md:px-[36px]">
      {/* Persona & Engineering Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border border-white/[0.08] bg-[#09090B]/90 px-5 py-3.5 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500">
            ENGENHARIA DE PERSONA:
          </span>
          {PERSONA_OPTIONS.map((p) => {
            const active = persona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setPersona(p.id)}
                className={`border px-3 py-1.5 text-left font-mono text-[11px] transition-colors ${
                  active
                    ? 'border-white/50 bg-[#F4F4F5] font-semibold text-[#030304]'
                    : 'border-white/[0.08] bg-[#030304] text-zinc-400 hover:border-white/25 hover:text-white'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setShowPromptLayers((v) => !v)}
          className="flex items-center gap-2 border border-white/[0.12] bg-[#141418] px-3 py-1.5 font-mono text-[11px] text-zinc-200 hover:border-white/40"
        >
          <Code2 className="h-3.5 w-3.5" />
          <span>{showPromptLayers ? 'Ocultar Camadas de Prompt' : 'Inspecionar Prompt FastAPI'}</span>
        </button>
      </div>

      {/* Expandable FastAPI Prompt Engineering Blueprint Inspector */}
      {showPromptLayers && (
        <div className="grid grid-cols-1 gap-3 border border-white/[0.1] bg-[#09090B]/95 p-5 md:grid-cols-2 xl:grid-cols-4">
          {layers.map((layer) => (
            <div key={layer.layer_id} className="space-y-1.5 border border-white/[0.07] bg-[#030304] p-3.5">
              <div className="font-mono text-[11px] font-semibold text-white">{layer.title}</div>
              <div className="text-[11px] text-zinc-500">{layer.purpose}</div>
              <p className="pt-1 font-mono text-[10.5px] leading-relaxed text-zinc-300">{layer.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* Main Split Stage: Acoustic 3D Core + Chat Terminal */}
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left 6 Cols: Seamless 3D Orb & Telemetry Waveform */}
        <div className="relative flex min-h-[460px] flex-col justify-between overflow-hidden border border-white/[0.08] bg-[#030304] p-5 lg:col-span-6">
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px]">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className={`h-2 w-2 ${isSpeaking || isListening ? 'animate-ping bg-emerald-400' : 'bg-zinc-500'}`} />
              <span>LARIUS // FOCO HUD: {activeFocus}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onConnectMic}
                className="border border-white/[0.12] bg-[#09090B] px-2.5 py-1 text-[10px] text-zinc-300 hover:border-white/35"
              >
                {micConnected ? 'Áudio Sincronizado ✓' : 'Ligar Microfone 3D'}
              </button>
              <button
                onClick={onToggleMute}
                className="border border-white/[0.12] bg-[#09090B] p-1.5 text-zinc-300 hover:text-white"
                aria-label="Alternar áudio"
              >
                {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {/* Seamless Particle Core */}
          <div className="absolute inset-0 z-0">
            <LariusShaderCanvas
              isSpeaking={isSpeaking || isListening}
              shaderParams={shaderParams}
              getAudioEnergy={getAudioEnergy}
              className="h-full w-full"
            />
          </div>

          {/* Vocari-style Live Voice Waveform & Controls */}
          <div className="relative z-10 mt-auto flex flex-col items-center gap-3 pt-4">
            <div className="flex h-6 items-end gap-1" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1 transition-all duration-150 ${
                    isSpeaking || isListening ? 'bg-white' : 'bg-zinc-700'
                  }`}
                  style={{
                    height:
                      isSpeaking || isListening
                        ? `${8 + ((idx * 7) % 16)}px`
                        : '4px',
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => onStartVoice((t) => void sendQuestion(t))}
                className="flex items-center gap-2 bg-[#F4F4F5] px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[#030304] hover:bg-white"
              >
                <Mic className="h-3.5 w-3.5" />
                <span>{isListening ? 'Ouvindo Você...' : 'Falar com Larius'}</span>
              </button>
              {isSpeaking && (
                <button
                  onClick={onStopSpeech}
                  className="border border-white/20 bg-[#09090B] px-3.5 py-2.5 font-mono text-[11px] text-zinc-300 hover:text-white"
                >
                  Silenciar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right 6 Cols: Conversational Terminal */}
        <div className="flex min-h-[460px] flex-col justify-between border border-white/[0.08] bg-[#09090B]/90 lg:col-span-6">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
            <div>
              <h2 className="font-display text-sm font-medium text-white">Diálogo Estruturado Larius</h2>
              <p className="font-mono text-[11px] text-zinc-500">Saída fiduciária sincronizada com voz PT-BR</p>
            </div>
            <span className="font-mono text-[10px] text-zinc-400">CVM 19 FEE-BASED</span>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-5 text-[13px] leading-relaxed">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.sender === 'user'
                    ? 'ml-10 border border-white/20 bg-[#F4F4F5] p-3.5 font-medium text-[#030304]'
                    : 'mr-4 space-y-2 border border-white/[0.08] bg-[#030304] p-4 text-zinc-200'
                }
              >
                {m.sender === 'larius' && (
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
                    <span className="font-semibold text-white">LARIUS // ADVISORY</span>
                    {m.tickers && m.tickers.length > 0 && (
                      <span>ATIVOS: {m.tickers.join(' · ')}</span>
                    )}
                  </div>
                )}
                <div className="whitespace-pre-line">{m.text}</div>
              </div>
            ))}
            {loading && (
              <div className="mr-8 border border-white/[0.07] bg-[#030304] p-3 font-mono text-xs text-zinc-400">
                Processando engenharia de prompt e telemetria quantitativa...
              </div>
            )}
          </div>

          <div className="space-y-3 border-t border-white/[0.07] bg-[#030304]/90 p-4">
            <div className="flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((qp) => (
                <button
                  key={qp}
                  onClick={() => void sendQuestion(qp)}
                  className="border border-white/[0.08] bg-[#09090B] px-2.5 py-1 text-left font-mono text-[10.5px] text-zinc-300 transition-colors hover:border-white/35 hover:text-white"
                >
                  {qp}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Solicite uma tese, ticker (WEGE3) ou comparativo de custos..."
                className="flex-1 border border-white/[0.12] bg-[#09090B] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-[#F4F4F5] px-4 py-2.5 font-mono text-xs font-semibold uppercase text-[#030304] hover:bg-white disabled:opacity-50"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Enviar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
