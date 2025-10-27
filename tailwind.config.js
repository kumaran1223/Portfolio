/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Dark Theme Colors
        'bg-dark': '#0A192F',
        'text-light': '#CCD6F6',
        'accent-neon': '#00FFC0',
        'card-dark': '#112240',
        'border-dark': '#233554',
        
        // Light Theme Colors
        'bg-light': '#F8F8FF',
        'text-dark': '#1E293B',
        'accent-light': '#3730A3',
        'card-light': '#FFFFFF',
        'border-light': '#D1D5DB',
      }
    }
  },
  plugins: [],
}

