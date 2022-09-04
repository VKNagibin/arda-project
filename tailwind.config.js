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
      keyframes: {
        'hide-popup': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'hide-form': {
          '0%': { transform: "translateY(0)" },
          '100%': { transform: "translateY(50vh)"},
        },
        'hide-menu': {
          '0%': { transform: "translateX(0)" },
          '100%': { transform: "translateX(100vw)"},
        },
        'menu-item-hover': {
          '0%': { transform: "translateX(0)" },
          '100%': { transform: "translateX(100%)"},
        },
        'menu-appear': {
          '0%': { transform: "translateX(100vw)" },
          '100%': { transform: "translateX(0)"},
        },
        'popup-appear': {
          '0%': { opacity: '0'},
          '100%': { opacity: '1' },
        },
        'form-appear': {
          '0%': { transform: "translateY(50vh)" },
          '100%': { transform: "translateY(0)" },
        },
      },

      animation: {
        'form-appear': 'form-appear .5s  forwards ',
        'menu-appear': 'menu-appear .5s forwards ',
        'popup-appear': 'popup-appear .5s forwards ',
        'menu-item-hover': 'menu-item-hover .3s forwards ',
        'hide-menu': 'hide-menu .5s  forwards ',
        'hide-form': 'hide-form .5s  forwards ',
        'hide-popup': 'hide-popup .5s forwards ',
      },

      colors: {
        "arda-grey": "#EBEBEB",
        'arda-black': "#3B3B3B",
        'arda-orange': "#FFBE2E",
        'arda-menu-color': "rgba(231,167,39,0.48)",
        'arda-deep-orange': "#ff8c2e",
        "arda-yellow": 'rgba(239,187,16,0.3)',
        "popup": 'rgba(9,9,9,0.8)',
        "light-popup": 'rgba(9,9,9,0.05)',
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