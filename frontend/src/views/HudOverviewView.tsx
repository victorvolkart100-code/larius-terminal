import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { HudViewId, MacroSnapshot, ShaderUniformParams } from '../types/investimentos';
import { ChamferCard } from '../components/hud/ChamferCard';
import { LariusShaderCanvas } from '../components/three/LariusShaderCanvas';

interface HudOverviewViewProps {
  macro: MacroSnapshot;
  stealthMode: boolean;
  isSpeaking: boolean;
  shaderParams: ShaderUniformParams;
  getAudioEnergy: () => number;
  onNavigate: (view: HudViewId) => void;
  onAskFromHud: (promptText: string) => void;
}

export const HudOverviewView: React.FC<HudOverviewViewProps> = ({
  macro,
  stealthMode,
  isSpeaking,
  shaderParams,
  getAudioEnergy,
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
    <section className="relative h-screen w-full overflow-hidden bg-transparent pt-[72px]">
      {/* Layer 0: Seamless Full-Bleed Three.js / GLSL Shader Core */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <LariusShaderCanvas
          isSpeaking={isSpeaking}
          shaderParams={shaderParams}
          getAudioEnergy={getAudioEnergy}
          className="h-full w-full"
        />
      </div>

      {/* Aurex-style HUD Elbow Connectors & Telemetry Anchors (Desktop) */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <svg className="h-full w-full" aria-hidden="true">
          {/* Elbow 1: Left upper node -> inner core */}
          <line x1="17%" y1="21%" x2="29%" y2="21%" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
          <line x1="29%" y1="21%" x2="36%" y2="36%" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
          <circle cx="36%" cy="36%" r="2.5" fill="#F4F4F5" />

          {/* Elbow 2: Right upper node -> inner core */}
          <line x1="81%" y1="22%" x2="70%" y2="22%" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
          <line x1="70%" y1="22%" x2="62%" y2="35%" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
          <circle cx="62%" cy="35%" r="2.5" fill="#F4F4F5" />

          {/* Horizontal trace line mid-right */}
          <line x1="65%" y1="45%" x2="80%" y2="45%" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
          <circle cx="65%" cy="45%" r="2" fill="#A1A1AA" />
        </svg>

        {/* Anchor Node 1 (Top-Left) */}
        <div
          className="anim-hud-up absolute left-[36px] top-[122px] max-w-[195px]"
          style={{ animationDelay: '380ms' }}
        >
          <div className="font-mono text-[11px] tracking-[0.06em] text-white">[ NUCLEO_GLSL ]</div>
          <p className="mt-1 text-[11px] leading-[15px] text-zinc-400">
            Campo de partículas Three.js acoplado à cadência vocal do Larius.
          </p>
        </div>

        {/* Anchor Node 2 (Top-Right) */}
        <div
          className="anim-hud-up absolute right-[36px] top-[126px] max-w-[210px] text-right"
          style={{ animationDelay: '480ms' }}
        >
          <div className="font-mono text-[11px] tracking-[0.06em] text-white">[ RENDA_ISENTA_IR ]</div>
          <p className="mt-1 font-mono text-[11px] leading-[15px] text-zinc-400 tabular-nums">
            {stealthMode ? 'R$ ••••• / mês' : 'R$ 2.480/mês'} · Sem retenção na PF.
          </p>
        </div>

        {/* Anchor Node 3 (Mid-Right) */}
        <div
          className="anim-hud-up absolute right-[36px] top-[42%] max-w-[210px] text-right"
          style={{ animationDelay: '580ms' }}
        >
          <div className="font-mono text-[11px] tracking-[0.06em] text-white">[ MACRO_B3_HEDGE ]</div>
          <p className="mt-1 font-mono text-[11px] leading-[15px] text-zinc-400 tabular-nums">
            Selic {macro.selic_pct.toFixed(2)}% · Dólar R$ {macro.usd_brl.toFixed(2)} · IPCA{' '}
            {macro.ipca_pct.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Bottom Row anchored cleanly on page gutters */}
      <div className="absolute bottom-6 left-5 right-5 z-20 flex flex-col items-start justify-between gap-6 md:bottom-[36px] md:left-[36px] md:right-[36px] lg:flex-row lg:items-end">
        {/* Bottom-Left Verdict Headline & Crisp Actions */}
        <div className="anim-hud-up max-w-[540px] space-y-4" style={{ animationDelay: '220ms' }}>
          <div className="inline-flex items-center gap-2 border border-white/[0.14] bg-[#09090B]/75 px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-zinc-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 bg-emerald-400" />
            <span>D.INVESTIMENTOS // CONSULTORIA CVM 19</span>
          </div>

          <h1 className="font-display text-[36px] font-medium leading-[0.98] tracking-[-0.03em] text-white sm:text-[48px] md:text-[58px]">
            Disciplina.
            <br />
            <span className="text-zinc-400">Capital Blindado.</span>
          </h1>

          <p className="max-w-[440px] text-[13px] leading-[20px] text-zinc-400 md:text-[14px]">
            Seleção B3 e FIIs isentos, engenharia tributária contra bancos tradicionais e consultoria
            por voz com inteligência Larius.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onNavigate('larius')}
              className="flex items-center gap-2.5 bg-[#F4F4F5] px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.06em] text-[#030304] transition-colors hover:bg-white"
            >
              <span>✦</span>
              <span>Consultar Larius</span>
            </button>

            <button
              onClick={() => onNavigate('assets')}
              className="flex items-center gap-2 border border-white/[0.18] bg-[#09090B]/75 px-5 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-white backdrop-blur-md transition-colors hover:border-white/45"
            >
              <span>Alocar Aporte</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom-Right Chamfered SVG HUD Card */}
        <div className="anim-hud-up w-full sm:w-[340px]" style={{ animationDelay: '400ms' }}>
          <ChamferCard badge="AUDITORIA TAXA ZERO // HUD">
            <div className="space-y-3">
              <div className="flex items-baseline justify-between font-mono tabular-nums">
                <span className="text-[11px] text-zinc-400">PROJEÇÃO 10 ANOS</span>
                <span className="text-sm font-semibold text-white">
                  {stealthMode ? 'R$ ••••••' : 'R$ 321.922'}
                </span>
              </div>

              <p className="text-[12px] leading-[17px] text-zinc-300">
                Carteira estruturada para superar em <strong className="text-emerald-400">+79%</strong> o
                CDI líquido de bancos tradicionais.
              </p>

              <form onSubmit={handleQuickSubmit} className="flex items-center border border-white/[0.15] bg-[#030304]/90">
                <input
                  type="text"
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  placeholder="Pergunte ao Larius (ex: ITUB4)..."
                  className="w-full bg-transparent px-3 py-2 font-mono text-[11px] text-white placeholder-zinc-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#F4F4F5] text-[#030304] hover:bg-white"
                  aria-label="Enviar para Larius"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>

              <button
                onClick={() => onNavigate('compound')}
                className="block font-mono text-[11px] tracking-[0.04em] text-zinc-200 underline-offset-4 hover:text-white hover:underline"
              >
                VER_SIMULADOR_IR_E_BANCOS →
              </button>
            </div>
          </ChamferCard>
        </div>
      </div>
    </section>
  );
};
