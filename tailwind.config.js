/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './tina/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      'xxxxs': '300px',
      'xxxs': '360px',
      'xxs': '475px',
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      lineHeight: {
        'prose': '1.8',
      },
      colors: {
        theme: {
          orange: '#c37048',
          darkorange: ' #af5b36',
          darkgreen: '#062c1e',

          offwhite: '#fdfdfe',

          darkblue: '#1c6089',
          navy: '#164a6a',
          lightblue: '#c9e3f1',
        },
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },

      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
