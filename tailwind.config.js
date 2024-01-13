module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
      screens: {
        md: "890px",
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
