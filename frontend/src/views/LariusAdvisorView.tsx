import React, { useEffect, useState } from 'react';
import { Mic, Send, Volume2, VolumeX } from 'lucide-react';
import { askLariusAdvisor } from '../services/api';
import { ExperienceLevel, RiskProfile, ShaderUniformParams } from '../types/investimentos';
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
  riskProfile: RiskProfile;
  onChangeRiskProfile: (profile: RiskProfile) => void;
  experienceLevel: ExperienceLevel;
  onChangeExperienceLevel: (level: ExperienceLevel) => void;
  isSpeaking: boolean;
  isListening: boolean;
  muted: boolean;
  shaderParams: ShaderUniformParams;
  getAudioEnergy: () => number;
  onToggleMute: () => void;
  onStopSpeech: () => void;
  onSpeak: (text: string) => void;
  onStartVoice: (cb: (transcript: string) => void) => void;
}

const RISK_OPTIONS: Array<{ id: RiskProfile; label: string }> = [
  { id: 'CONSERVADOR', label: 'Conservador' },
  { id: 'MODERADO', label: 'Moderado' },
  { id: 'ARROJADO', label: 'Arrojado' },
];

const EXPERIENCE_OPTIONS: Array<{ id: ExperienceLevel; label: string }> = [
  { id: 'INICIANTE', label: 'Iniciante' },
  { id: 'INTERMEDIARIO', label: 'Intermediário' },
  { id: 'SENIOR', label: 'Sênior' },
];

const QUICK_PROMPTS = [
  'Onde devo alocar R$ 3.000 este mês?',
  'Quais bancos têm corretagem zero para ações e FIIs?',
  'Compare juros compostos e Imposto de Renda vs CDB.',
  'Analise WEGE3 e ITUB4 para a minha carteira.',
];

export const LariusAdvisorView: React.FC<LariusAdvisorViewProps> = ({
  initialPrompt,
  onConsumeInitialPrompt,
  riskProfile,
  onChangeRiskProfile,
  experienceLevel,
  onChangeExperienceLevel,
  isSpeaking,
  isListening,
  muted,
  shaderParams,
  getAudioEnergy,
  onToggleMute,
  onStopSpeech,
  onSpeak,
  onStartVoice,
}) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeFocus, setActiveFocus] = useState<'CORE' | 'ASSET' | 'COMPOUND' | 'BROKERS'>('CORE');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'larius',
      text: 'Olá. Sou o Larius, seu consultor financeiro no D.investimentos. Ajuste seu perfil de risco acima e pergunte por voz ou texto sobre ações B3, FIIs, juros compostos ou bancos.',
      tickers: ['ITUB4', 'SBSP3', 'WEGE3'],
      focusMode: 'CORE',
    },
  ]);

  const sendQuestion = async (questionText: string) => {
    const trimmed = questionText.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, sender: 'user', text: trimmed }]);
    setLoading(true);

    const res = await askLariusAdvisor(trimmed, riskProfile, experienceLevel);
    setActiveFocus(res.hud_focus_mode);

    setMessages((prev) => [
      ...prev,
      {
        id: `l-${Date.now()}`,
        sender: 'larius',
        text: res.reply_markdown,
        tickers: res.referenced_tickers,
        focusMode: res.hud_focus_mode,
      },
    ]);
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
      {/* Investor Profile & Experience Selector (Zero Dev/Prompt/Voice Controls) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border border-white/[0.08] bg-[#09090B]/90 px-5 py-3.5 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500">
            PERFIL DE RISCO:
          </span>
          {RISK_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onChangeRiskProfile(opt.id)}
              className={`border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                riskProfile === opt.id
                  ? 'border-white/50 bg-[#F4F4F5] font-semibold text-[#030304]'
                  : 'border-white/[0.08] bg-[#030304] text-zinc-400 hover:border-white/25 hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500">
            EXPERIÊNCIA:
          </span>
          {EXPERIENCE_OPTIONS.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => onChangeExperienceLevel(lvl.id)}
              className={`border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                experienceLevel === lvl.id
                  ? 'border-white/40 bg-[#141418] font-semibold text-white'
                  : 'border-white/[0.08] bg-[#030304] text-zinc-400 hover:text-white'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Stage: Voice Sphere + Conversation */}
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative flex min-h-[460px] flex-col justify-between overflow-hidden border border-white/[0.08] bg-[#030304] p-5 lg:col-span-6">
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px]">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className={`h-2 w-2 ${isSpeaking || isListening ? 'animate-ping bg-emerald-400' : 'bg-zinc-500'}`} />
              <span>LARIUS // VISÃO {activeFocus}</span>
            </div>

            <button
              onClick={onToggleMute}
              className="border border-white/[0.12] bg-[#09090B] p-1.5 text-zinc-300 hover:text-white"
              aria-label="Alternar áudio"
            >
              {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            </button>
          </div>

          <div className="absolute inset-0 z-0">
            <LariusShaderCanvas
              isSpeaking={isSpeaking || isListening}
              shaderParams={shaderParams}
              getAudioEnergy={getAudioEnergy}
              className="h-full w-full"
            />
          </div>

          <div className="relative z-10 mt-auto flex flex-col items-center gap-3 pt-4">
            <div className="flex h-6 items-end gap-1" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1 transition-all duration-150 ${
                    isSpeaking || isListening ? 'bg-white' : 'bg-zinc-700'
                  }`}
                  style={{
                    height: isSpeaking || isListening ? `${8 + ((idx * 7) % 16)}px` : '4px',
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

        <div className="flex min-h-[460px] flex-col justify-between border border-white/[0.08] bg-[#09090B]/90 lg:col-span-6">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
            <div>
              <h2 className="font-display text-sm font-medium text-white">Consultor Larius</h2>
              <p className="font-mono text-[11px] text-zinc-500">
                Orientação patrimonial adaptada ao perfil {riskProfile}
              </p>
            </div>
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
                    <span className="font-semibold text-white">LARIUS // CONSULTORIA</span>
                    {m.tickers && m.tickers.length > 0 && <span>ATIVOS: {m.tickers.join(' · ')}</span>}
                  </div>
                )}
                <div className="whitespace-pre-line">{m.text}</div>
              </div>
            ))}
            {loading && (
              <div className="mr-8 border border-white/[0.07] bg-[#030304] p-3 font-mono text-xs text-zinc-400">
                Analisando cenário e recomendações...
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
                placeholder="Pergunte sobre ações, FIIs, impostos ou bancos..."
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
