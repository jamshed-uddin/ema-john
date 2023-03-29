import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.cart;
  // console.log(cart);

  let total = 0;
  let shippingCharge = 0;

  for (let product of cart) {
    // console.log(product);
    total = total + product.price;
    shippingCharge = shippingCharge + product.shipping;
  }
  const tax = (total * 7) / 100;

  const grandTotal = total + shippingCharge + tax;

  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected item:{cart.length}</p>
      <p>Total price: ${total}</p>
      <p>Total shipping charges: ${shippingCharge}</p>
      <p>Tax: ${tax.toFixed(2)} </p>
      <h3>Grand total: ${grandTotal.toFixed(2)}</h3>
      <div className="insideCart-btn">
        <button>Clear cart</button>
        <button>Review cart</button>
      </div>
    </div>
  );
};

export default Cart;
