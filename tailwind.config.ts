import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        theme: {
          btn: 'var(--theme-btn)',
        },
        bullet: 'var(--bullet)',
        inverse: 'var(--inverse)',
        footer: {
          bg: 'var(--footer-bg)',
        },
        banner: {
          text: 'var(--banner-bg)',
        },
        heading: {
          text: 'var(--heading-text)',
        },
        body: {
          text: 'var(--body-text)',
        },
      },
      boxShadow: {
        too: '1px 2px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
