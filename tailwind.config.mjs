import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Interim tokens. The design phase (docs/MIGRATION-PLAN.md, Phase 2) replaces these.
      colors: {
        paper: '#FBF8F3',
        ink: '#1F1A17',
        muted: '#6F655C',
        line: '#E8DFD4',
        accent: { DEFAULT: '#C2410C', dark: '#9A3412', soft: '#FDE7DA' },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: { prose: '68ch' },
    },
  },
  plugins: [typography],
};
