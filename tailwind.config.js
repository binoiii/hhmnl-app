module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: [
        "bg-sky-blue-450",
        "bg-pink-450",
        "bg-yellow-450",
        "bg-blue-450",
        "bg-red-450",
        "bg-brown-450",
        "bg-silver-450",
        "bg-gold-450",
        "light-purple-450",
        "light-pink-450",
        "dark-pink-450",
        "rose-gold-450",
        "blush-450",
        "pearl-450",
        "bubble-blue-450",
        "tan-450",
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
    textShadow: {
      sm: "1px 1px 3px #bfbfbf",
      md: "0px 1px 2px #bfbfbf, 1px 2px 4px #bfbfbf",
      lg: "3px 3px 6px #bfbfbf, 0 0 5px #bfbfbf",
      xl: "1px 1px 3px #bfbfbf, 2px 4px 7px #bfbfbf",
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
        "sky-blue": {
          450: "#add8e6",
        },
        pink: {
          450: "#ffcfd6",
        },
        brown: {
          450: "#a0522d",
        },
        silver: {
          450: "#DCDCDC",
        },
        gold: {
          450: "#d4af37",
        },
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
        "light-purple": {
          450: "#ddd3ee",
        },
        "light-pink": {
          450: "#ffcfd6",
        },
        "dark-pink": {
          450: "#d16b89",
        },
        "rose-gold": {
          450: "#E7B2A5",
        },
        blush: {
          450: "#ffcfd6",
        },
        pearl: {
          450: "#DCDCDC",
        },
        "bubble-blue": {
          450: "#6eefe5",
        },
        tan: {
          450: "#a0522d",
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
        lg: "42rem",
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
