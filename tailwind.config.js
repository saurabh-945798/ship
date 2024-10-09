/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins here
      },
      colors: {  
        'custom-gray': '#F9F9F9',  
      },  
    },
  },
  plugins: [],
}
