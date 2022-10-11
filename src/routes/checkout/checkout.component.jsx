import "./checkout.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page</h1>
      {cartItems.map((cartItem) => {
        const { id, name, quantity} = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br/>
            <span onClick={()=> removeItemToCart(cartItem)}>decrement</span>
            <br/>
            <span onClick={()=> addItemToCart(cartItem)}>increment</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
