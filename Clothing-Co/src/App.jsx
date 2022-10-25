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

  function removeFromCart(e, array) {
    let buttonIndex = e.target.attributes.index.value;

    setPrice((prevPrice) => {
      prevPrice.filter((item, index, array) => {
        {
          for (let i = 0; i < prevPrice.length; i++) {
            if (buttonIndex !== index[i]) {
              item;
            }
          }
        }
      });
    });

    // setCart((prevCart) => {

    // });

    // Attempt 2 //

    // prevPrice.filter(
    //   (item, index) => e.target.attributes.index.value !== index && item
    // );
    // prevCart.filter(
    //   (item, index) => e.target.attributes.index.value !== index && item
    // );

    // Attempt 1 //

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
