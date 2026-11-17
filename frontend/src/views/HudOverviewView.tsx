import React, { useState } from 'react';
import { Mic, Play, Send, SlidersHorizontal, Square, Volume2, VolumeX } from 'lucide-react';
import { Asset, ExperienceLevel, HudViewId, MacroSnapshot, RiskProfile } from '../types/investimentos';

interface HudOverviewViewProps {
  macro: MacroSnapshot;
  assets: Asset[];
  stealthMode: boolean;
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
  onNavigate: (view: HudViewId) => void;
  onAskFromHud: (promptText: string) => void;
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

const EQUALIZER_BARS = [
  18, 28, 44, 62, 36, 52, 78, 94, 64, 42, 86, 100, 74, 56, 92, 68, 46, 82, 60, 38, 72, 50, 32, 48, 26, 16,
];

const ALLOCATION_BY_PROFILE: Record<
  RiskProfile,
  {
    yieldLabel: string;
    subLabel: string;
    slices: Array<{ label: string; pct: number; color: string }>;
  }
> = {
  CONSERVADOR: {
    yieldLabel: '14,4%',
    subLabel: 'Renda & Selic',
    slices: [
      { label: 'Bancos & Selic', pct: 40, color: '#FFFDF5' },
      { label: 'FIIs Isentos IR', pct: 30, color: '#F5B74F' },
      { label: 'Saneamento IPCA+', pct: 20, color: '#D97706' },
      { label: 'Receita Dólar', pct: 10, color: '#78350F' },
    ],
  },
  MODERADO: {
    yieldLabel: '16,2%',
    subLabel: 'Isento IR PF',
    slices: [
      { label: 'Saneamento IPCA+', pct: 30, color: '#FFFDF5' },
      { label: 'FIIs Isentos IR', pct: 25, color: '#F5B74F' },
      { label: 'Bancos & Seguro', pct: 25, color: '#D97706' },
      { label: 'Hedge Dólar', pct: 20, color: '#78350F' },
    ],
  },
  ARROJADO: {
    yieldLabel: '18,6%',
    subLabel: 'Crescimento B3',
    slices: [
      { label: 'Hedge Dólar Global', pct: 35, color: '#FFFDF5' },
      { label: 'Saneamento IPCA+', pct: 25, color: '#F5B74F' },
      { label: 'Bancos Líderes', pct: 20, color: '#D97706' },
      { label: 'FIIs Logísticos', pct: 20, color: '#78350F' },
    ],
  },
};

export const HudOverviewView: React.FC<HudOverviewViewProps> = ({
  macro,
  assets,
  stealthMode,
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
  onNavigate,
  onAskFromHud,
}) => {
  const [quickInput, setQuickInput] = useState('');
  const [quoteTab, setQuoteTab] = useState<'mercado' | 'alocacao' | 'cotacao'>('mercado');

  const voiceActive = isSpeaking || isListening;
  const allocConfig = ALLOCATION_BY_PROFILE[riskProfile];
  const topAssets = assets.filter((a) => a.group !== 'AVOID').slice(0, 5);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    onAskFromHud(quickInput.trim());
    setQuickInput('');
  };

  // Build SVG Donut chart stroke-dasharray segments (radius = 36, circumference = 226.19)
  const radius = 36;
  const circum = 2 * Math.PI * radius;
  let accumPct = 0;

  return (
    <section className="pointer-events-none relative min-h-screen w-full overflow-x-hidden bg-transparent pb-8 pt-[76px] xl:pl-[64px]">
      {/* Subtle Golden Constellation Callout Lines connecting Singularity Wing to Right HUD Cards */}
      <svg
        className="pointer-events-none fixed inset-0 z-10 hidden h-full w-full lg:block"
        aria-hidden="true"
      >
        <line x1="63%" y1="49%" x2="76%" y2="49%" stroke="rgba(245, 183, 79, 0.30)" strokeWidth="1" />
        <circle cx="63%" cy="49%" r="2.5" fill="#FFFDF5" />
        <circle cx="76%" cy="49%" r="2" fill="#F5B74F" />

        <polyline
          points="66%,55% 72%,67% 76%,69%"
          fill="none"
          stroke="rgba(245, 183, 79, 0.24)"
          strokeWidth="1"
        />
        <circle cx="66%" cy="55%" r="2.5" fill="#F5B74F" />
        <circle cx="76%" cy="69%" r="2" fill="#D97706" />

        <line x1="23%" y1="36%" x2="33%" y2="36%" stroke="rgba(245, 183, 79, 0.20)" strokeWidth="1" />
        <circle cx="33%" cy="36%" r="2" fill="#F5B74F" />
      </svg>

      {/* Peripheral 3-Column Singularity Cockpit Layout (Center stays 100% unobstructed over Gargantua) */}
      <div className="mx-auto flex min-h-[calc(100vh-92px)] max-w-[1680px] flex-col justify-between gap-5 px-4 md:px-6 lg:flex-row lg:items-stretch">
        {/* ==================== LEFT COLUMN: LARIUS AUDIO OSCILLOSCOPE + RISK PROFILE ==================== */}
        <div className="pointer-events-auto flex w-full flex-col justify-between gap-4 lg:w-[286px] xl:w-[298px]">
          {/* Card 1: LARIUS: Status & Reactive Sound Waves */}
          <div className="rounded-xl border border-hud-border bg-hud-surface p-4 shadow-hud backdrop-blur-[16px]">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-semibold tracking-tight text-text-primary">
                LARIUS: <span className="text-accretion-gold">Status</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className="rounded border border-hud-borderActive bg-accretion-gold/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-accretion-gold">
                  {voiceActive ? 'Ativo' : 'On'}
                </span>
                <button
                  onClick={() => onNavigate('larius')}
                  className="rounded border border-hud-border bg-void/60 px-1.5 py-0.5 font-mono text-[10px] text-text-muted hover:border-hud-borderActive hover:text-text-primary"
                  title="Expandir Consultor Larius"
                >
                  •••
                </button>
              </div>
            </div>

            {/* 26-Bar Symmetrical Golden Vertical Waveform */}
            <div className="my-3.5 flex h-12 items-center justify-between gap-[3px] px-1" aria-hidden="true">
              {EQUALIZER_BARS.map((pct, idx) => {
                const dynamicHeight = voiceActive
                  ? Math.max(18, ((pct + ((idx * 17) % 35)) % 100))
                  : Math.max(14, Math.round(pct * 0.72));
                return (
                  <span
                    key={idx}
                    className="w-[2.5px] rounded-full bg-gradient-to-t from-accretion-bronze via-accretion-gold to-accretion-photon transition-all duration-150"
                    style={{
                      height: `${dynamicHeight}%`,
                      opacity: voiceActive ? 0.95 : 0.78,
                    }}
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-text-muted">Ondas sonoras reativas</span>
              <span className="rounded border border-hud-border bg-accretion-bronze/30 px-2 py-0.5 font-mono text-[9.5px] text-accretion-gold">
                Reativo
              </span>
            </div>

            {/* Glowing SVG Harmonic Sine-Wave Oscilloscope */}
            <div className="relative my-2.5 h-14 w-full overflow-hidden rounded-lg border border-hud-border/60 bg-void/70 px-1 py-1">
              <svg viewBox="0 0 240 52" className="h-full w-full overflow-visible" aria-hidden="true">
                <defs>
                  <filter id="goldWaveGlow" x="-20%" y="-40%" width="140%" height="180%">
                    <feGaussianBlur stdDeviation="2.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Subtle vertical ruler ticks */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <line
                    key={i}
                    x1={12 + i * 14.5}
                    y1={8}
                    x2={12 + i * 14.5}
                    y2={44}
                    stroke="rgba(245, 183, 79, 0.08)"
                    strokeWidth="1"
                  />
                ))}
                <line x1="0" y1="26" x2="240" y2="26" stroke="rgba(245, 183, 79, 0.18)" strokeWidth="0.8" />
                {/* Secondary Amber Harmonic Wave */}
                <path
                  d="M 0 26 Q 18 22, 34 26 T 68 20 T 102 33 T 136 18 T 170 30 T 204 23 T 240 26"
                  fill="none"
                  stroke="#D97706"
                  strokeOpacity="0.55"
                  strokeWidth="1.2"
                />
                {/* Primary Photon-Gold Oscilloscope Wave */}
                <path
                  d="M 0 26 C 14 26, 22 10, 34 26 C 46 42, 56 8, 70 26 C 84 44, 94 14, 108 26 C 122 38, 134 16, 148 26 C 162 36, 176 20, 192 26 C 208 32, 222 24, 240 26"
                  fill="none"
                  stroke="#FFFDF5"
                  strokeWidth="1.7"
                  filter="url(#goldWaveGlow)"
                />
              </svg>
            </div>

            <div className="mb-2.5 text-[10.5px] text-text-muted">
              Atividade neural acústica · {voiceActive ? 'Sincronizado' : 'Pronto'}
            </div>

            {/* 4-Button Audio Control Dock (matches Image 2) */}
            <div className="grid grid-cols-4 gap-1.5 rounded-lg border border-hud-border bg-void/80 p-1">
              <button
                onClick={onToggleMute}
                title={muted ? 'Ativar som' : 'Silenciar'}
                className="flex h-7 items-center justify-center rounded text-text-muted transition-colors hover:bg-hud-surface hover:text-text-primary"
              >
                {muted ? <VolumeX className="h-3.5 w-3.5 text-signal-negative" /> : <Volume2 className="h-3.5 w-3.5" />}
              </button>

              <button
                onClick={() => onStartVoice((transcript) => onAskFromHud(transcript))}
                title="Falar com Larius por microfone"
                className="flex h-7 items-center justify-center rounded border border-hud-borderActive bg-accretion-gold/20 text-accretion-gold shadow-[0_0_12px_rgba(245,183,79,0.25)] transition-colors hover:bg-accretion-gold hover:text-void"
              >
                <Mic className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={() => {
                  if (isSpeaking) {
                    onStopSpeech();
                  } else {
                    onSpeak(
                      `Olá. Sou o Larius no D.investimentos. Sua carteira está calibrada no perfil ${riskProfile.toLowerCase()} com foco em isenção de imposto de renda e proteção patrimonial.`
                    );
                  }
                }}
                title={isSpeaking ? 'Parar fala' : 'Ouvir resumo vocal do Larius'}
                className="flex h-7 items-center justify-center rounded text-text-muted transition-colors hover:bg-hud-surface hover:text-accretion-gold"
              >
                {isSpeaking ? <Square className="h-3 w-3" /> : <Play className="h-3.5 w-3.5" />}
              </button>

              <button
                onClick={() => onNavigate('larius')}
                title="Abrir terminal completo do Larius"
                className="flex h-7 items-center justify-center rounded text-text-muted transition-colors hover:bg-hud-surface hover:text-accretion-photon"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Investor Risk Profile & Experience Selector (Zero Dev/Admin Controls) */}
          <div className="rounded-xl border border-hud-border bg-hud-surface p-4 shadow-hud backdrop-blur-[16px]">
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-text-muted">Perfil de risco</label>
                <select
                  value={riskProfile}
                  onChange={(e) => onChangeRiskProfile(e.target.value as RiskProfile)}
                  className="mt-1.5 w-full rounded-lg border border-hud-border bg-void/85 px-3 py-2 font-sans text-xs font-medium text-text-primary focus:border-hud-borderActive focus:outline-none"
                >
                  <option value="CONSERVADOR">Conservador (Foco Renda & Selic)</option>
                  <option value="MODERADO">Moderado (IPCA+ & Dividendos Isentos)</option>
                  <option value="ARROJADO">Arrojado (Crescimento & Dólar)</option>
                </select>
              </div>

              <div>
                <span className="block text-[11px] font-medium text-text-muted">Perfil de risco</span>
                <div className="mt-1.5 grid grid-cols-3 gap-1 rounded-lg border border-hud-border bg-void/75 p-1">
                  {RISK_OPTIONS.map((opt) => {
                    const active = riskProfile === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => onChangeRiskProfile(opt.id)}
                        className={`rounded-md py-1.5 font-sans text-[11px] transition-all ${
                          active
                            ? 'border border-hud-borderActive bg-accretion-amber/30 font-semibold text-accretion-photon shadow-[0_0_12px_rgba(245,183,79,0.2)]'
                            : 'text-text-muted hover:text-text-primary'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="block text-[11px] font-medium text-text-muted">Nível do investidor</span>
                <div className="mt-1.5 grid grid-cols-3 gap-1 rounded-lg border border-hud-border bg-void/75 p-1">
                  {EXPERIENCE_OPTIONS.map((lvl) => {
                    const active = experienceLevel === lvl.id;
                    return (
                      <button
                        key={lvl.id}
                        onClick={() => onChangeExperienceLevel(lvl.id)}
                        className={`rounded-md py-1.5 font-sans text-[11px] transition-all ${
                          active
                            ? 'border border-hud-borderActive bg-accretion-amber/30 font-semibold text-accretion-photon shadow-[0_0_12px_rgba(245,183,79,0.2)]'
                            : 'text-text-muted hover:text-text-primary'
                        }`}
                      >
                        {lvl.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[10.5px]">
                <button
                  onClick={() => onNavigate('assets')}
                  className="rounded-lg border border-hud-border bg-void/80 py-2 text-accretion-gold transition-colors hover:border-hud-borderActive hover:text-accretion-photon"
                >
                  Alocador B3 →
                </button>
                <button
                  onClick={() => onNavigate('compound')}
                  className="rounded-lg border border-hud-border bg-void/80 py-2 text-text-primary transition-colors hover:border-hud-borderActive hover:text-accretion-gold"
                >
                  Juros & IR →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== CENTER STAGE: UNOBSTRUCTED GARGANTUA + BOTTOM VOICE DOCK ==================== */}
        <div className="pointer-events-none flex flex-1 flex-col items-center justify-between py-2">
          {/* Top Subtle Telemetry Status Pill */}
          <div className="hidden items-center gap-3 rounded-full border border-hud-border/60 bg-void/50 px-4 py-1 font-mono text-[10px] tracking-[0.14em] text-text-muted backdrop-blur-md xl:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accretion-gold" />
            <span>SINGULARITY CORE // D.INVESTIMENTOS</span>
            <span className="text-accretion-gold">IBOV {macro.ibov_points.toLocaleString('pt-BR')} PTS</span>
          </div>

          {/* Center stays 100% open so the Gargantua Black Hole shines unobstructed */}
          <div className="my-auto min-h-[260px] w-full" aria-hidden="true" />

          {/* Bottom Floating LARIUS Voice & Quick Query Bar (matches Image 2 bottom dock) */}
          <div className="pointer-events-auto w-full max-w-[540px]">
            <form
              onSubmit={handleQuickSubmit}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-hud-border bg-hud-surface px-4 py-2.5 shadow-hud backdrop-blur-[16px] transition-colors focus-within:border-hud-borderActive"
            >
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onStartVoice((transcript) => onAskFromHud(transcript))}
                  className="flex items-center gap-2 text-left"
                  title="Clique para falar por voz"
                >
                  <span className="font-sans text-xs font-semibold text-text-primary">LARIUS:</span>
                  <span className="font-sans text-xs font-medium text-accretion-gold">
                    {isListening
                      ? 'Ouvindo sua voz...'
                      : isSpeaking
                      ? 'Sintetizando resposta...'
                      : 'On-line e Ouvindo'}
                  </span>
                </button>

                {/* Mini Golden Waveform inside bottom dock */}
                <div className="hidden h-4 items-center gap-[2px] pl-1 sm:flex" aria-hidden="true">
                  {[25, 55, 40, 85, 100, 65, 90, 50, 75, 45, 30, 60, 35, 20].map((h, i) => (
                    <span
                      key={i}
                      className="w-[2px] rounded-full bg-accretion-gold/85"
                      style={{
                        height: `${voiceActive ? Math.min(100, h + 15) : h}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2">
                <input
                  type="text"
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  placeholder="Pergunte sobre ITUB4, FIIs ou aporte..."
                  className="w-full min-w-[140px] bg-transparent font-mono text-[11px] text-text-primary placeholder-text-muted/65 focus:outline-none sm:w-44"
                />
                <button
                  type="submit"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accretion-gold text-void transition-colors hover:bg-accretion-photon"
                  aria-label="Enviar pergunta ao Larius"
                >
                  <Send className="h-3 w-3" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ==================== RIGHT COLUMN: PERFORMANCE + DONUT ALLOCATION + MARKET QUOTES ==================== */}
        <div className="pointer-events-auto flex w-full flex-col justify-between gap-3.5 lg:w-[300px] xl:w-[314px]">
          {/* Card 1: Performance Line/Area Chart */}
          <div className="rounded-xl border border-hud-border bg-hud-surface p-4 shadow-hud backdrop-blur-[16px]">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <h2 className="font-sans text-xs font-semibold text-text-primary">Performance</h2>
                <span className="font-mono text-[10px] text-text-muted">
                  Projeção 10A:{' '}
                  <strong className="text-accretion-photon">
                    {stealthMode ? 'R$ ••••••' : 'R$ 321.922'}
                  </strong>
                </span>
              </div>
              <span className="rounded border border-signal-positive/35 bg-signal-positive/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-signal-positive">
                +79% vs CDI
              </span>
            </div>

            <svg viewBox="0 0 260 105" className="h-[96px] w-full overflow-visible">
              <defs>
                <linearGradient id="hudPerfGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5B74F" stopOpacity="0.42" />
                  <stop offset="65%" stopColor="#D97706" stopOpacity="0.10" />
                  <stop offset="100%" stopColor="#030305" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[20, 40, 60, 80, 100].map((val, idx) => {
                const y = 84 - idx * 17;
                return (
                  <g key={val}>
                    <line
                      x1="24"
                      y1={y}
                      x2="254"
                      y2={y}
                      stroke="rgba(245, 183, 79, 0.09)"
                      strokeWidth="1"
                    />
                    <text x="18" y={y + 3} textAnchor="end" fill="#9E9282" fontSize="8.5" fontFamily="JetBrains Mono">
                      {val}
                    </text>
                  </g>
                );
              })}

              {/* Golden Area + Crisp Growth Curve */}
              <path
                d="M 26 78 L 52 66 L 78 70 L 104 52 L 130 56 L 156 38 L 182 43 L 208 25 L 234 29 L 252 14 L 252 84 L 26 84 Z"
                fill="url(#hudPerfGrad)"
              />
              <path
                d="M 26 78 L 52 66 L 78 70 L 104 52 L 130 56 L 156 38 L 182 43 L 208 25 L 234 29 L 252 14"
                fill="none"
                stroke="#F5B74F"
                strokeWidth="1.8"
              />
              <circle cx="252" cy="14" r="3" fill="#FFFDF5" stroke="#D97706" strokeWidth="1.5" />

              {['2A', '4A', '6A', '8A', '10A'].map((lbl, i) => (
                <text
                  key={lbl}
                  x={42 + i * 48}
                  y="98"
                  textAnchor="middle"
                  fill="#9E9282"
                  fontSize="8.5"
                  fontFamily="JetBrains Mono"
                >
                  {lbl}
                </text>
              ))}
            </svg>
          </div>

          {/* Card 2: Alocação de Ativos (SVG Donut Ring Chart — matches Image 2 & MotionSites) */}
          <div className="rounded-xl border border-hud-border bg-hud-surface p-4 shadow-hud backdrop-blur-[16px]">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-sans text-xs font-semibold text-text-primary">Alocação de ativos</h2>
              <button
                onClick={() => onNavigate('assets')}
                className="font-mono text-[10px] text-accretion-gold hover:text-accretion-photon"
              >
                Detalhar →
              </button>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="relative flex h-[108px] w-[108px] shrink-0 items-center justify-center">
                <svg viewBox="0 0 96 96" className="h-full w-full -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    fill="none"
                    stroke="rgba(245, 183, 79, 0.10)"
                    strokeWidth="10"
                  />
                  {allocConfig.slices.map((s) => {
                    const segLen = (s.pct / 100) * circum;
                    const gap = 3.5;
                    const dashArray = `${Math.max(2, segLen - gap)} ${circum}`;
                    const dashOffset = -((accumPct / 100) * circum);
                    accumPct += s.pct;
                    return (
                      <circle
                        key={s.label}
                        cx="48"
                        cy="48"
                        r={radius}
                        fill="none"
                        stroke={s.color}
                        strokeWidth="10"
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="butt"
                      />
                    );
                  })}
                </svg>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-xs font-bold text-accretion-photon">
                    {allocConfig.yieldLabel}
                  </span>
                  <span className="font-mono text-[8.5px] uppercase text-text-muted">
                    {allocConfig.subLabel}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-1.5 font-mono text-[10.5px] tabular-nums">
                {allocConfig.slices.map((s) => (
                  <div key={s.label} className="flex items-center justify-between gap-1.5">
                    <span className="flex items-center gap-1.5 truncate text-text-muted">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                      <span className="truncate">{s.label}</span>
                    </span>
                    <strong className="text-text-primary">{s.pct}%</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Cotações de Mercado (Live B3 Telemetry Table) */}
          <div className="rounded-xl border border-hud-border bg-hud-surface p-4 shadow-hud backdrop-blur-[16px]">
            <div className="mb-2.5 flex items-center justify-between">
              <h2 className="font-sans text-xs font-semibold text-text-primary">Cotações de mercado</h2>
              <button
                onClick={() => onNavigate('assets')}
                className="font-mono text-[10px] text-text-muted hover:text-accretion-gold"
              >
                •••
              </button>
            </div>

            <div className="mb-2.5 grid grid-cols-3 gap-1 rounded-lg border border-hud-border bg-void/75 p-1 font-mono text-[10px]">
              {(
                [
                  ['mercado', 'Mercado'],
                  ['alocacao', 'Alocação'],
                  ['cotacao', 'Cotação'],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setQuoteTab(id)}
                  className={`rounded py-1 transition-colors ${
                    quoteTab === id
                      ? 'bg-accretion-bronze/55 font-semibold text-accretion-gold'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="divide-y divide-hud-border/50 font-mono text-[11px] tabular-nums">
              {topAssets.map((asset) => {
                const pos = asset.upside >= 0;
                return (
                  <button
                    key={asset.ticker}
                    onClick={() => onAskFromHud(`Larius, faça uma análise sobre ${asset.ticker}.`)}
                    className="flex w-full items-center justify-between py-1.5 text-left transition-colors hover:bg-accretion-gold/[0.06]"
                    title={`Consultar Larius sobre ${asset.ticker}`}
                  >
                    <div className="min-w-[68px]">
                      <span className="font-semibold text-text-primary">{asset.ticker}</span>
                      <span className="ml-1.5 text-[9.5px] text-text-muted">{asset.type}</span>
                    </div>
                    <span className="text-text-muted">
                      {stealthMode
                        ? 'R$ •••'
                        : quoteTab === 'alocacao'
                        ? `DY ${asset.dy.toFixed(1)}%`
                        : `R$ ${asset.price.toFixed(2)}`}
                    </span>
                    <span
                      className={`min-w-[54px] text-right font-semibold ${
                        pos ? 'text-accretion-gold' : 'text-signal-negative'
                      }`}
                    >
                      {pos ? '+' : ''}
                      {asset.upside.toFixed(1)}%
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
