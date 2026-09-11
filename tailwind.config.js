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
        obsidian: {
          950: '#000000',
          900: '#0a0a0c',
          850: '#161617',
          800: '#1c1c1e',
          700: '#2c2c2e',
          600: '#3a3a3c',
        },
        surface: {
          subtle: 'rgba(255, 255, 255, 0.04)',
          card: '#161617',
          hover: '#222225',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.20)',
        },
        brand: {
          indigo: '#2997ff',
          cobalt: '#0071e3',
          violet: '#bf5af2',
          slate: '#86868b',
          green: '#30d158',
          orange: '#ff9f0a',
        },
        apple: {
          bg: '#000000',
          surface: '#161617',
          card: '#1c1c1e',
          hover: '#2c2c2e',
          blue: '#2997ff',
          blueDark: '#0071e3',
          text: '#f5f5f7',
          subtext: '#86868b',
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", 'system-ui', 'sans-serif'],
        display: ["'Plus Jakarta Sans'", "'Inter'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '32px 32px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(28px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
