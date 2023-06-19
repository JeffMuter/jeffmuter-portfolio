// @type {import('tailwindcss').Config}
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        // apply with text-shadow*add color name*
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        teal: "0 0 14px rgba(184, 185, 237, 0.2), 0 0 15px rgba(184, 185, 237, 0.2), 0 0 12px rgba(184, 185, 237, 0.2), 0 0 8px rgba(184, 185, 237, 0.2), 0 0 18px rgba(184, 185, 237, 0.2), 0 0 17px rgba(184, 185, 237, 0.2), 0 0 17px rgba(184, 185, 237, 0.2), 0 0 17px rgba(184, 185, 237, 0.2)",
      },

      boxShadow: {
        teal: "0px 0px 14px 8px rgba(184, 185, 237, 0.5)",
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
          "box-shadow": (value) => ({
            boxShadow: value,
          }),
        },
        {
          values: theme("boxShadow"),
        }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
