module.exports = {
  content: ["./src/**/*.{html,vue,js,ts}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        primary: {
          100: "#F4FBFF",
          200: "#E9F7FE",
          300: "#D1EDF9",
          500: "#54BCE8",
          700: "#0071BC",
        },
      },
    },
  },
  plugins: [],
};
