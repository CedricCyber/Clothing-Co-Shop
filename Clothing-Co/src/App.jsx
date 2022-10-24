import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import imageData from "./components/imageData";
import "./App.css";
import Carousel from "./components/Carousel";
import Title from "./components/Title";
import Grid from "./components/Grid";
import { Routes, Route } from "react-router-dom";
import WomansGrid from "./components/WomansGrid.jsx";
import MensGrid from "./components/MensGrid.jsx";
import ShoppingBag from "./components/ShoppingBag.jsx";

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
  const [price, setPrice] = useState([]);
  function addToCart(e) {
    // console.log(cart);
    // console.log(price);

    return (
      setCart((prevCart) => [...prevCart, e.target.id]),
      setPrice((prevPrice) => [...prevPrice, e.target.previousSibling.id])
    );
  }
  // Remove from Cart

  function removeFromCart(e) {
    setPrice((prevPrice) => {
      prevPrice.filter((price, index, prevPrice) => {
        return e.target.attributes.index.value !== index && price;
      });
    });
    setCart((prevCart) => {
      prevCart.filter((cart, index, prevCart) => {
        return e.target.attributes.index.value !== index && cart;
      });
    });
    console.log(e.target.attributes.index.value);
    console.log("hello");
    console.log("hello");
    // setPrice((prevPrice) => (
    //   prevPrice.filter( prevPrice !== e.target.index)
    // )
    // return setCart((prevCart) => [...prevCart.splice(e.target.index, 1)]);
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
              <Grid addToCart={addToCart} />
            </div>
          }
        />
        <Route
          exact
          path="/WomansStyle"
          element={<WomansGrid addToCart={addToCart} />}
        />
        <Route
          exact
          path="/MensStyle"
          element={<MensGrid addToCart={addToCart} />}
        />
        <Route
          exact
          path="/ShoppingBag"
          element={
            <ShoppingBag
              removeFromCart={removeFromCart}
              price={price}
              cart={cart}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
