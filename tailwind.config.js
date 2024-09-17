/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563eb', // Example blue color
          700: '#1d4ed8', // Darker blue color
        },
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
