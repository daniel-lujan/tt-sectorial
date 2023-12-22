/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      enphasis: ["Titillium Web", "serif"],
      mono: ["Space Mono", "ui-monospace"],
    },
    colors: {
      primary: "#d43947",
      secondary: "#ef8c96",
      accent: "#f34858",
      background: {
        DEFAULT: "#fcf6f6",
        600: "#FAECED",
        900: "#FAE1E3",
      },
      text: "#100707",
      success: {
        DEFAULT: "#02e0c3",
        100: "#e1faf7",
        300: "#a1ede3",
      },
      grey: {
        DEFAULT: "#c4c4c4",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#b3b3b3",
        500: "#929292",
        600: "#828282",
        700: "#707070",
        800: "#5e5e5e",
        900: "#4c4c4c",
      },
    },
    extend: {},
  },
  plugins: [],
};
