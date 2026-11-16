import React, { useState } from 'react';
import { YearlyPoint } from '../../types/investimentos';

interface SvgCompoundChartProps {
  series: YearlyPoint[];
}

export const SvgCompoundChart: React.FC<SvgCompoundChartProps> = ({ series }) => {
  const [hoverIdx, setHoverIdx] = useState<number>(Math.max(0, series.length - 1));

  if (series.length === 0) return null;

  const width = 760;
  const height = 270;
  const padL = 56;
  const padR = 20;
  const padT = 22;
  const padB = 34;
  const plotW = width - padL - padR;
  const plotH = height - padT - padB;

  const maxVal = Math.max(...series.map((s) => s.larius_net), 1);
  const toX = (idx: number) => padL + (idx / Math.max(series.length - 1, 1)) * plotW;
  const toY = (val: number) => padT + plotH - (val / maxVal) * plotH;

  const buildLine = (pick: (p: YearlyPoint) => number) =>
    series.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${toX(i).toFixed(1)} ${toY(pick(pt)).toFixed(1)}`).join(' ');

  const buildArea = (pick: (p: YearlyPoint) => number) =>
    `${buildLine(pick)} L ${toX(series.length - 1).toFixed(1)} ${(padT + plotH).toFixed(1)} L ${padL} ${(padT + plotH).toFixed(1)} Z`;

  const active = series[Math.min(hoverIdx, series.length - 1)];

  return (
    <div className="relative w-full">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tabular-nums">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5 text-accretion-photon">
            <span className="h-2 w-2 bg-accretion-gold" /> Carteira Larius (Isenta IR)
          </span>
          <span className="flex items-center gap-1.5 text-signal-positive">
            <span className="h-2 w-2 bg-signal-positive" /> CDB 100% CDI (Líq. IR)
          </span>
          <span className="flex items-center gap-1.5 text-text-muted">
            <span className="h-2 w-2 bg-text-muted" /> Banco 85% CDI
          </span>
        </div>

        <div className="border border-hud-border bg-void/90 px-3 py-1 text-text-muted">
          {active.label}:{' '}
          <strong className="text-accretion-gold">R$ {active.larius_net.toLocaleString('pt-BR')}</strong> vs Banco{' '}
          <span className="text-text-primary/80">R$ {active.bank_85_net.toLocaleString('pt-BR')}</span>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-[260px] w-full overflow-visible"
        onMouseLeave={() => setHoverIdx(series.length - 1)}
      >
        <defs>
          <linearGradient id="accretionWaveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5B74F" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#D97706" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#030305" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75, 1].map((ratio) => {
          const y = padT + plotH - ratio * plotH;
          const labelVal = Math.round((maxVal * ratio) / 1000);
          return (
            <g key={ratio}>
              <line x1={padL} y1={y} x2={width - padR} y2={y} stroke="rgba(245, 183, 79, 0.10)" strokeWidth="1" />
              <text x={padL - 8} y={y + 3} textAnchor="end" fill="#9E9282" fontSize="10" fontFamily="JetBrains Mono">
                {labelVal}k
              </text>
            </g>
          );
        })}

        <path d={buildArea((p) => p.larius_net)} fill="url(#accretionWaveGrad)" />
        <path d={buildLine((p) => p.bank_85_net)} fill="none" stroke="#9E9282" strokeDasharray="4 4" strokeWidth="1.5" />
        <path d={buildLine((p) => p.cdb_100_net)} fill="none" stroke="#4ADE80" strokeWidth="1.8" />
        <path d={buildLine((p) => p.larius_net)} fill="none" stroke="#F5B74F" strokeWidth="2.4" />

        <line
          x1={toX(hoverIdx)}
          y1={padT}
          x2={toX(hoverIdx)}
          y2={padT + plotH}
          stroke="rgba(255, 253, 245, 0.35)"
          strokeWidth="1"
        />
        <circle cx={toX(hoverIdx)} cy={toY(active.larius_net)} r="4.5" fill="#FFFDF5" stroke="#D97706" strokeWidth="2" />
        <circle cx={toX(hoverIdx)} cy={toY(active.cdb_100_net)} r="3.5" fill="#4ADE80" />

        {series.map((pt, i) => {
          const showLabel = i === 0 || i === series.length - 1 || i % Math.max(1, Math.floor(series.length / 5)) === 0;
          return (
            <g key={pt.year}>
              {showLabel && (
                <text
                  x={toX(i)}
                  y={height - 8}
                  textAnchor="middle"
                  fill={i === hoverIdx ? '#FFFDF5' : '#9E9282'}
                  fontSize="10"
                  fontFamily="JetBrains Mono"
                >
                  {pt.label}
                </text>
              )}
              <rect
                x={toX(i) - plotW / Math.max(series.length * 2, 2)}
                y={padT}
                width={plotW / Math.max(series.length, 1)}
                height={plotH}
                fill="transparent"
                className="cursor-crosshair"
                onMouseEnter={() => setHoverIdx(i)}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
