/** @type {import('tailwindcss').Config} */

const figmaVariables = require('./theme-config').theme;

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#2F2D2E', // DEPRECATED
        darkprimary: '#055164', // Dark Blue // DEPRECATED
        error: '#B91515', // DEPRECATED
        gray: '#A7A7A7', // Charcoal // DEPRECATED
        green: '#4CAF4F', // DEPRECATED
        primary: '#6BA69E', // Teal // DEPRECATED
        secondary: '#F8A997', // Salmon // DEPRECATED
        transparent: 'transparent', // DEPRECATED
        white: '#FFFFFF', // DEPRECATED
        'dark-blue': '#065264', // DEPRECATED
        'dark-gray': '#666666', // DEPRECATED
        'dark-green': '#388E3B', // DEPRECATED
        'error-outline': '#DF2626', // DEPRECATED
        'extralight-gray': '#ABBED1', // DEPRECATED
        'grayscale-w-200': '#EAE8E8', // DEPRECATED
        'grayscale-w-400': '#787779', // DEPRECATED
        'grayscale-w-600': '#373432', // DEPRECATED
        'light-black': '#454545', // DEPRECATED
        'light-gray': '#E2E2E2', // DEPRECATED
        'light-green': '#7FC3BA', // DEPRECATED
        'medium-gray': '#89939E', // DEPRECATED
        'mild-gray': '#F2F2F2', // DEPRECATED
        'color-grayscale-base-white': '#ffffff', // DEPRECATED
        'color-grayscale-base-black': '#000000', // DEPRECATED
        'color-grayscale-warm-200': '#EAE8E8', // DEPRECATED
        'color-grayscale-warm-400': '#807A77', // DEPRECATED
        'color-grayscale-warm-600': '#373432', // DEPRECATED
        ...figmaVariables.colors,
      },
      fontSize: {
        // Desktop font sizes
        xxl: ['3.5rem', '120%'], //56px 67.2px // DEPRECATED
        xl: ['3rem', '3.5rem'], //48px 60px // DEPRECATED
        l: ['2rem', '2rem'], //32px 67.2px // DEPRECATED
        m: ['1.5rem', '2rem'], //24px 32px // DEPRECATED
        'sub-heading': ['1.25rem', '1.52rem'], //20px 24px // DEPRECATED
        s: ['1.125rem', '1.75rem'], //18px 28px // DEPRECATED
        xs: ['1rem', '1.25rem'], //16px 20px // DEPRECATED
        // xxs: ['0.75rem', '1rem'], //12px 16px // DEPRECATED
        body: ['0.875rem', '157%'], //14px 21.98px // DEPRECATED
        'large-body': ['1.125rem', '133%'], //18px 23.94px // DEPRECATED
        button: ['0.875rem', '120%'], //14px 16.8px // DEPRECATED
        'text-link': ['0.875rem', '0.875rem'], //14px 14px // DEPRECATED
        small: ['0.75rem', '130%'], //12px 15.6px // DEPRECATED
        legal: ['0.625rem', '130%'], //10px 13px // DEPRECATED
        base: ['1rem', '1.125rem'], //16px 18px // DEPRECATED

        // Mobile font sizes
        'sm-xxl': ['2rem', '120%'], //32px 38.4px // DEPRECATED
        'sm-xl': ['2rem', '120%'], //32px 38.4px // DEPRECATED
        'sm-l': ['2rem', '120%'], //32px 38.4px // DEPRECATED
        'sm-m': ['1.5rem', '2rem'], //24px 32px // DEPRECATED
        'sm-s': ['1.25rem', '1.75rem'], //20px 28px // DEPRECATED
        'sm-xs': ['1rem', '1.25rem'], //16px 20px // DEPRECATED
        'sm-xxs': ['0.75rem', '1rem'], //12px 16px // DEPRECATED
        ...figmaVariables.fontSize,
      },
      fontFamily: {
        avenir: 'Avenir Next, sans-serif', // DEPRECATED
        notoSans: 'Noto Sans, sans-serif', // DEPRECATED
        ...figmaVariables.fontFamily,
      },
      fontWeight: {
        bold: '700', // DEPRECATED
        heavy: '600', // DEPRECATED
        'semi-bold': '600', // DEPRECATED
        medium: '500', // DEPRECATED
        regular: '400', // DEPRECATED
        'extra-light': '300', // DEPRECATED
      },
      lineHeight: {
        20: '4.4rem', // 48 // DEPRECATED
        16: '3.5rem', // 48 // DEPRECATED
        12: '3rem', // 48 // DEPRECATED
        2: '1.375rem', // 22 // DEPRECATED
        1: '1.188rem', // 19 // DEPRECATED
      },
      screens: {
        xl: '1488px', // DEPRECATED
        lg: '1248px', // DEPRECATED
        mml: '1024px', // DEPRECATED
        ml: '1008px', // DEPRECATED
        mmd: '800px', // DEPRECATED
        md: '672px', // DEPRECATED
        sm: '375px', // DEPRECATED
      },
      spacing: {
        xxl: '7.5rem', // 120px // DEPRECATED
        xl: '5rem', // 80px // DEPRECATED
        l: '2.5rem', // 40px // DEPRECATED
        ml: '2rem', // 32px // DEPRECATED
        m: '1.5rem', // 24px // DEPRECATED
        s: '1rem', // 16px // DEPRECATED
        xs: '0.75rem', // 12px // DEPRECATED
        xxs: '0.5rem', // 8px // DEPRECATED
        xxxs: '0.25rem', // 4px // DEPRECATED
        0: '0px', // DEPRECATED
        'container-width': '1440px', // DEPRECATED
        'spacing-spacing-3': '12px', // DEPRECATED
        'spacing-spacing-4': '16px', // DEPRECATED
        'spacing-spacing-5': '24px', // DEPRECATED
      },
    },
  },
  plugins: [],
};
