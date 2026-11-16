/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        phantom: '#030304',
        obsidian: '#09090B',
        graphite: '#141418',
        platinum: '#F4F4F5',
        titanium: '#A1A1AA',
        slate: '#71717A',
      },
    },
  },
  plugins: [],
};
