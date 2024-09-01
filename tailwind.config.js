/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4183d1',
        'danger': '#c00'
      },
      fontFamily: {
        'poppins' : ["Poppins", "sans-serif"]
      },
      boxShadow: {
        'search-box': '0 0 2rem rgba(204,0,0,.7)',
        'popular': '1px -108px 36px -23px rgba(0,0,0,0.17) inset',
        'card': '0 0 .25rem rgba(0, 0, 0, .075) !important'
      }
    },
  },
  plugins: [],
}