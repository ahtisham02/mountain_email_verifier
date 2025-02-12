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
      fontFamily: {
        "plus-jakarta": ['"Plus Jakarta Sans"', "sans-serif"],
      },
      screens: {
        'custom-lg': '970px',
      },
    },
  },
  plugins: [],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = false;
    }
    return config;
  },
  safelist: ["font-plus-jakarta"],
}