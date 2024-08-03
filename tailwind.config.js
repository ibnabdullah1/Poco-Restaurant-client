const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0cb14b",
      secondary: "#333333",
      third: "#ffcc00",
    },
  },
  plugins: [require("tailwind-scrollbar")],
});
