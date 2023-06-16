/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fixedsys: ["Fixedsys", "sans-serif"],
        nasa: ["Nasa", "sans-serif"],
        merchandise: ["Merchandise", "sans-serif"],
      },
      colors: {
        mainBackground: "#DFD0BB",
        modalDark: "#474344",
        behindModal: "#E5BD77",
        orangeHighlight: "#943d2c",
        hoverOrange: "#cc7952",
      },
    },
  },
  plugins: [],
};
