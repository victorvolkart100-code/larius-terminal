import React, { useEffect, useState } from 'react';
import { Mic, Send, Volume2, VolumeX } from 'lucide-react';
import { askLariusAdvisor } from '../services/api';
import { ExperienceLevel, RiskProfile } from '../types/investimentos';

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
    <section className="pointer-events-auto mx-auto flex min-h-screen max-w-[1380px] flex-col gap-6 px-5 pb-10 pt-[96px] md:px-[36px]">
      {/* Investor Profile & Experience Selector (Zero Dev/Prompt/Voice Controls) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border border-hud-border bg-hud-surface px-5 py-3.5 shadow-hud backdrop-blur-[16px]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted">
            PERFIL DE RISCO:
          </span>
          {RISK_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onChangeRiskProfile(opt.id)}
              className={`border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                riskProfile === opt.id
                  ? 'border-hud-borderActive bg-accretion-gold font-semibold text-void'
                  : 'border-hud-border bg-void/80 text-text-muted hover:border-hud-borderActive hover:text-text-primary'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted">
            EXPERIÊNCIA:
          </span>
          {EXPERIENCE_OPTIONS.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => onChangeExperienceLevel(lvl.id)}
              className={`border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                experienceLevel === lvl.id
                  ? 'border-hud-borderActive bg-accretion-bronze/60 font-semibold text-accretion-photon'
                  : 'border-hud-border bg-void/80 text-text-muted hover:border-hud-borderActive hover:text-text-primary'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Stage: Singularity Chamber + Conversation */}
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative flex min-h-[460px] flex-col justify-between overflow-hidden border border-hud-border bg-void/25 p-5 shadow-hud backdrop-blur-[4px] lg:col-span-6">
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px]">
            <div className="flex items-center gap-2 text-accretion-gold">
              <span
                className={`h-2 w-2 ${
                  isSpeaking || isListening ? 'animate-ping bg-signal-positive' : 'bg-accretion-amber'
                }`}
              />
              <span>LARIUS // VISÃO {activeFocus}</span>
            </div>

            <button
              onClick={onToggleMute}
              className="border border-hud-border bg-hud-surface p-1.5 text-accretion-gold transition-colors hover:border-hud-borderActive hover:text-accretion-photon"
              aria-label="Alternar áudio"
            >
              {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            </button>
          </div>

          <div
            className="pointer-events-none my-auto flex flex-col items-center justify-center py-10 text-center"
            aria-hidden="true"
          >
            <div
              className={`h-28 w-28 rounded-full border transition-all duration-300 ${
                isSpeaking || isListening
                  ? 'scale-110 border-accretion-photon/60 shadow-[0_0_50px_rgba(245,183,79,0.35)]'
                  : 'border-hud-border shadow-[0_0_24px_rgba(217,119,6,0.18)]'
              }`}
            />
            <span className="mt-4 font-mono text-[10px] tracking-[0.18em] text-accretion-gold/85">
              {isListening
                ? 'ESCUTANDO MICROFONE...'
                : isSpeaking
                ? 'SÍNTESE VOCAL ATIVA'
                : 'NÚCLEO SINGULARITY // PRONTO'}
            </span>
          </div>

          <div className="relative z-10 mt-auto flex flex-col items-center gap-3 pt-4">
            <div className="flex h-6 items-end gap-1" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1 transition-all duration-150 ${
                    isSpeaking || isListening ? 'bg-accretion-gold' : 'bg-accretion-bronze/50'
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
                className="flex items-center gap-2 bg-accretion-gold px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-void shadow-[0_0_20px_rgba(245,183,79,0.25)] transition-colors hover:bg-accretion-photon"
              >
                <Mic className="h-3.5 w-3.5" />
                <span>{isListening ? 'Ouvindo Você...' : 'Falar com Larius'}</span>
              </button>
              {isSpeaking && (
                <button
                  onClick={onStopSpeech}
                  className="border border-hud-border bg-hud-surface px-3.5 py-2.5 font-mono text-[11px] text-text-primary transition-colors hover:border-hud-borderActive hover:text-accretion-gold"
                >
                  Silenciar
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex min-h-[460px] flex-col justify-between border border-hud-border bg-hud-surface shadow-hud backdrop-blur-[16px] lg:col-span-6">
          <div className="flex items-center justify-between border-b border-hud-border px-5 py-3.5">
            <div>
              <h2 className="font-display text-sm font-medium text-text-primary">Consultor Larius</h2>
              <p className="font-mono text-[11px] text-text-muted">
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
                    ? 'ml-10 border border-hud-borderActive bg-accretion-gold p-3.5 font-medium text-void'
                    : 'mr-4 space-y-2 border border-hud-border bg-void/85 p-4 text-text-primary'
                }
              >
                {m.sender === 'larius' && (
                  <div className="flex items-center justify-between font-mono text-[10px] text-text-muted">
                    <span className="font-semibold text-accretion-gold">LARIUS // CONSULTORIA</span>
                    {m.tickers && m.tickers.length > 0 && (
                      <span className="text-accretion-photon/90">ATIVOS: {m.tickers.join(' · ')}</span>
                    )}
                  </div>
                )}
                <div className="whitespace-pre-line">{m.text}</div>
              </div>
            ))}
            {loading && (
              <div className="mr-8 border border-hud-border bg-void/85 p-3 font-mono text-xs text-accretion-gold">
                Analisando cenário e recomendações...
              </div>
            )}
          </div>

          <div className="space-y-3 border-t border-hud-border bg-void/80 p-4">
            <div className="flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((qp) => (
                <button
                  key={qp}
                  onClick={() => void sendQuestion(qp)}
                  className="border border-hud-border bg-hud-surface px-2.5 py-1 text-left font-mono text-[10.5px] text-text-muted transition-colors hover:border-hud-borderActive hover:text-accretion-photon"
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
                className="flex-1 border border-hud-border bg-void/90 px-3.5 py-2.5 text-xs text-text-primary placeholder-text-muted/60 focus:border-hud-borderActive focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-accretion-gold px-4 py-2.5 font-mono text-xs font-semibold uppercase text-void transition-colors hover:bg-accretion-photon disabled:opacity-50"
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
