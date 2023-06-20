// @type {import('tailwindcss').Config}
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee0: "marquee0 35s linear infinite",
        marquee1: "marquee1 35s linear infinite",
        marquee2: "marquee2 65s linear infinite",
        marquee3: "marquee3 50s linear infinite",
        marquee4: "marquee4 55s linear infinite",
        marquee5: "marquee5 60s linear infinite",
        marquee6: "marquee6 45s linear infinite",
      },
      keyframes: {
        marquee0: {
          "0%": { transform: "translateX(600%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee1: {
          "0%": { transform: "translateX(500%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(500%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee3: {
          "0%": { transform: "translateX(500%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee4: {
          "0%": { transform: "translateX(500%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee5: {
          "0%": { transform: "translateX(500%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee6: {
          "0%": { transform: "translateX(500%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animationDelay: {
        "20s": "20s",
        "-4s": "-4s",
        "-10s": "-10s",
        "-20s": "-20s",
        "-25s": "-25s",
        "-30s": "-30s",
        "-40s": "-40s",
        "-50s": "-50s"
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        teal: "0 0 14px rgba(184, 185, 237, 0.3), 0 0 15px rgba(184, 185, 237, 0.9), 0 0 12px rgba(184, 185, 237, 0.9), 0 0 8px rgba(184, 185, 237, 0.3), 0 0 18px rgba(184, 185, 237, 0.3), 0 0 17px rgba(184, 185, 237, 0.9), 0 0 17px rgba(184, 185, 237, 0.3), 0 0 17px rgba(184, 185, 237, 0.3)",
      },
      boxShadow: {
        teal: "0px 0px 14px 8px rgba(184, 185, 237, 0.5)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
    colors: {
      purple: "#191919",
      pink: "#000000",
      teal: "#B8B9ED",
      white: "#E7DFDD",
      lightRed: "#EF5350",
      coral: "#FF7F50",
      emerald: "#00CB72"
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
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".delay-20s": {
          "animation-delay": "20s",
        },
        ".delay--4s": {
          "animation-delay": "-4s",
        },
        ".delay--10s": {
          "animation-delay": "-10s",
        },
        ".delay--20s": {
          "animation-delay": "-20s",
        },
        ".delay--25s": {
          "animation-delay": "-25s",
        },
        ".delay--30s": {
          "animation-delay": "-30s",
        },
        ".delay--40s": {
          "animation-delay": "-40s"
        }
      };
      addUtilities(utilities, ["responsive"]);
    }),
  ],
};
