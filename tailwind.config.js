/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnBackground: "var(--btnBackground)",
        btnBackgroundhover: "var(--btnBackgroundhover)",
        pending: "var(--pending)",
        completed: "var(--completed)",
        inprogress: "var(--inprogress)",
      },
    },
  },
  plugins: [],
}