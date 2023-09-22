/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightText: "#FAFAFA",
        darkBg:"#18181B",
         mainTheme:'#EA580C',
         fadeMainTheme:'#FB923C'
        
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
