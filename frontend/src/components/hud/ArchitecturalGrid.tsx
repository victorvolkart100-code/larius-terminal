import React from 'react';

const VERTICAL_LINES = ['12.6%', '37.5%', '61.9%', '86.2%'];
const HORIZONTAL_LINES = ['32.7%', '71.4%'];

export const ArchitecturalGrid: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle overhead ambient studio light from top center (Iris Assistant / Phantom Black depth) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(640px circle at 50% 18%, rgba(244,244,245,0.045), transparent 65%), radial-gradient(960px circle at 50% 50%, transparent 40%, rgba(3,3,4,0.85) 100%)',
        }}
      />

      {VERTICAL_LINES.map((left, idx) => (
        <div
          key={`v-${left}`}
          className="anim-grid-v absolute top-0 h-full w-px bg-white/[0.045]"
          style={{ left, animationDelay: `${260 + idx * 80}ms` }}
        />
      ))}

      {HORIZONTAL_LINES.map((top, idx) => (
        <div
          key={`h-${top}`}
          className="anim-grid-h absolute left-0 h-px w-full bg-white/[0.045]"
          style={{ top, animationDelay: `${360 + idx * 120}ms` }}
        />
      ))}

      {HORIZONTAL_LINES.map((top, hi) =>
        VERTICAL_LINES.map((left, vi) => (
          <div
            key={`cross-${hi}-${vi}`}
            className="anim-cross absolute"
            style={{
              top,
              left,
              animationDelay: `${520 + (hi * 4 + vi) * 60}ms`,
            }}
          >
            <span className="absolute h-px w-[10px] -translate-x-1/2 -translate-y-1/2 bg-white/55" />
            <span className="absolute h-[10px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/55" />
          </div>
        ))
      )}
    </div>
  );
};
