/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ss: ["Style Script", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
