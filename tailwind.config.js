/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#17D9FF',
        black: '#000000',
        white: '#FFFFFF'
      },
    },
  },
  plugins: [],
};