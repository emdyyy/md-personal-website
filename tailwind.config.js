module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      'gilroy-bold': ['Gilroy ExtraBold', 'sans-serif'],
      'gilroy-light': ['Gilroy Light', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#152F4A'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
