export default function ShoppingBag(props) {
  function createCart() {
    return props.cart.map((item) => (
      <div>
        <p>item</p>
      </div>
    ));
  }

  return [createCart()];
}
