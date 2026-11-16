import React from 'react';

interface ChamferCardProps {
  badge?: string;
  children: React.ReactNode;
  className?: string;
  strokeColor?: string;
}

/**
 * Obsidian Glass HUD chamfered card adhering strictly to Singularity & Accretion Gold tokens.
 */
export const ChamferCard: React.FC<ChamferCardProps> = ({
  badge,
  children,
  className = '',
  strokeColor = 'rgba(245, 183, 79, 0.34)',
}) => {
  return (
    <div className={`relative ${className}`}>
      {badge && (
        <div className="mb-[10px] inline-block bg-accretion-gold px-[8px] py-[2.5px] font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] text-void">
          {badge}
        </div>
      )}
      <div
        className="relative bg-hud-surface p-5 shadow-hud backdrop-blur-[16px]"
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
