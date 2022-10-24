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
    },
    extend: {
      dropShadow: {
        link: "0 0 1px #29100B",
      },
      boxShadow: {
        "shadow-map": "0 0 10px #cecece",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
