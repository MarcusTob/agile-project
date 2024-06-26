/** @type {import('tailwindcss').Config} */
const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      //custom colours
      colors: {
        brandBg: "#1A2C33",
        brandBgLight: "#1e3541",
        brandOrange: "#EF804E",
        brandOrangeDark: "#E43116",
        brandBlue: "#3956E5",
        brandGreen: "#4DE18A",
        brandYellow: "#FCDC5C",
        brandRed: "#F75B5E",
        brandText: "#F08D5A",
        brandTextWhite: "#FFFFFF",
        brandTextBlue: "#82AAB9",
        brandTextOrange: "#F08D5A",
      },
      //custom fonts
      fontFamily: {
        "m3-label-small": "var(--m3-label-small-font-family)",
        navtext: "var(--navtext-font-family)",
        "presets-body2": "var(--presets-body2-font-family)",
        customFont:["'customFont', Arial"]
      },
      //custom font sizes
      fontSize: {
        h1: '40px',
        h3: '30px', 
        p: '19px',
        p3: '16px', 
      },
    },
  },
  plugins: [],
};
