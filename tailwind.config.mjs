/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0a0a0f',
          50: '#16161f',
          100: '#1a1a26',
          200: '#22222e',
        },
        purple: {
          DEFAULT: '#7c3aed',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b0a8a',
        },
        accent: {
          pink: '#e879a8',
          hotpink: '#ec4899',
          orange: '#f97316',
          blue: '#38bdf8',
        },
        // Keep old colors for non-homepage pages that still use them
        sand: {
          50: '#fdf8f0', 100: '#f9eedd', 200: '#f2dbb8',
          300: '#e9c38a', 400: '#dfa95c', 500: '#d4903a',
          600: '#c07a2e', 700: '#9f5f28', 800: '#804c27', 900: '#694022',
        },
        warm: {
          50: '#faf7f5', 100: '#f3ece7', 200: '#e6d7cc',
          300: '#d5bba9', 400: '#c19a83', 500: '#b2816a',
          600: '#a5705d', 700: '#895c4e', 800: '#704d44', 900: '#5c4139',
        },
        terra: { 500: '#c2703e', 600: '#ab5f32', 700: '#8f4e2a' },
      },
      fontFamily: {
        sans: [
          'Space Grotesk', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
          'Segoe UI', 'Roboto', 'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(1.25rem, 2.8vw, 2rem)', { lineHeight: '1.5', fontWeight: '500' }],
        'hero-lg': ['clamp(1.5rem, 3.2vw, 2.25rem)', { lineHeight: '1.45', fontWeight: '500' }],
      },
      animation: {
        'blob': 'blob 20s ease-in-out infinite',
        'blob-reverse': 'blob-reverse 25s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '75%': { transform: 'translate(20px, 40px) scale(1.05)' },
        },
        'blob-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-40px, 30px) scale(1.05)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '75%': { transform: 'translate(-20px, -40px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
};
