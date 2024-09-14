/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1f2937', // Customize this color as needed
        'secondary': '#4b5563' // Example of a secondary color
      },
      fontSize: {
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }]
      },
      screens: {
        'md': '768px', // Example for medium screens
        'lg': '1024px', // Example for large screens
        'xl': '1280px', // Example for extra-large screens
        '2xl': '1536px', // Example for 2x extra-large screens
      },
    },
  },
  plugins: [],
}
