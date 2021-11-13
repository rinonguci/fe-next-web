module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontSize: {
      xs: ["1.2rem", 1.5],
      sm: ["1.4rem", 1.5],
      base: ["1.6rem", 1.5],
      lg: ["1.8rem", 1.5],
      xl: ["2rem", 1.5],
      "2xl": ["2.4rem", 1.5],
      "3xl": ["3rem", 1.5],
      "4xl": ["3.6rem", 1.5],
      "5xl": ["4.8rem", 1.5],
      "6xl": ["6rem", 1.5],
    },
  },
  variants: {
    extend: {},
    container: [],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@media (min-width: 1536px)": {
            maxWidth: "1536px",
          },
          "@media (min-width: 1280px)": {
            maxWidth: "1280px",
          },
          "@media (min-width: 1024px)": {
            maxWidth: "1024px",
          },
          "@media (min-width: 768px)": {
            maxWidth: "768px",
          },
          "@media (min-width: 640px)": {
            maxWidth: "640px",
          },
          maxWidth: "100%",
        },
      });
    },
  ],
};
