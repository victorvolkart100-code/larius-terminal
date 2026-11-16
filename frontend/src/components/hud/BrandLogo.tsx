import React from 'react';

interface BrandLogoProps {
  compact?: boolean;
}

/**
 * Singularity & Accretion Gold Lozenge Brand Mark for D.investimentos.
 * Mirrors the black hole palette: #000000 event horizon core surrounded by
 * #FFFDF5 photon glow, #F5B74F solar gold ring, #D97706 amber & #78350F bronze aura.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ compact = false }) => {
  return (
    <span className="inline-flex items-center gap-3">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="bhLozengeGlow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="46%" stopColor="#78350F" stopOpacity="0.65" />
            <stop offset="72%" stopColor="#D97706" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F5B74F" stopOpacity="0.15" />
          </radialGradient>
        </defs>
        {/* Outer Warm Bronze / Solar Gold Lozenge */}
        <polygon
          points="14,1.5 26.5,14 14,26.5 1.5,14"
          fill="url(#bhLozengeGlow)"
          stroke="#F5B74F"
          strokeWidth="1.25"
        />
        {/* Inner Photon White-Gold Ring Lozenge */}
        <polygon
          points="14,6.2 21.8,14 14,21.8 6.2,14"
          fill="none"
          stroke="#FFFDF5"
          strokeOpacity="0.85"
          strokeWidth="0.9"
        />
        {/* Pure Event Horizon Singularity Center */}
        <polygon
          points="14,8.6 19.4,14 14,19.4 8.6,14"
          fill="#000000"
          stroke="#D97706"
          strokeWidth="0.75"
        />
      </svg>

      {!compact && (
        <span className="font-display text-[18px] font-semibold tracking-[-0.02em] md:text-[20px]">
          <span className="text-accretion-gold">D.</span>
          <span className="text-text-primary">investimentos</span>
        </span>
      )}
    </span>
  );
};
