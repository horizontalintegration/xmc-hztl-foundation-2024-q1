/** @type {import('tailwindcss').Config} */

// Global
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          black: '#2f2d2e',
          darkgrey: '#515152',
          grey: '#787779',
          lightgrey: '#cfcdc8',
          offwhite: '#F1F1F1',
          bgblack: '#404040',
          montecarlo: '#7fc3ba',
          salmon: '#f58466',
          rosebud: '#f8aa97',
          darkblue: '#065264',
          lightteal: '#7FC3BA',
          darkgreen: '#2e4e40',
        },
      },
      fontFamily: {
        avenir: ['Avenir Next', 'sans-serif'],
        modern: ['Modern Era', 'sans-serif'],
        notoSans: ['Noto Sans', 'sans-serif'],
      },
      fontSize: {
        xxs: ['0.625rem', '0.75rem'] /* 10px,  12px */,
        xxxs: ['0.5rem', '0.5rem'] /*  8px,   8px */,
      },
      gap: {
        11.5: '46px',
      },
      maxHeight: {
        125: '500px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      minHeight: {
        120: '480px',
        125: '500px',
      },
      screens: {
        mdlg: '992px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
};
