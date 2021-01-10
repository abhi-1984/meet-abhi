module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  variants: {
    extend: {},
  },
  theme: {
    fontFamily: {
      sans: "sofia-pro, sans-serif",
    },
    extend: {
      colors: {
        black: "#060606",
        jetBlack: "#121213",
        accent: "#fff", //"#31E981",
      },
      animation: {
        spin: "pulse 3s linear infinite",
        "spin-slow": "spin 9s linear infinite",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(10px)",
        overlay: "blur(40px)",
      },
      screens: {
        xs: "400px",
        md: "800px",
      },
      spacing: {
        28: "7rem",
      },
      width: {
        300: "300px",
      },
      height: {
        300: "300px",
        440: "440px",
      },
      letterSpacing: {
        tighter: "-.04em",
      },

      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        lg: "1.25rem",
        xl: "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3.25rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        inner: "inset 0px 0px 100px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-filters"),
  ],
};
