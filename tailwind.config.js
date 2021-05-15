module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      'gilroy': ['Gilroy', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#152F4A',
          light: '#7088A2'
        },
        secondary: {
          DEFAULT: '#95A5A6'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
