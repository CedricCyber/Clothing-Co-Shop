import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import "./App.css";
import Carousel from "./components/Carousel";
import Title from "./components/Title";
import Grid from "./components/Grid";
import { Routes, Route, Navigate } from "react-router-dom";
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

  // Shopping Cart functionality
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  function addToCart(e) {
    // console.log(cart);
    // console.log(price);
    setCount((prevCount) => prevCount + 1);
    return setCart((prevCart) => [
      ...prevCart,
      {
        id: count,
        name: e.target.id,
        price: e.target.previousSibling.id,
        inCart: true,
      },
    ]);
  }
  // Remove from Cart
  const removeFromCart = (e) => {
    return setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id == e.target.id ? { ...item, inCart: false, price: 0 } : item
      );
    });
  };

  return (
    <div className="background">
      <Header
        windowSize={windowSize}
        toggle={toggleMenu}
        position={position}
        opacity={opacity}
      />
      <Routes>
        <Route exact path="/" element={<Navigate to="/Home" />} />
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
              count={count}
              cart={cart}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;

// I'm trying to create a remove from cart feature to a React shopping cart however I keep getting an error TypeError message saying Cannot read properties of undefined(reading'map')

// function App() {

//      // Shopping Cart functionality
//      const [cart, setCart] = useState([]);
//      const [price, setPrice] = useState([]);
//      function addToCart(e) {

//        return (
//          setCart((prevCart) => [...prevCart, e.target.id]),
//          setPrice((prevPrice) => [...prevPrice, e.target.previousSibling.id])
//        );
//      }
//      // Remove from Cart

//      function removeFromCart(e) {
//        setPrice((prevPrice) => {
//          [
//            ...prevPrice.filter(
//            (price, index) => e.target.attributes.index.value !== index && price
//          ),
//         ];
//        });
//        setCart((prevCart) => {
//          [
//            ...prevCart.filter(
//              (cart, index) => e.target.attributes.index.value !== index && cart
//            ),
//          ];
//        });
