/** @type {import('tailwindcss').Config} */

// Global
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  safelist: [
    // Layout section classes
    {
      pattern: /self-(start|center|end)/, // Matches self-start, self-center, self-end
      variants: ['', 'md', 'lg', 'xl', '2xl'], // Responsive variants
    },
    {
      pattern: /ml-(0|auto)|mr-(0|auto)|mx-auto/, // Matches ml-0, mr-auto, mx-auto
      variants: ['', 'md', 'lg', 'xl', '2xl'], // Responsive variants
    },
    {
      pattern:
        /^(inline|inline-block|block|flex|inline-flex|table|table-row|table-cell|hidden|basic-full)$/, // Matches inline, inline-block, block, flex, inline-flex, table, table-row, table-cell, hidden and basic-full
      variants: ['', 'sm', 'md', 'lg', 'xl', '2xl'], // Responsive variants
    },
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          black: '#2f2d2e',
          darkgrey: '#515152',
          grey: '#787779',
          lightgrey: '#cfcdc8',
          bgblack: '#404040',
          montecarlo: '#7fc3ba',
          salmon: '#f58466',
          rosebud: '#f8aa97',
          darkblue: '#065264',
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
    },
  },
  plugins: [],
};
