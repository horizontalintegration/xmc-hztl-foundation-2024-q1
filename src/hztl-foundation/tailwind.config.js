/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        20: '4.4rem', // 48
        16: '3.5rem', // 48
        12: '3rem', // 48
        2: '1.375rem', // 22
        1: '1.188rem', // 19
      },
      fontFamily:{
        modern:['Modern Era', 'sans-serif']
      },
      colors: {
        "grayscale-w-200":"#EAE8E8"
      }
    },
  },
  plugins: [],
  
};
