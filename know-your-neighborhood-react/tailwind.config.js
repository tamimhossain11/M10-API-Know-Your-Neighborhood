/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111212",
        secondary: "#121711",
        color1: "#28fa07",
        color2: "#f7fcf8",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
