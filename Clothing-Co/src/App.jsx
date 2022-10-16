import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import imageData from "./components/imageData";
import "./App.css";
import Carousel from "./components/Carousel";
import Title from "./components/Title";
import Grid from "./components/Grid";
import { Routes, Route } from "react-router-dom";

function App() {
  // Mobile Dropdown Menu
  const [position, setPosition] = useState("absolute");
  const [opacity, setOpacity] = useState(0);
  function toggleMenu() {
    if (position === "absolute") {
      setPosition("static");
    } else {
      setPosition("absolute");
    }
    if (opacity === 0) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }
  // Access to Screen Size for condition rendering
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = imageData.map((image, index) => (
    <img src={image.imagePath} key={index} className="w-20"></img>
  ));

  // Shopping Cart functionality
  const [cart, setCart] = useState([]);

  function addToCart() {
    return setCart((prevCart) => [...prevCart, images.src]);
  }

  return (
    <div className="background">
      <Header
        windowSize={windowSize}
        toggle={toggleMenu}
        position={position}
        opacity={opacity}
      />
      <Routes>
        <Route
          exact
          path="/Home"
          element={
            <div>
              <div className="flex flex-col items-center md:flex-row md:justify-around w-8/12 mx-auto mb-10">
                <Title />
                <Carousel />
              </div>
              <Grid />
            </div>
          }
        />
        <Route exact path="/WomansStyle" element={<Grid />} />
        <Route exact path="/MensStyle" element={<Grid />} />
        <Route exact path="/ShoppingBag" element={<Grid />} />
      </Routes>
    </div>
  );
}
export default App;
