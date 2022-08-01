/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/pages/**/*.jsx",
    "./src/components/**/*.jsx",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "2px 4px 10px 1px rgba(160, 160, 160, 0.47)",
        "b": "1px 4px 5px 0px rgba(0,0,0,0.10)",
        "l": "4px 0px 5px 0px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
