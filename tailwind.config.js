module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Sans-serif"]
      },
      colors: {
        link: "#2d72e7",

        "pickled-bluewood": {
          DEFAULT: "#2C3E50",
          50: "#7C9AB7",
          100: "#6F90B0",
          200: "#577B9F",
          300: "#496785",
          400: "#3A526A",
          500: "#2C3E50",
          600: "#18222C",
          700: "#040608",
          800: "#000000",
          900: "#000000"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
