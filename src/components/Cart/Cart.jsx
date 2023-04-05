import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faDeleteLeft,
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const Cart = (props) => {
  const cart = props.cart;
  const clearCartHandler = props.clearCartHandler;
  // console.log(cart);

  let total = 0;
  let shippingCharge = 0;
  let quantity = 0;

  for (let product of cart) {
    product.quantity = product.quantity || 1;
    // console.log(product);
    total = total + product.price * product.quantity;
    shippingCharge = shippingCharge + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;

  const grandTotal = total + shippingCharge + tax;

  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected item:{quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total shipping charges: ${shippingCharge}</p>
      <p>Tax: ${tax.toFixed(2)} </p>
      <h3>Grand total: ${grandTotal.toFixed(2)}</h3>
      <div className="insideCart-btn">
        <button onClick={clearCartHandler}>
          Clear cart <FontAwesomeIcon icon={faTrash} />
        </button>
        <button>
          Checkout <FontAwesomeIcon icon={faCircleInfo} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
