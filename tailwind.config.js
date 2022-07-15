/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      letterSpacing: {
        2: "0.4rem",
      },
      colors: {
        "cool-blue": "#202632",
        "light-cblue": "#313A49",
        "light-green": "#53FFA9",
        "font-color": "#CEE3E8",
      },
    },
  },
  plugins: [],
};
