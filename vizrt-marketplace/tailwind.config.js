/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "collection-1-black": "var(--collection-1-black)",
        "collection-1-blue01": "var(--collection-1-blue01)",
        "collection-1-blue02": "var(--collection-1-blue02)",
        "collection-1-blue03": "var(--collection-1-blue03)",
        "collection-1-blue04": "var(--collection-1-blue04)",
        "collection-1-blue05": "var(--collection-1-blue05)",
        "collection-1-blue06": "var(--collection-1-blue06)",
        "collection-1-blue07": "var(--collection-1-blue07)",
        "collection-1-brandbg": "var(--collection-1-brandbg)",
        "collection-1-brandbglighter": "var(--collection-1-brandbglighter)",
        "collection-1-brandorange": "var(--collection-1-brandorange)",
        "collection-1-brandorangedarker": "var(--collection-1-brandorangedarker)",
        "collection-1-brandtextblue": "var(--collection-1-brandtextblue)",
        "collection-1-brandtextorange": "var(--collection-1-brandtextorange)",
        "collection-1-brandtextwhite": "var(--collection-1-brandtextwhite)",
        "collection-1-green01": "var(--collection-1-green01)",
        "collection-1-grey010": "var(--collection-1-grey010)",
        "collection-1-grey020": "var(--collection-1-grey020)",
        "collection-1-grey035": "var(--collection-1-grey035)",
        "collection-1-grey065": "var(--collection-1-grey065)",
        "collection-1-grey070": "var(--collection-1-grey070)",
        "collection-1-grey075": "var(--collection-1-grey075)",
        "collection-1-grey080": "var(--collection-1-grey080)",
        "collection-1-grey085": "var(--collection-1-grey085)",
        "collection-1-grey090": "var(--collection-1-grey090)",
        "collection-1-grey093": "var(--collection-1-grey093)",
        "collection-1-grey094": "var(--collection-1-grey094)",
        "collection-1-grey095": "var(--collection-1-grey095)",
        "collection-1-grey098": "var(--collection-1-grey098)",
        "collection-1-red01": "var(--collection-1-red01)",
        "collection-1-red02": "var(--collection-1-red02)",
        "collection-1-red03": "var(--collection-1-red03)",
        "collection-1-white": "var(--collection-1-white)",
        "collection-1-yellow01": "var(--collection-1-yellow01)",
        "m-3syslighterror": "var(--m-3syslighterror)",
        "m3syslighton-error": "var(--m3syslighton-error)",
      },
      fontFamily: {
        "m3-label-small": "var(--m3-label-small-font-family)",
        navtext: "var(--navtext-font-family)",
        "presets-body2": "var(--presets-body2-font-family)",
      },
    },
  },
  plugins: [],
};
