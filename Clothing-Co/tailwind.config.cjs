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
        mImage1: "url('../images/blackcoat.jpg')",
        mImage2: "url('../images/blackjacket.jpg')",
        mImage3: "url('../images/blackshirt.jpg')",
        mImage4: "url('../images/blacksweater.jpg')",
        mImage5: "url('../images/blueblazer.jpg')",
        mImage6: "url('../images/bluejacket.jpg')",
        mImage7: "url('../images/whitetee.jpg')",
        mImage8: "url('../images/strippedshirt.jpg')",
        wImage1: "url('../images/whitedress.jpg')",
        wImage2: "url('../images/blackoutfit.jpg')",
        wImage3: "url('../images/redshirt.jpg')",
        wImage4: "url('../images/greenblazer.jpg')",
        wImage5: "url('../images/brownshirt.jpg')",
        wImage6: "url('../images/jewlery.jpg')",
        wImage7: "url('../images/yellowjoggers.jpg')",
        wImage8: "url('../images/strippedshirt2.jpg')",
        wImage9: "url('../images/whitesweater.jpg')",
        wImage10: "url('../images/stripedsweater.jpg')",
      },
      inset: {
        "10p": "10%",
      },
    },
  },
  plugins: [],
};
