import typography from '@tailwindcss/typography';

/**
 * Design tokens for the "Electric playground" direction (docs/MIGRATION-PLAN.md, D15).
 * Light violet-tinted ground, ink text, violet accent, lime highlighter, sticker-style cards.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ground: '#F5F3FF',
        surface: '#FFFFFF',
        ink: '#17112E',
        muted: '#5B5474',
        line: '#E4E0F5',
        violet: { DEFAULT: '#6D28D9', dark: '#5B21B6', soft: '#EDE9FE' },
        lime: { DEFAULT: '#D4F75B', dark: '#B9E23A', soft: '#F1FBC9' },
        coral: { DEFAULT: '#FF5C5C', soft: '#FFE3E3' },
      },
      fontFamily: {
        display: ['"Unbounded Variable"', 'Unbounded', 'Arial Black', 'sans-serif'],
        sans: ['"Manrope Variable"', 'Manrope', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        sticker: '6px 6px 0 #17112E',
        'sticker-sm': '4px 4px 0 #17112E',
        'sticker-lg': '10px 10px 0 #17112E',
        'sticker-violet': '6px 6px 0 #6D28D9',
      },
      borderRadius: { sticker: '20px' },
      maxWidth: { prose: '68ch' },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '33%': { transform: 'translate3d(24px, -18px, 0) rotate(4deg)' },
          '66%': { transform: 'translate3d(-16px, 14px, 0) rotate(-3deg)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tilt, 6deg))' },
          '50%': { transform: 'translateY(-8px) rotate(var(--tilt, 6deg))' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'drift 26s ease-in-out infinite reverse',
        bob: 'bob 4s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        rise: 'rise .7s cubic-bezier(.2,.7,.2,1) both',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#17112E',
            '--tw-prose-headings': '#17112E',
            '--tw-prose-links': '#6D28D9',
            '--tw-prose-bold': '#17112E',
            '--tw-prose-quotes': '#17112E',
            '--tw-prose-quote-borders': '#D4F75B',
            '--tw-prose-bullets': '#6D28D9',
            '--tw-prose-counters': '#6D28D9',
            '--tw-prose-hr': '#E4E0F5',
            '--tw-prose-th-borders': '#E4E0F5',
            '--tw-prose-td-borders': '#E4E0F5',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            maxWidth: 'none',
            'h2, h3, h4': { fontFamily: '"Unbounded Variable", Unbounded, sans-serif', letterSpacing: '-0.01em', lineHeight: '1.15' },
            h2: { fontSize: '1.75rem', fontWeight: '700', marginTop: '2.4em', marginBottom: '0.8em' },
            h3: { fontSize: '1.25rem', fontWeight: '700', marginTop: '1.8em' },
            a: { textDecoration: 'underline', textDecorationColor: '#D4F75B', textDecorationThickness: '3px', textUnderlineOffset: '3px', fontWeight: '600' },
            'a:hover': { textDecorationColor: '#6D28D9' },
            blockquote: { fontStyle: 'normal', fontWeight: '600', borderLeftWidth: '0', background: '#F1FBC9', padding: '1rem 1.4rem', borderRadius: '14px', border: '2px solid #17112E', boxShadow: '5px 5px 0 #17112E' },
            'blockquote p:first-of-type::before, blockquote p:last-of-type::after': { content: 'none' },
            img: { borderRadius: '16px', border: '2px solid #17112E' },
            'figure img': { marginTop: '0', marginBottom: '0' },
            code: { background: '#EDE9FE', padding: '0.15em 0.4em', borderRadius: '6px', fontWeight: '500' },
            'code::before, code::after': { content: 'none' },
            'ul > li::marker': { color: '#6D28D9' },
            strong: { fontWeight: '700' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
