/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdf8f0',
          100: '#f9eedd',
          200: '#f2dbb8',
          300: '#e9c38a',
          400: '#dfa95c',
          500: '#d4903a',
          600: '#c07a2e',
          700: '#9f5f28',
          800: '#804c27',
          900: '#694022',
        },
        warm: {
          50: '#faf7f5',
          100: '#f3ece7',
          200: '#e6d7cc',
          300: '#d5bba9',
          400: '#c19a83',
          500: '#b2816a',
          600: '#a5705d',
          700: '#895c4e',
          800: '#704d44',
          900: '#5c4139',
        },
        terra: {
          500: '#c2703e',
          600: '#ab5f32',
          700: '#8f4e2a',
        },
      },
      fontFamily: {
        sans: [
          'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
          'Segoe UI', 'Roboto', 'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
