/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/*.html",
    "./js/*.js",
    "./**/html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#224c6d',
        'titlecolor': '#13202f'
      },
      fontFamily: {
        'anta': ['"Anta"', 'cursive'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

