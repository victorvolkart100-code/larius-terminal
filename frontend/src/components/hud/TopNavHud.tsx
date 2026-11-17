import React, { useState } from 'react';
import { Activity, BarChart3, Compass, Eye, EyeOff, Layers, Menu, Mic, Sparkles, X } from 'lucide-react';
import { HudViewId, MacroSnapshot } from '../../types/investimentos';
import { BrandLogo } from './BrandLogo';

interface TopNavHudProps {
  activeView: HudViewId;
  onSelectView: (view: HudViewId) => void;
  macro: MacroSnapshot;
  stealthMode: boolean;
  onToggleStealth: () => void;
  isVoiceActive: boolean;
  onQuickVoiceClick: () => void;
}

const NAV_ITEMS: Array<{ id: HudViewId; num: string; label: string; icon: React.FC<{ className?: string }> }> = [
  { id: 'hud', num: '01', label: 'VISÃO_HUD', icon: Activity },
  { id: 'larius', num: '02', label: 'LARIUS_IA', icon: Sparkles },
  { id: 'assets', num: '03', label: 'CARTEIRA_B3', icon: Layers },
  { id: 'compound', num: '04', label: 'JUROS_&_BANCOS', icon: BarChart3 },
];

export const TopNavHud: React.FC<TopNavHudProps> = ({
  activeView,
  onSelectView,
  macro,
  stealthMode,
  onToggleStealth,
  isVoiceActive,
  onQuickVoiceClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Left Vertical Cockpit Icon Rail (Desktop) */}
      <aside
        className="pointer-events-auto fixed bottom-0 left-0 top-0 z-30 hidden w-[52px] flex-col items-center justify-between border-r border-hud-border bg-void/75 py-5 backdrop-blur-[16px] xl:flex"
        aria-label="Navegação lateral rápida"
      >
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-8 w-8 items-center justify-center rounded-md text-text-muted transition-colors hover:text-accretion-gold"
          title="Menu de módulos"
        >
          <Menu className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectView(item.id)}
                title={item.label}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all ${
                  active
                    ? 'border-hud-borderActive bg-accretion-gold/15 text-accretion-gold shadow-[0_0_16px_rgba(245,183,79,0.22)]'
                    : 'border-transparent text-text-muted hover:border-hud-border hover:bg-hud-surface hover:text-text-primary'
                }`}
              >
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onSelectView('compound')}
          title="Simulador Patrimonial"
          className="flex h-8 w-8 items-center justify-center rounded-md text-text-muted transition-colors hover:text-accretion-gold"
        >
          <Compass className="h-4 w-4" />
        </button>
      </aside>

      {/* Top Singularity HUD Header */}
      <header className="pointer-events-auto fixed left-0 top-0 z-40 flex h-[60px] w-full items-center border-b border-hud-border bg-void/80 px-5 backdrop-blur-[16px] md:h-[66px] md:px-7 xl:pl-[72px]">
        <button
          onClick={() => onSelectView('hud')}
          className="anim-hud-up flex items-center text-left transition-opacity hover:opacity-90"
          style={{ animationDelay: '60ms' }}
        >
          <BrandLogo />
        </button>

        {/* Inline Audio Pulse Pill (matches reference Image 2 top bar) */}
        <button
          onClick={onQuickVoiceClick}
          className="ml-5 hidden items-center gap-2 rounded-full border border-hud-border bg-hud-surface px-3 py-1 backdrop-blur-[16px] transition-colors hover:border-hud-borderActive sm:flex"
          title="Acionar voz do Larius"
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isVoiceActive
                ? 'animate-ping bg-accretion-gold'
                : 'bg-gradient-to-tr from-accretion-amber to-accretion-gold'
            }`}
          />
          <span className="flex h-3 items-center gap-[2px]" aria-hidden="true">
            {[4, 9, 6, 11, 7, 10, 5, 8].map((h, i) => (
              <span
                key={i}
                className="w-[1.5px] rounded-full bg-accretion-gold/80 transition-all"
                style={{ height: isVoiceActive ? `${Math.min(12, h + 3)}px` : `${h}px` }}
              />
            ))}
          </span>
          <span className="font-mono text-[10px] tracking-wider text-text-muted">LARIUS</span>
        </button>

        <nav className="ml-7 hidden items-center gap-6 xl:flex">
          {NAV_ITEMS.map((item, idx) => {
            const active = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectView(item.id)}
                className="anim-hud-up group relative flex items-center gap-[5px] py-1 font-mono text-[11.5px] tracking-[0.04em] transition-colors"
                style={{ animationDelay: `${140 + idx * 60}ms` }}
              >
                <span className={active ? 'text-accretion-gold' : 'text-text-muted group-hover:text-accretion-gold'}>
                  {item.num}.
                </span>
                <span
                  className={
                    active
                      ? 'font-semibold text-accretion-photon'
                      : 'text-text-primary/80 group-hover:text-accretion-photon'
                  }
                >
                  {item.label}
                </span>
                {active && (
                  <span className="absolute -bottom-[2px] left-0 h-px w-full bg-gradient-to-r from-accretion-photon via-accretion-gold to-accretion-amber" />
                )}
              </button>
            );
          })}
        </nav>

        <div
          className="anim-hud-in ml-auto hidden items-center gap-2.5 lg:flex"
          style={{ animationDelay: '320ms' }}
        >
          <div className="flex items-center gap-3 rounded-full border border-hud-border bg-hud-surface px-3.5 py-1 font-mono text-[11px] tabular-nums text-text-muted backdrop-blur-[16px]">
            <span>
              SELIC <strong className="text-text-primary">{macro.selic_pct.toFixed(2)}%</strong>
            </span>
            <span className="text-hud-border">|</span>
            <span>
              IPCA <strong className="text-text-primary">{macro.ipca_pct.toFixed(2)}%</strong>
            </span>
            <span className="text-hud-border">|</span>
            <span>
              USD <strong className="text-accretion-gold">R$ {macro.usd_brl.toFixed(2)}</strong>
            </span>
          </div>

          <button
            onClick={onToggleStealth}
            title="Ocultar Valores (Shift+H)"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-hud-border bg-hud-surface text-text-muted transition-colors hover:border-hud-borderActive hover:text-accretion-gold"
          >
            {stealthMode ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
          </button>

          <button
            onClick={onQuickVoiceClick}
            className={`flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-[0.04em] transition-all ${
              isVoiceActive
                ? 'border-hud-borderActive bg-accretion-gold/20 text-accretion-photon shadow-[0_0_20px_rgba(245,183,79,0.28)]'
                : 'border-hud-borderActive/60 bg-accretion-bronze/35 text-accretion-gold hover:border-hud-borderActive hover:bg-accretion-amber/25 hover:text-accretion-photon'
            }`}
          >
            <Mic className={`h-3.5 w-3.5 ${isVoiceActive ? 'animate-pulse text-signal-positive' : ''}`} />
            <span>{isVoiceActive ? 'Larius Ativo' : 'Consultoria IA'}</span>
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border border-hud-border bg-hud-surface text-accretion-gold xl:hidden"
          aria-label="Alternar menu"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </header>

      {menuOpen && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex flex-col bg-void/95 px-5 pb-10 pt-24 backdrop-blur-[16px] xl:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-5 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-hud-border text-accretion-gold"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => {
              const active = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectView(item.id);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-left"
                >
                  <span className="font-mono text-sm text-accretion-gold">{item.num}.</span>
                  <span className={`font-display text-2xl ${active ? 'text-accretion-photon' : 'text-text-muted'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-hud-border pt-6 font-mono text-xs text-text-muted">
            <span>
              SELIC {macro.selic_pct.toFixed(2)}% · USD R$ {macro.usd_brl.toFixed(2)}
            </span>
            <button onClick={onToggleStealth} className="text-accretion-gold underline">
              {stealthMode ? 'Mostrar Valores' : 'Ocultar Valores'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
