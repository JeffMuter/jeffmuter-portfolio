/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


module.exports = {
  
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/components/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {

      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        teal: '0 0 4px #B8B9ED, 0 0 5px #B8B9ED, 0 0 15px #B8B9ED, 0 0 20px #B8B9ED, 0 0 40px #B8B9ED, 0 0 45px #B8B9ED, 0 0 50px #B8B9ED, 0 0 70px #B8B9ED',
      },
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
  variants: [],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
