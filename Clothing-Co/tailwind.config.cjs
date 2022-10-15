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
        image1: "url('./images/tl-m-blk.jpg')",
        image2: "url('./images/tl-m-brn.jpg')",
        image3: "url('./images/tl-m-wht.jpg')",
        image4: "url('./images/tl-w-blk.jpg')",
        image5: "url('./images/tl-w-brn.jpg')",
        image6: "url('./images/tl-w-grn.jpg')",
        image7: "url('./images/tl-w-wht.jpg')",
        image8: "url('./images/tl-w-wht2.jpg')",
      },
      inset: {
        "10p": "10%",
      },
    },
  },
  plugins: [],
};
