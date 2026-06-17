import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#b8d1ff',
          300: '#88b3ff',
          400: '#528bff',
          500: '#2e6bff',
          600: '#1a4ef0',
          700: '#173ec7',
          800: '#17379f',
          900: '#19347d',
        },
        accent: {
          500: '#7a5cff',
          600: '#6342f5',
        },
        ink: {
          900: '#0b1539',
          800: '#15224a',
          700: '#23304f',
          500: '#5a6478',
          400: '#7a8395',
          300: '#aab2c2',
          200: '#d6dbe5',
          100: '#eef0f5',
        },
        sun: {
          400: '#ffba08',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brand: '0 12px 30px -10px rgba(46, 107, 255, 0.45)',
        soft: '0 8px 24px -8px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 0%, #eaf0ff 0%, transparent 45%), radial-gradient(circle at 80% 30%, #f1ecff 0%, transparent 50%)',
        'dark-gradient':
          'linear-gradient(135deg, #0b1539 0%, #15224a 50%, #1a2a6c 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
