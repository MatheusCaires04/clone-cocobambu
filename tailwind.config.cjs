/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "#262622",
      "yellow-dark": "#C6AA69",
      brown: "#441910",
      "brown-dark": "#29100B",
      black: "#000",
      white: "#fff",
      "bg-map": "#FAFAFA",
      "bg-transparent": "transparent",
    },
    extend: {
      dropShadow: {
        link: "0 0 1px #29100B",
      },
      boxShadow: {
        "shadow-map": "0 0 10px #cecece",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1200px",

      "2xl": "1536px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
