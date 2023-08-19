/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': 'url(/images/footer-bg.png)',
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },

      animation: {
        revealRight: 'revealRight 0.5s ease forwards',
      },

      fontFamily: {
        Ubuntu: ['Ubuntu', "sans-serif"]
      }
    },
  },
  plugins: [],
};
