module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    colors: {
      "arda-grey": "#EBEBEB",
      'arda-black': "#3B3B3B",
      'arda-orange': "#FFBE2E",
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      oswald: ['OswaldBold', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [
      require("daisyui"),
  ]
}