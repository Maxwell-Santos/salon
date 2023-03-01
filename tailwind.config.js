/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--lato-font)'],
        secondary: ['var(--cursive-font)'],
      },
      backgroundColor: {
        'bg-primary': '#2c2c2c',
        'bg-secondary': '#fafafa',
        'button-primary': '#fbbaa1'
      },
      textColor: {
        title: '#fbbaa1',
        'table-contrast': '#fbbaa1',
        primary: '#121212',
        contrast: '#fafafa',
        paragraph: '#c4c4c4',
      },
      screens: {
        'xs': '470px',
      }
    },
  },
  plugins: [],
}
