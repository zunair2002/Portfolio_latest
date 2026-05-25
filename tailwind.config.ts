/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        windsong: "var(--font-windsong)",
        inter: "var(--font-inter)",
        michroma: "var(--font-michroma)"
        },
    },
  },
  plugins: [],
};