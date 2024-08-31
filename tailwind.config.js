/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ["Poppins", "sans-serif"]
      },
      boxShadow: {
        'search-box': '0 0 2rem rgba(204,0,0,.7)'
      }
    },
  },
  plugins: [],
}