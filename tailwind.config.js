module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      wider: ".05em",
      widest: ".3em",
    },
    extend: {
      fontFamily: {
        primary: ["Montserrat"],
        secondary: ["Sacramento"],
      },
      colors: {
        orange: {
          450: "#ca7919",
        },
      },
      height: {
        xxs: "14rem",
        xs: "18rem",
        sm: "24rem",
        md: "32rem",
        lg: "40rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
}
