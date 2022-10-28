export default function ShoppingBag(props) {
  // Maping through arrays to create Shopping bag items individually
  // Cart Item Styling done here

  // Shopping Bag Total

  return (
    <div>
      <div className=" flex mt-20 w-11/12 mx-auto ">
        <div className="flex w-1/3 items-center flex-col gap-10 ">
          {props.cart.map((item) => (
            <div className={item.name} key={item.name}></div>
          ))}
        </div>
        <div className="flex w-1/3 items-center flex-col gap-10 justify-around">
          {props.price.map((cost, index) => (
            <p
              key={cost.name}
              index={index}
              className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer"
            >
              {cost.name}$
            </p>
          ))}
        </div>
        <div className="flex w-1/3 items-center flex-col gap-10 justify-around">
          {props.price.map((button, index) => (
            <button
              key={index}
              index={index}
              onClick={props.removeFromCart}
              className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer hover:underline"
            >
              Remove
            </button>
          ))}
        </div>
      </div>
      {/* Render total price and Layout */}
      <div className=" flex my-20 w-11/12 mx-auto border-t-2 pt-5 border-white">
        <div className="flex w-1/3 items-center flex-col gap-10 justify-around">
          <p className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer">
            Bag Total:
          </p>
        </div>
        <div className="flex w-1/3 items-center flex-col gap-10 justify-around">
          <p className="text-white text-2xl md:text-3xl  drop-shadow-lg font-varela font-bold mt-20 md:mt-0 cursor-pointer underline">
            {props.price.reduce(
              (prev, cur) => Number(prev) + Number(cur.name),
              0
            )}
            $
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
