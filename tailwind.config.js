module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1366px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      "roboto-bold": [ "RobotoBold", 'sans-serif'],
      oswald: ['OswaldBold', 'sans-serif'],
    },
    extend: {
      border: {
       "inner-border": "20px solid black",
      },
      animation: {
        popup: 'popup .5s ease-in-out 1',
        form: 'form .5s ease-in-out 1',
        'close-popup': 'close-popup .5s ease-in-out 1',
        'close-form': 'close-form .5s ease-in-out 1',
      },
      keyframes: {
        'close-popup': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'close-form': {
          '0%': { transform: "translateY(0)" },
          '100%': { transform: "translateY(200px)"},
        },
        popup: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        form: {
          '0%': { transform: "translateY(200px)" },
          '100%': { transform: "translateY(0)" },
        },
      },
      colors: {
        "arda-grey": "#EBEBEB",
        'arda-black': "#3B3B3B",
        'arda-orange': "#FFBE2E",
        'arda-deep-orange': "#ff8c2e",
        "arda-yellow": 'rgba(239,187,16,0.3)',
        "popup": 'rgba(9,9,9,0.4)',
      },
      spacing: {
        'sm': '2.5vh',
        'md': '5vh',
        'lg': '10vh',
      },
    },
  },
  plugins: [
      require("daisyui"),
  ]
}