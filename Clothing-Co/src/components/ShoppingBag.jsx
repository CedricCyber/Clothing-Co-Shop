export default function ShoppingBag(props) {
  function createCart() {
    return props.cart.map((item, index) => (
      <div className="flex justify-around items-center mt-20">
        <div
          className="bg-mImage6 bg-contain w-48 h-72 rounded-2xl"
          key={index}
        ></div>
        <p className="">{props.price}</p>
        <button>Remove</button>
      </div>
    ));
  }

  return (
    <div className=" w-11/12 ">
      {createCart()}
      <div className="flex justify-center gap-20">
        <p className="">Total 145</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}
