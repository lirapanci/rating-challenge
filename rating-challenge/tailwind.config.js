/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'light-gray': '#7C8798',
      'medium-gray': '#959EACFF',
      'dark-blue': '#252D37FF',
      'very-dark-blue': '#16191DFF',
      'orange': '#FB7413FF',
      'white': '#FFFFFFFF',
    },
    extend: {
      fontFamily: {
        'overpass1': ['Londrina Shadow', 'cursive'],
        'overpass2':['Varela', 'sans-serif']
      }
    },
  },
  plugins: [],
}