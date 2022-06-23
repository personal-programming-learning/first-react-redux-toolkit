/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-seref'],
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
     colors: {
      "special-gray": '#F5F0F0',
     }
    },
  },
  plugins: [],
}
