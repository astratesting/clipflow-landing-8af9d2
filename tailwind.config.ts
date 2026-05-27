import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#0F172A',
        neon: '#8B5CF6',
        electric: '#3B82F6',
        ink: '#E5E7EB',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 60px rgba(139, 92, 246, 0.45)',
        electric: '0 0 50px rgba(59, 130, 246, 0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        scan: 'scan 3.8s linear infinite',
        pulseGlow: 'pulseGlow 2.8s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(380%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
