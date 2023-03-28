import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <>
      <div className="shop-container">
        <div className="shop">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCartHandler={addToCartHandler}
            ></Product>
          ))}
        </div>

        <div className="cart">
          <h2>Order summary</h2>
          <p>Selected item:{cart.length}</p>
          <p>Total price:</p>
          <p>Total shipping charges:</p>
          <p>Tax:</p>
          <h3>Grand total:</h3>
          <div className="insideCart-btn">
            <button>Clear cart</button>
            <button>Review cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
