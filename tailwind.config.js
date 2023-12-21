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
    },
    extend: {},
  },
  plugins: [],
};
