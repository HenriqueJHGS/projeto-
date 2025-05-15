/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#c0d6ff',
          200: '#9abaff',
          300: '#739eff',
          400: '#4d82ff',
          500: '#0F52BA', // main
          600: '#0c42a0',
          700: '#083185',
          800: '#04216b',
          900: '#021050'
        },
        secondary: {
          50: '#e6f7f7',
          100: '#c0eae9',
          200: '#9adcdb',
          300: '#73cecd',
          400: '#4dc0bf',
          500: '#20B2AA', // main
          600: '#198e88',
          700: '#136a65',
          800: '#0c4642',
          900: '#052220'
        },
        accent: {
          50: '#fff9e6',
          100: '#ffefbf',
          200: '#ffe599',
          300: '#ffda73',
          400: '#ffd04d',
          500: '#FFC107', // main
          600: '#cc9a06',
          700: '#997304',
          800: '#664c03',
          900: '#332601'
        },
        success: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4CAF50', // main
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20'
        },
        warning: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#FF9800', // main
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100'
        },
        error: {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#F44336', // main
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c'
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};