/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        border: {
          DEFAULT: '#1E2D3D',
          subtle: '#162030',
          bright: '#2A3F55',
        },
        acid: {
          DEFAULT: '#00FF88',
          dim: '#00CC6A',
          faint: '#003322',
        },
        'red-threat': '#FF3A3A',
        'red-faint': '#2A0808',
        'amber-warn': '#FFAA00',
        'amber-faint': '#2A1E00',
        text: {
          primary: '#E8F0F8',
          secondary: '#8BA4BF',
          muted: '#4A6278',
          code: '#7FDBCA',
        }
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
