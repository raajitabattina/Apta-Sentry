/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          900: '#080B0F',
          800: '#0D1117',
          700: '#111820',
          600: '#161E28',
          500: '#1C2530',
        },
        light: {
          900: '#F4F6F9',
          800: '#FFFFFF',
          700: '#EDF0F4',
          600: '#E4E8EF',
          500: '#D8DDE6',
        },
        border: {
          DEFAULT: '#1E2D3D',
          subtle: '#162030',
          bright: '#2A3F55',
        },
        brand: {
          DEFAULT: '#528de6',
          dim: '#3b66aa',
          faint: '#e8eef5',
          'faint-dark': '#0d1a2a',
        },
        'red-threat': '#FF3A3A',
        'red-faint': '#2A0808',
        'red-faint-light': '#FEF0F0',
        'amber-warn': '#FFAA00',
        'amber-faint': '#2A1E00',
        'amber-faint-light': '#FFF8E6',
        text: {
          primary: '#E8F0F8',
          secondary: '#8BA4BF',
          muted: '#4A6278',
          code: '#7FDBCA',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'scan': 'scan 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
    },
  },
  plugins: [],
}