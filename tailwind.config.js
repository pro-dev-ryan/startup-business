/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: ["Hanken Grotesk"],
      },
      colors: {
        primary: "#008AFF",
        secondary: "#222D39",
        neutral: "#8492A7",
        grayText: "#ADB7C2",
      },
    },
  },
  plugins: [],
};
