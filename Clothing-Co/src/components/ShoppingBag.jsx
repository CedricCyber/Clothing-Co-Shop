export default function ShoppingBag(props) {
  function createCart() {
    return props.cart.map((item, index) => (
      <div className={item} key={index}>
        <p>hello</p>
      </div>
    ));
  }

  return [createCart()];
}
