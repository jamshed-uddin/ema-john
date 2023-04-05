import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log("cart", cart);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const savedCart = [];
    // console.log("products", products);
    const storedCart = getShoppingCart();
    // console.log(storedCart);
    // step 1 :get id of the added product
    for (const id in storedCart) {
      // console.log(id);
      // step 2: get product from product state by using id
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];

        addedProduct.quantity = quantity;
        // step 4: add the updated product to the cart
        savedCart.push(addedProduct);
      }
      // console.log(addedProduct);
    }

    // step 5: add the new cart to the setCart state
    setCart(savedCart);
  }, [products]);

  //next
  const addToCartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  const clearCartHandler = () => {
    setCart([]);
    deleteShoppingCart();
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
          <Cart clearCartHandler={clearCartHandler} cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
