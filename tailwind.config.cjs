/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#FBFBFB",
      border: "#BFBFBF",
    },
    fontFamily: {
      Domine: ["Domine", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
