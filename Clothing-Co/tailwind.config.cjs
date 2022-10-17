/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pasifico: ["Pacifico", "cursive"],
      varela: ["Varela Round", "sans-serif"],
      // background-size: {
      //   "bg-size": "cover"
      // }
    },
    extend: {
      aspectRatio: {
        "9/16": "9/16",
      },
      backgroundImage: {
        mImage1: "url('./mensStyle/blackcoat.jpg')",
        mImage2: "url('./mensStyle/blackjacket.jpg')",
        mImage3: "url('./mensStyle/blackshirt.jpg')",
        mImage4: "url('./mensStyle/blacksweater.jpg')",
        mImage5: "url('./mensStyle/blueblazer.jpg')",
        mImage6: "url('./mensStyle/bluejacket.jpg')",
        mImage7: "url('./mensStyle/whitetee.jpg')",
        mImage8: "url('./mensStyle/strippedshirt.jpg')",
        wImage1: "url('./womansStyle/blackcoat.jpg')",
        wImage2: "url('./womansStyle/blackoutfit.jpg')",
        wImage3: "url('./womansStyle/redshirt.jpg')",
        wImage4: "url('./womansStyle/greenblazer.jpg')",
        wImage5: "url('./womansStyle/whiteshirt.jpg')",
        wImage6: "url('./womansStyle/jewlery.jpg')",
        wImage7: "url('./womansStyle/yellowjoggers.jpg')",
        wImage8: "url('./womansStyle/strippedshirt.jpg')",
      },
      inset: {
        "10p": "10%",
      },
    },
  },
  plugins: [],
};
