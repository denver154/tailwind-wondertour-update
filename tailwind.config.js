/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark: "hsl(208.7,51.11%,17.65%)",
        light: "hsl(208.7,51.11%,17.65%)",
        primary: "hsl(175.96,98.89%,35.29%)",
        grey: "hsl(0,0%,96.86%)",
        gren: "#50ba87"
      },

      backgroundImage:{
        'third': 'url("./img/thumnails-info-1-370x303.jpg")',
        'contact': 'url("./img/discount.jpg")',
      }

    },
  },
  plugins: [],
}

