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
      },
    },
  },
  plugins: [],
};
