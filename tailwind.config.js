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
        'close-pop': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'close-forms': {
          '0%': { transform: "translateY(0)" },
          '100%': { transform: "translateY(50%)"},
        },
        'menu-item-hover': {
          '0%': { transform: "translateX(0)" },
          '100%': { transform: "translateX(100%)"},
        },
        menu: {
          '0%': { transform: "translateX(100%)" },
          '100%': { transform: "translateX(0)"},
        },
        'close-menu': {
          '0%': { transform: "translateX(0)" },
          '100%': { transform: "translateX(100%)"},
        },
        pop: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1' },
        },
        form: {
          '0%': { transform: "translateY(50%)" },
          '100%': { transform: "translateY(0)" },
        },
      },

      animation: {
        form: 'form .5s ease-in-out forwards ',
        menu: 'menu .3s ease-in-out forwards ',
        pop: 'pop .3s ease-in-out forwards ',
        'menu-item-hover': 'menu-item-hover .3s ease-in-out forwards ',
        'close-menu': 'close-menu .3s ease-in-out forwards ',
        'close-forms': 'close-forms .5s ease-in-out forwards ',
        'close-pop': 'close-pop .3s ease-in-out forwards ',
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