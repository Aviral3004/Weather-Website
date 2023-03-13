/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { spacegrotesk: ["Space Grotesk", "sans-serif"] },
      flexGrow: { 2: "2", 3: "3", 4: "4", 5: "5" },
      colors: {
        backgroundColor: "#FDFDFD",
        primaryColor: "#ADB3BC",
        secondaryColor: "#D8D7D5",
        textColor: "#050606",
      },
    },
  },
  plugins: [],
};

