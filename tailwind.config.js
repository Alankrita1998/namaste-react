// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#cdd15e',
      },
      fontFamily: {
        cursive: ['cursive'],
      },
      backgroundImage: {
        customimage: "url('https://www.annmariegianni.com/wp-content/uploads/2014/05/brain-foods-1.jpg')",
      },
      
    },
  },
  plugins: [],
}

