/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1700px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      screens: {
        'xs': {'min': '10px', 'max': '576px'},
        // Customize screen size for all mobile devices min-width: 300px and max-width:576px
      }
    },
  },
  plugins: [],
}

