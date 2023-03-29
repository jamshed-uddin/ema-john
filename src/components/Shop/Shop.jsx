import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log("cart", cart);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const savedCart = [];
    console.log("products", products);
    const storedCart = getShoppingCart();
    console.log(storedCart);
    for (const id in storedCart) {
      console.log(id);
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];

        addedProduct.quantity = quantity;

        savedCart.push(addedProduct);
      }
      console.log(addedProduct);
    }
    setCart(savedCart);
  }, [products]);

  //next
  const addToCartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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

        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
