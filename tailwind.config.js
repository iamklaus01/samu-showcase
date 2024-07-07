/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#7C7CD5",
        primary: "#0000BB",
        lightGreen: "#99d5c9",
        doubleLightBlue: "#D9D9FF",
        doubleLightGreen: "#C4EDC4",
        tripleLightBlue: "#EBEBF4",
        cyan: {
          50: '#7C7CD5',
          100: '#7C7CD5',
          200: '#7C7CD5',
          300: '#7C7CD5',
          400: '#7C7CD5',
          500: '#7C7CD5',
          600: '#7C7CD5',
          700: '#7C7CD5',
          800: '#7C7CD5',
          900: '#7C7CD5',
        },
      }
    },
  },
  plugins: [],
}
