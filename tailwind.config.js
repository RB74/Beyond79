/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        teal: "#007b7c",
        gray: {
          "100": "#201d1d",
          "200": "rgba(255, 255, 255, 0.1)",
          "300": "rgba(0, 0, 0, 0.6)",
        },
        chocolate: {
          "100": "#c06917",
          "200": "#c06816",
        },
        gainsboro: {
          "100": "#dadada",
          "200": "#d9d9d9",
        },
        "secondary-colors-color-2": "#f2f1ff",
        orange: "#fcbd0e",
        slategray: "#6f6c90",
        darkgray: "#a4a4a4",
        antiquewhite: "rgba(228, 213, 192, 0.15)",
        seagreen: {
          "100": "#1e7046",
          "200": "#006633",
        },
        whitesmoke: "#f7f7f3",
        dimgray: "#5d5e5f",
      },
      fontFamily: {
        "montserrat-alternates": "'Montserrat Alternates'",
        montserrat: "Montserrat",
        "source-sans-pro": "'Source Sans Pro'",
        verdana: "Verdana",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      "2xl": "21px",
      "17xl": "36px",
      lg: "18px",
      sm: "14px",
      "6xl": "25px",
      base: "16px",
      smi: "13px",
      "45xl": "64px",
      mini: "15px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
