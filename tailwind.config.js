/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Varela Round", "sans - serif"],
      },
    },
    colors: {
      purple: "#191919",
      pink: "#000000",
      teal: "#B8B9ED",
      white: "#E7DFDD",
      lightRed: "#EF5350",
    },
  },
  plugins: [],
};
