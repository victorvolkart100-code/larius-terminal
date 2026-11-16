import React, { useState } from 'react';
import { Eye, EyeOff, Menu, Mic, X } from 'lucide-react';
import { HudViewId, MacroSnapshot } from '../../types/investimentos';

interface TopNavHudProps {
  activeView: HudViewId;
  onSelectView: (view: HudViewId) => void;
  macro: MacroSnapshot;
  backendMode: 'FASTAPI' | 'LOCAL_TS';
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
  { id: 'architecture', num: '05', label: 'SHADERS_&_API' },
];

export const TopNavHud: React.FC<TopNavHudProps> = ({
  activeView,
  onSelectView,
  macro,
  backendMode,
  stealthMode,
  onToggleStealth,
  isVoiceActive,
  onQuickVoiceClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-40 flex h-[64px] w-full items-center border-b border-white/[0.06] bg-[#030304]/80 px-5 backdrop-blur-md md:h-[72px] md:px-[36px]">
        {/* Brand geometric vector emblem */}
        <button
          onClick={() => onSelectView('hud')}
          className="anim-hud-up flex items-center gap-3 text-left transition-opacity hover:opacity-85"
          style={{ animationDelay: '60ms' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <polygon points="12,1.5 22.5,12 12,22.5 1.5,12" stroke="#F4F4F5" strokeWidth="1.2" />
            <polygon points="12,6.5 17.5,12 12,17.5 6.5,12" fill="#F4F4F5" />
          </svg>
          <span className="font-display text-[17px] font-medium tracking-[-0.02em] text-white md:text-[19px]">
            D.INVESTIMENTOS
          </span>
        </button>

        {/* Aurex-style numbered navigation items */}
        <nav className="ml-10 hidden items-center gap-7 xl:flex">
          {NAV_ITEMS.map((item, idx) => {
            const active = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectView(item.id)}
                className="anim-hud-up group relative flex items-center gap-[4px] py-1 font-mono text-[12px] tracking-[0.04em] transition-colors"
                style={{ animationDelay: `${140 + idx * 60}ms` }}
              >
                <span className={active ? 'text-[#F4F4F5]' : 'text-zinc-500 group-hover:text-zinc-300'}>
                  {item.num}.
                </span>
                <span className={active ? 'font-semibold text-white' : 'text-zinc-400 group-hover:text-white'}>
                  {item.label}
                </span>
                {active && (
                  <span className="absolute -bottom-[2px] left-0 h-px w-full bg-[#F4F4F5]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Telemetry Cluster */}
        <div
          className="anim-hud-in ml-auto hidden items-center gap-3 lg:flex"
          style={{ animationDelay: '320ms' }}
        >
          <div className="flex items-center gap-3 border-l border-white/[0.12] pl-3 font-mono text-[11px] tabular-nums text-zinc-400">
            <span>
              SELIC <strong className="text-zinc-200">{macro.selic_pct.toFixed(2)}%</strong>
            </span>
            <span>
              USD <strong className="text-zinc-200">R$ {macro.usd_brl.toFixed(2)}</strong>
            </span>
            <span
              className={`rounded-[3px] px-[6px] py-[2px] text-[10px] font-semibold ${
                backendMode === 'FASTAPI'
                  ? 'bg-emerald-400/15 text-emerald-300'
                  : 'bg-[#F4F4F5]/10 text-zinc-300'
              }`}
            >
              {backendMode === 'FASTAPI' ? '[ FASTAPI_LIVE ]' : '[ QUANT_TS_SYNC ]'}
            </span>
          </div>

          <button
            onClick={onToggleStealth}
            title="Modo Sigilo (Shift+H)"
            className="flex h-8 w-8 items-center justify-center border border-white/[0.1] bg-[#09090B] text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            {stealthMode ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
          </button>

          <button
            onClick={onQuickVoiceClick}
            className={`flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] transition-all ${
              isVoiceActive
                ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-300'
                : 'border-white/[0.14] bg-[#09090B] text-white hover:border-white/40'
            }`}
          >
            <Mic className={`h-3.5 w-3.5 ${isVoiceActive ? 'animate-pulse text-emerald-300' : ''}`} />
            <span>{isVoiceActive ? 'Larius Ativo' : 'Voz Larius'}</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="ml-auto flex h-10 w-10 items-center justify-center border border-white/[0.12] bg-[#09090B] text-white xl:hidden"
          aria-label="Alternar menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#030304]/95 px-5 pb-10 pt-24 backdrop-blur-lg xl:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-5 top-4 flex h-10 w-10 items-center justify-center border border-white/15 text-white"
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
                  <span className="font-mono text-sm text-zinc-500">{item.num}.</span>
                  <span className={`font-display text-2xl ${active ? 'text-white' : 'text-zinc-400'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6 font-mono text-xs text-zinc-400">
            <span>SELIC {macro.selic_pct}% · USD {macro.usd_brl.toFixed(2)}</span>
            <button onClick={onToggleStealth} className="text-white underline">
              {stealthMode ? 'Mostrar Valores' : 'Ocultar Valores'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
