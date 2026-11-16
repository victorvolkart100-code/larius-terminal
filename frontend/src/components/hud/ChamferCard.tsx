import React from 'react';

interface ChamferCardProps {
  badge?: string;
  children: React.ReactNode;
  className?: string;
  strokeColor?: string;
}

/**
 * Aurex-inspired architectural HUD panel featuring a 45-degree chamfered bottom-left corner
 * drawn via a crisp non-scaling 1px SVG polygon stroke.
 */
export const ChamferCard: React.FC<ChamferCardProps> = ({
  badge,
  children,
  className = '',
  strokeColor = 'rgba(244, 244, 245, 0.36)',
}) => {
  return (
    <div className={`relative ${className}`}>
      {badge && (
        <div className="mb-[10px] inline-block bg-[#F4F4F5] px-[7px] py-[2px] font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#030304]">
          {badge}
        </div>
      )}
      <div
        className="relative bg-[#09090B]/80 p-5 backdrop-blur-md"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 320 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon
            points="0.5,0.5 319.5,0.5 319.5,179.5 24,179.5 0.5,156"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};
