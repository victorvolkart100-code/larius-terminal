import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#030305',
        nebula: '#120D07',
        hud: {
          surface: 'rgba(14, 12, 10, 0.68)',
          border: 'rgba(245, 183, 79, 0.18)',
          borderActive: 'rgba(255, 232, 179, 0.42)',
        },
        accretion: {
          photon: '#FFFDF5',
          gold: '#F5B74F',
          amber: '#D97706',
          bronze: '#78350F',
        },
        text: {
          primary: '#F4EFE6',
          muted: '#9E9282',
        },
        signal: {
          positive: '#4ADE80',
          negative: '#F87171',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        accretion: '0 0 35px -5px rgba(245, 183, 79, 0.25)',
        hud: '0 8px 32px 0 rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};

export default config;
