/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors:{
        "primary_violet":"#2B2738",
        "back_violet": "#635D75",
        "back_primary":"#F9FAFB",
        "gray_primary":"#E0E0E0",
        "green_primary":"#CFDFCA"
      }
    },
  },
  plugins: [],
}

