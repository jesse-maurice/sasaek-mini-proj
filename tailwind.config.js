/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretend: ['Prentendard', 'sans-serif'],
        gowun: ['Gowun Batang', 'sans-serif']
      }
    },
  },
  plugins: [],
};
