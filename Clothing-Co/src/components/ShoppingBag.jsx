import { useEffect } from "react";
import { useState } from "react";

export default function ShoppingBag(props) {
  // Maping through arrays to create Shopping bag items individually
  // Cart Item Styling done here

  function createCart() {
    const itemPicture = props.cart.map((item, index) => (
      <div className={item} key={index}></div>
    ));
    const itemPrice = props.price.map((cost, index) => (
      <p
        key={index}
        className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer"
      >
        {cost}$
      </p>
    ));
    const removeButton = props.cart.map((item, index) => (
      <button
        key={index}
        className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer hover:underline"
      >
        Remove
      </button>
    ));

    // Shopping Bag Total

    const totalPrice = props.price.reduce(
      (prev, cur) => Number(prev) + Number(cur),
      0
    );

    // Render Cart Items and Layout
    return (
      <div>
        <div className=" flex mt-20 w-11/12 mx-auto">
          <div className="flex w-1/3 items-center flex-col gap-10 ">
            {itemPicture}
            {}
          </div>
          <div className="flex w-1/3 items-center flex-col gap-10 justify-around">
            {itemPrice}
          </div>
          <div className="flex w-1/3 items-center flex-col gap-10 justify-around">
            {removeButton}
          </div>
        </div>
        {/* Render total price and Layout */}
        <div className=" flex my-20 w-11/12 mx-auto">
          <div className="flex w-1/3 items-center flex-col gap-10 justify-around">
            <p className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer">
              Bag Total:
            </p>
          </div>
          <div className="flex w-1/3 items-center flex-col gap-10 justify-around">
            <p className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer underline">
              {totalPrice}$
            </p>
          </div>
          <div className="flex w-1/3 items-center flex-col gap-10 justify-around">
            <button className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer">
              Checkout
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-20"></div>
      </div>
    );
  }

  return <div>{createCart()}</div>;
}
//   props.cart.map((item) =>
//     props.price.map((cost, index) => (
//       <div className="flex justify-around items-center mt-20">
//         <div className={item} key={index}></div>
//         <p className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer">
//           {cost}$
//         </p>
//         <button className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer">
//           Remove
//         </button>
//       </div>
//     ))
//   );
// }
