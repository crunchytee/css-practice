module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      "100px": "100px",
      "200px": "200px",
      "300px": "300px",
      "400px": "400px",
    },
    width: {
      "100px": "100px",
      "200px": "200px",
      "300px": "300px",
      "400px": "400px",
    },
    extend: {
      spacing: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "400px": "400px",
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
