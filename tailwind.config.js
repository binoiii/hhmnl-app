module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: [
        "bg-yellow-450",
        "bg-blue-450",
        "bg-red-450",
        "translate-x-full1",
        "translate-x-full2",
        "translate-x-full3",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      wide: ".025em",
      wider: ".05em",
      widest: ".3em",
    },
    extend: {
      fontFamily: {
        primary: ["Montserrat"],
        secondary: ["Sacramento"],
        Bernadette: ["Bernadette"],
        riztteen: ["riztteen"],
        BEBAS: ["BEBAS NEUE"],
        Damion: ["Damion"],
        Amarillo: ["Amarillo"],
        Citrica: ["Citrica"],
        MOON: ["MOON"],
        BacktoBlack: ["Back to Black"],
        Uranos: ["Uranos"],
        Blassville: ["Blassville"],
        Heart: ["The Heart"],
        Julietta: ["Julietta"],
        Hughs: ["Hughs"],
        Chasing: ["Chasing Hearts"],
        Edwardian: ["Edwardian"],
        Qonita: ["Qonita"],
        Spring: ["Spring is Coming"],
        Starfish: ["Starfish"],
        OldEnglish: ["Old English"],
        Mason: ["Mason"],
        Geizer: ["Geizer"],
        James: ["James"],
        Nourdilla: ["Nourdilla"],
      },
      colors: {
        orange: {
          450: "#ca7919",
        },
        yellow: {
          450: "#FEF08A",
        },
        blue: {
          350: "#0284C7",
          450: "#0C4A6E",
        },
        red: {
          450: "#EF4444",
        },
      },
      width: {
        sm: "22rem",
        md: "30rem",
        lg: "40rem",
        xl: "60rem",
      },
      height: {
        xxs: "18rem",
        xs: "21.5rem",
        sm: "26rem",
        md: "30rem",
        lg: "40rem",
      },
      fontSize: {
        xxs: ".5rem",
      },
      translate: {
        full1: "0%;",
        full2: "-100%;",
        full3: "-200%;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
}
