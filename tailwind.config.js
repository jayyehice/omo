/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./templates/*.html'],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
