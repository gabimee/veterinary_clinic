/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/images/bg.jpg')"
      },
      fontFamily: {
        serif: ["Roboto", 'sans-serif']
      },
    },
  },
  plugins: [],
}