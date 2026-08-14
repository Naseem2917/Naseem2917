/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        surface: "#0e1017",
        "surface-light": "#161922",
        "surface-border": "#222738",
        primary: {
          DEFAULT: "#06b6d4", // Cyan
          hover: "#22d3ee",
          glow: "rgba(6, 182, 212, 0.4)",
        },
        secondary: {
          DEFAULT: "#8b5cf6", // Purple / Violet
          hover: "#a78bfa",
          glow: "rgba(139, 92, 246, 0.4)",
        },
        accent: {
          DEFAULT: "#10b981", // Emerald
          hover: "#34d399",
          glow: "rgba(16, 185, 129, 0.4)",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
