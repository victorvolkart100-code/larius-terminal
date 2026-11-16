import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { ExperienceLevel, HudViewId, MacroSnapshot, RiskProfile } from '../types/investimentos';
import { ChamferCard } from '../components/hud/ChamferCard';

interface HudOverviewViewProps {
  macro: MacroSnapshot;
  stealthMode: boolean;
  riskProfile: RiskProfile;
  onChangeRiskProfile: (profile: RiskProfile) => void;
  experienceLevel: ExperienceLevel;
  onChangeExperienceLevel: (level: ExperienceLevel) => void;
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

export const HudOverviewView: React.FC<HudOverviewViewProps> = ({
  macro,
  stealthMode,
  riskProfile,
  onChangeRiskProfile,
  experienceLevel,
  onChangeExperienceLevel,
  onNavigate,
  onAskFromHud,
}) => {
  const [quickInput, setQuickInput] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    onAskFromHud(quickInput.trim());
    setQuickInput('');
  };

  return (
    <section className="pointer-events-none relative h-screen w-full overflow-hidden bg-transparent pt-[72px]">
      {/* Telemetry Anchors over Singularity Centerpiece */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <svg className="h-full w-full" aria-hidden="true">
          <line x1="17%" y1="21%" x2="29%" y2="21%" stroke="rgba(245, 183, 79, 0.28)" strokeWidth="1" />
          <line x1="29%" y1="21%" x2="36%" y2="36%" stroke="rgba(245, 183, 79, 0.28)" strokeWidth="1" />
          <circle cx="36%" cy="36%" r="2.5" fill="#FFFDF5" />

          <line x1="81%" y1="22%" x2="70%" y2="22%" stroke="rgba(245, 183, 79, 0.28)" strokeWidth="1" />
          <line x1="70%" y1="22%" x2="62%" y2="35%" stroke="rgba(245, 183, 79, 0.28)" strokeWidth="1" />
          <circle cx="62%" cy="35%" r="2.5" fill="#F5B74F" />

          <line x1="65%" y1="45%" x2="80%" y2="45%" stroke="rgba(245, 183, 79, 0.18)" strokeWidth="1" />
          <circle cx="65%" cy="45%" r="2" fill="#D97706" />
        </svg>

        <div
          className="anim-hud-up absolute left-[36px] top-[122px] max-w-[205px]"
          style={{ animationDelay: '380ms' }}
        >
          <div className="font-mono text-[11px] tracking-[0.06em] text-accretion-gold">[ LARIUS_IA ]</div>
          <p className="mt-1 text-[11px] leading-[15px] text-text-muted">
            Consultoria patrimonial em tempo real por voz e texto.
          </p>
        </div>

        <div
          className="anim-hud-up absolute right-[36px] top-[126px] max-w-[215px] text-right"
          style={{ animationDelay: '480ms' }}
        >
          <div className="font-mono text-[11px] tracking-[0.06em] text-accretion-gold">[ RENDA_ISENTA_IR ]</div>
          <p className="mt-1 font-mono text-[11px] leading-[15px] text-text-muted tabular-nums">
            {stealthMode ? 'R$ ••••• / mês' : 'R$ 2.480/mês'} · Sem retenção na PF.
          </p>
        </div>

        <div
          className="anim-hud-up absolute right-[36px] top-[42%] max-w-[215px] text-right"
          style={{ animationDelay: '580ms' }}
        >
          <div className="font-mono text-[11px] tracking-[0.06em] text-accretion-gold">[ PROTEÇÃO_MACRO ]</div>
          <p className="mt-1 font-mono text-[11px] leading-[15px] text-text-muted tabular-nums">
            Selic {macro.selic_pct.toFixed(2)}% · Dólar R$ {macro.usd_brl.toFixed(2)} · IPCA{' '}
            {macro.ipca_pct.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Bottom Executive Row */}
      <div className="pointer-events-none absolute bottom-6 left-5 right-5 z-20 flex flex-col items-start justify-between gap-6 md:bottom-[36px] md:left-[36px] md:right-[36px] lg:flex-row lg:items-end">
        <div className="pointer-events-auto anim-hud-up max-w-[580px] space-y-4" style={{ animationDelay: '220ms' }}>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 border border-hud-border bg-hud-surface px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-accretion-gold backdrop-blur-[16px]">
                <span className="h-1.5 w-1.5 bg-signal-positive" />
                <span>PERFIL ATIVO</span>
              </span>

              {RISK_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onChangeRiskProfile(opt.id)}
                  className={`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors ${
                    riskProfile === opt.id
                      ? 'border-hud-borderActive bg-accretion-gold font-semibold text-void'
                      : 'border-hud-border bg-hud-surface text-text-muted backdrop-blur-[16px] hover:border-hud-borderActive hover:text-text-primary'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-text-muted">
                NÍVEL:
              </span>
              {EXPERIENCE_OPTIONS.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => onChangeExperienceLevel(lvl.id)}
                  className={`border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.08em] transition-colors ${
                    experienceLevel === lvl.id
                      ? 'border-hud-borderActive bg-accretion-bronze/60 font-semibold text-accretion-photon'
                      : 'border-hud-border bg-void/70 text-text-muted hover:border-hud-borderActive hover:text-text-primary'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          <h1 className="font-display text-[36px] font-medium leading-[0.98] tracking-[-0.03em] text-text-primary sm:text-[48px] md:text-[58px]">
            Disciplina.
            <br />
            <span className="text-accretion-gold">Capital Blindado.</span>
          </h1>

          <p className="max-w-[440px] text-[13px] leading-[20px] text-text-muted md:text-[14px]">
            Seleção de ações B3 e fundos imobiliários isentos, projeções líquidas contra bancos
            tradicionais e orientação por voz com o Larius.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onNavigate('larius')}
              className="flex items-center gap-2.5 bg-accretion-gold px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.06em] text-void shadow-[0_0_24px_rgba(245,183,79,0.25)] transition-colors hover:bg-accretion-photon"
            >
              <span>✦</span>
              <span>Conversar com Larius</span>
            </button>

            <button
              onClick={() => onNavigate('assets')}
              className="flex items-center gap-2 border border-hud-border bg-hud-surface px-5 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-text-primary backdrop-blur-[16px] transition-colors hover:border-hud-borderActive hover:text-accretion-gold"
            >
              <span>Ver Recomendações</span>
              <ArrowRight className="h-3.5 w-3.5 text-accretion-gold" />
            </button>
          </div>
        </div>

        <div className="pointer-events-auto anim-hud-up w-full sm:w-[348px]" style={{ animationDelay: '400ms' }}>
          <ChamferCard badge="RESUMO PATRIMONIAL // HUD">
            <div className="space-y-3">
              <div className="flex items-baseline justify-between font-mono tabular-nums">
                <span className="text-[11px] text-text-muted">PROJEÇÃO 10 ANOS</span>
                <span className="text-sm font-semibold text-accretion-photon">
                  {stealthMode ? 'R$ ••••••' : 'R$ 321.922'}
                </span>
              </div>

              <p className="text-[12px] leading-[17px] text-text-primary/90">
                Carteira calibrada para superar em <strong className="text-signal-positive">+79%</strong> o
                CDI líquido de bancos tradicionais.
              </p>

              <form onSubmit={handleQuickSubmit} className="flex items-center border border-hud-border bg-void/90">
                <input
                  type="text"
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  placeholder="Pergunte ao Larius (ex: ITUB4)..."
                  className="w-full bg-transparent px-3 py-2 font-mono text-[11px] text-text-primary placeholder-text-muted/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-8 w-8 shrink-0 items-center justify-center bg-accretion-gold text-void transition-colors hover:bg-accretion-photon"
                  aria-label="Enviar para Larius"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>

              <button
                onClick={() => onNavigate('compound')}
                className="block font-mono text-[11px] tracking-[0.04em] text-accretion-gold underline-offset-4 hover:text-accretion-photon hover:underline"
              >
                SIMULADOR_IR_E_BANCOS →
              </button>
            </div>
          </ChamferCard>
        </div>
      </div>
    </section>
  );
};
