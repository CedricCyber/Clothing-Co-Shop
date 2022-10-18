export default function ShoppingBag(props) {
  function createCart() {
    return props.cart.map((item, index) => (
      <div key={index}>
        <p>{item}</p>
      </div>
    ));
  }

  return [createCart()];
}
