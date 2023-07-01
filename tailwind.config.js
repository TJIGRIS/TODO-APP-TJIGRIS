/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
        raleway: 'Raleway, sans-serif'
      },
      borderRadius: {
        bloque: '4px 4px 0px 0px'
      }
    }
  },
  plugins: []
}
