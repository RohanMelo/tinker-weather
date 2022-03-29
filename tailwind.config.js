module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        sans: "'Work Sans', sans-serif",
      },
      colors: {
        brandprimary: "#fd7c4f",

        textprimary: "#1E2A32",
        maingray: "#708797",
        intermediarygray: "#4D6475",
        borderprimary: "#E9EEF2",
        backgroundprimary: "#F4F8FA",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
