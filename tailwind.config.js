/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.*", "./components/**/*.*", "./app/**/*.*"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
      },
    },
  },
  plugins: [],
};
