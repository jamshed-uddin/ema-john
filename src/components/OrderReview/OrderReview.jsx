import React, { useState } from "react";
import "./OrderReview.css";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewedItem from "../ReviewedItem/ReviewedItem";
import { removeFromDb } from "../../utilities/fakedb";

const OrderReview = () => {
  const products = useLoaderData();

  const [cart, setCart] = useState(products);

  const deleteItemHandler = (id) => {
    const remainingItems = cart.filter((item) => item.id !== id);
    setCart(remainingItems);
    removeFromDb(id);
  };

  const clearCartHandler = () => {
    setCart([]);
    deleteShoppingCart();
  };
  // console.log(cart);

  console.log(products);
  return (
    <div className="order-review">
      <div className="reviewed-section">
        {cart.map((product) => (
          <ReviewedItem
            key={product.id}
            product={product}
            deleteItemHandler={deleteItemHandler}
          ></ReviewedItem>
        ))}
      </div>
      <div>
        <Cart clearCartHandler={clearCartHandler} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
