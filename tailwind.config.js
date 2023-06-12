/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fixedsys: ["Fixedsys", "sans-serif"],
        nasa: ["Nasa", "sans-serif"],
        merchandise: ["Merchandise", "sans-serif"]
      }
    },
  },
  plugins: [],
}

