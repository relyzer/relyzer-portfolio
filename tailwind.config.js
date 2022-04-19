module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      glow: "0 0 5px #D9ED92",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: {
        nyanza: "#d8f3dc",
        "turquoise-green": "#b7e4c7",
        "turquoise-green-two": "#95d5b2",
        "ocean-green": "#74c69d",
        "ocean-green-two": "#52b788",
        "illuminating-emerald": "#40916c",
        "bottle-green": "#2d6a4f",
        "msu-green": "#1B4332",
        "brunswick-green": "#1b4332",
        "dark-jungle-green": "#081c15",
        "medium-spring-green": "#52FFB8",
      },
      gray: {
        DEFAULT: "#6B7280",
        "pale-silver": "#BFB7B6",
        "battleship-grey": "#848C8E",
      },
      black: {
        DEFAULT: "#000000",
        "space-cadet": "#212738",
        "rich-black-fogra": "#131B24",
      },
      white: {
        DEFAULT: "#FFFFFF",
        "cultured": "#F1F2EE",
      },
    },
    fontFamily: {
      sans: ["Futura", "sans-serif"],
      serif: [],
    },
    extend: {
      gridTemplateColumns: {
        banner: "repeat(9, minmax(30px, auto))",
      },
      dropShadow: {
        "md-thick": "0 4px 4px rgba(0, 0, 0, 0.70)",
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
      width: {
        hd: "1920px",
      },
      height: {
        hd: "1080px",
      },
      screens: {
        'xl': '1440px',
        '2xl': '2560px',
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [],
};
