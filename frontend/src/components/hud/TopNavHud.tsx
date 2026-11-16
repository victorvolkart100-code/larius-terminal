import React, { useState } from 'react';
import { Eye, EyeOff, Menu, Mic, X } from 'lucide-react';
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

const NAV_ITEMS: Array<{ id: HudViewId; num: string; label: string }> = [
  { id: 'hud', num: '01', label: 'VISÃO_HUD' },
  { id: 'larius', num: '02', label: 'LARIUS_IA' },
  { id: 'assets', num: '03', label: 'CARTEIRA_B3' },
  { id: 'compound', num: '04', label: 'JUROS_&_BANCOS' },
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
      <header className="pointer-events-auto fixed left-0 top-0 z-40 flex h-[64px] w-full items-center border-b border-hud-border bg-void/85 px-5 backdrop-blur-[16px] md:h-[72px] md:px-[36px]">
        <button
          onClick={() => onSelectView('hud')}
          className="anim-hud-up flex items-center text-left transition-opacity hover:opacity-90"
          style={{ animationDelay: '60ms' }}
        >
          <BrandLogo />
        </button>

        <nav className="ml-10 hidden items-center gap-8 xl:flex">
          {NAV_ITEMS.map((item, idx) => {
            const active = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectView(item.id)}
                className="anim-hud-up group relative flex items-center gap-[5px] py-1 font-mono text-[12px] tracking-[0.04em] transition-colors"
                style={{ animationDelay: `${140 + idx * 60}ms` }}
              >
                <span className={active ? 'text-accretion-gold' : 'text-text-muted group-hover:text-accretion-gold'}>
                  {item.num}.
                </span>
                <span className={active ? 'font-semibold text-accretion-photon' : 'text-text-primary/80 group-hover:text-accretion-photon'}>
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
          className="anim-hud-in ml-auto hidden items-center gap-3 lg:flex"
          style={{ animationDelay: '320ms' }}
        >
          <div className="flex items-center gap-3 border-l border-hud-border pl-3 font-mono text-[11px] tabular-nums text-text-muted">
            <span>
              SELIC <strong className="text-text-primary">{macro.selic_pct.toFixed(2)}%</strong>
            </span>
            <span>
              IPCA <strong className="text-text-primary">{macro.ipca_pct.toFixed(2)}%</strong>
            </span>
            <span>
              USD <strong className="text-accretion-gold">R$ {macro.usd_brl.toFixed(2)}</strong>
            </span>
          </div>

          <button
            onClick={onToggleStealth}
            title="Ocultar Valores (Shift+H)"
            className="flex h-8 w-8 items-center justify-center border border-hud-border bg-hud-surface text-text-muted transition-colors hover:border-hud-borderActive hover:text-accretion-gold"
          >
            {stealthMode ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
          </button>

          <button
            onClick={onQuickVoiceClick}
            className={`flex items-center gap-2 border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] transition-all ${
              isVoiceActive
                ? 'border-accretion-gold bg-accretion-gold/20 text-accretion-photon shadow-[0_0_20px_rgba(245,183,79,0.28)]'
                : 'border-hud-border bg-hud-surface text-accretion-gold hover:border-hud-borderActive hover:bg-accretion-amber/15 hover:text-accretion-photon'
            }`}
          >
            <Mic className={`h-3.5 w-3.5 ${isVoiceActive ? 'animate-pulse text-signal-positive' : ''}`} />
            <span>{isVoiceActive ? 'Larius Ativo' : 'Falar com Larius'}</span>
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="ml-auto flex h-10 w-10 items-center justify-center border border-hud-border bg-hud-surface text-accretion-gold xl:hidden"
          aria-label="Alternar menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {menuOpen && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex flex-col bg-void/95 px-5 pb-10 pt-24 backdrop-blur-[16px] xl:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-5 top-4 flex h-10 w-10 items-center justify-center border border-hud-border text-accretion-gold"
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
