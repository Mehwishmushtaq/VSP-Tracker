/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #417A459E, #366BC3, #417A459E)',
      },
      colors: {
        primary: {
          DEFAULT: '#417A45', 
        },
        secondary: {
          DEFAULT: '#BFDABA', 
        },
        accent: {
          DEFAULT: '#999999', 
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to bottom, #417A459E, #366BC3, #77E07F)',
        },
      },
      fontFamily: {
        sora: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],  
      },
    },
    plugins: [],
  }
}