/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-navy': '#2B2D42',
        'slate-mist': '#8D99AE',
        'frost-white': '#EDF2F4',
        'vibrant-coral': '#EF233C',
        'bold-crimson': '#D90429',
      },
    },
  },
  plugins: [],
}