/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Main background: soft lavender
        surface: {
          DEFAULT: '#f0eaf8',
          50: '#faf8fd',
          100: '#f0eaf8',
          200: '#e4d9f2',
          300: '#d4c4ea',
        },
        // Dark text
        ink: {
          DEFAULT: '#1a1032',
          50: '#2d2246',
          100: '#1a1032',
        },
        // Purple primary
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
        // Accent colors for gradients
        accent: {
          pink: '#e879a8',
          hotpink: '#ec4899',
          orange: '#f97316',
          blue: '#38bdf8',
          coral: '#ff6b6b',
        },
      },
      fontFamily: {
        sans: [
          'Space Grotesk', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
          'Segoe UI', 'Roboto', 'sans-serif',
        ],
      },
      fontSize: {
        'hero': ['clamp(1.25rem, 2.8vw, 2rem)', { lineHeight: '1.5', fontWeight: '500' }],
        'hero-lg': ['clamp(1.5rem, 3.2vw, 2.25rem)', { lineHeight: '1.45', fontWeight: '500' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
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
