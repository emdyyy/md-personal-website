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
          DEFAULT: '#95A5A6',
          light: '#F9F9F9',
          border: '#C1C1C1'
        },
        success: {
          DEFAULT: '#2ecc71'
        },
        error: {
          DEFAULT: '#e74c3c'
        }
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
}
