'use client';

import React, { useState } from 'react';
import { SpotlightCard } from '@/components/SpotlightCard';
import { SmoothScroll } from '@/components/SmoothScroll';
import { LariusCore3D } from '@/components/LariusCore3D';
import { PortfolioDiagram3D } from '@/components/three/PortfolioDiagram3D';
import { useAudioAnalyzer } from '@/hooks/useAudioAnalyzer';
import { InvestorTier, SAMPLE_PORTFOLIO } from '@/types/portfolio';

const TIER_OPTIONS: { id: InvestorTier; label: string }[] = [
  { id: 'beginner', label: 'Iniciante' },
  { id: 'intermediate', label: 'Intermediário' },
  { id: 'senior', label: 'Sênior' },
];

export default function HomePage() {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(true);
  const [tier, setTier] = useState<InvestorTier>('beginner');
  const [focusedAssetId, setFocusedAssetId] = useState<string | null>(null);
  const { getAudioEnergy } = useAudioAnalyzer();

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050507] text-[#F4F4F6] p-6 md:p-10">
        <div className="mx-auto max-w-7xl space-y-6">
          <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-white/[0.07] pb-5">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF6B00]">
                LARIUS TERMINAL // CVM 19 FEE-BASED
              </p>
              <h1 className="text-2xl font-semibold tracking-tight mt-1">
                Núcleo Holográfico Larius & Diagrama 3D de Portfólio
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center rounded-xl border border-white/[0.08] bg-[#0A0A0E] p-1">
                {TIER_OPTIONS.map((opt) => {
                  const active = tier === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setTier(opt.id)}
                      className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                        active
                          ? 'bg-[#FF6B00] text-[#050507] font-semibold shadow-[0_0_16px_rgba(255,107,0,0.35)]'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setIsSpeaking((prev) => !prev)}
                className={`inline-flex items-center gap-2.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all border ${
                  isSpeaking
                    ? 'bg-[#FF6B00] text-[#050507] border-[#FF6B00] shadow-[0_0_25px_rgba(255,107,0,0.4)]'
                    : 'bg-[#0A0A0E] text-zinc-300 border-white/[0.12] hover:border-[#FF6B00]/50'
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isSpeaking ? 'bg-[#050507] animate-ping' : 'bg-zinc-500'
                  }`}
                />
                {isSpeaking ? 'isSpeaking: true' : 'isSpeaking: false'}
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <SpotlightCard active={isSpeaking} className="lg:col-span-5 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-sm font-semibold text-zinc-100">
                    Entidade Holográfica LariusCore3D
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Shader GLSL reativo à voz (uAudioEnergy) + Anéis Giroscópicos
                  </p>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-[#FF6B00] tabular-nums">
                  {isSpeaking ? 'speaking' : 'idle'}
                </span>
              </div>

              <LariusCore3D
                getAudioEnergy={getAudioEnergy}
                isSpeaking={isSpeaking}
                status={isSpeaking ? 'speaking' : 'idle'}
              />
            </SpotlightCard>

            <SpotlightCard active={focusedAssetId !== null} className="lg:col-span-7 p-6 flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h2 className="text-sm font-semibold text-zinc-100">
                    Diagrama Espacial 3D da Carteira (Câmera GSAP)
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Clique em qualquer barra 3D para deslizar a câmera com GSAP e inspecionar o ativo
                  </p>
                </div>

                {focusedAssetId && (
                  <button
                    type="button"
                    onClick={() => setFocusedAssetId(null)}
                    className="self-start sm:self-auto text-[11px] font-mono text-[#FF6B00] hover:underline"
                  >
                    Resetar Câmera Panorâmica ↺
                  </button>
                )}
              </div>

              <PortfolioDiagram3D
                assets={SAMPLE_PORTFOLIO}
                tier={tier}
                focusedAssetId={focusedAssetId}
                onSelectAsset={setFocusedAssetId}
              />
            </SpotlightCard>
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
