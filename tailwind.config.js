/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        RobotoMono:"'Roboto Mono', monospace",
        Roboto:"'Roboto', sans-serif"
      }
    },
  },
  plugins: [],
}

