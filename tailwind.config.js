/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        gotham: ['Montserrat', 'sans-serif'],
        grandhotel: ['Grand Hotel', 'cursive'],
      },
      colors: {
        coffee: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0c1b3',
          400: '#d3a38a',
          500: '#c3876a',
          600: '#ab6d51',
          700: '#8c5a43',
          800: '#6f4a38',
          900: '#2D160E',
          950: '#4B281C',
        }
      }
    },
  },
  plugins: [],
}
