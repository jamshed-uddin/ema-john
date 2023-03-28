import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, name, seller, price, img, quantity, rating } = props.product;
  const addToCartHandler = props.addToCartHandler;

  return (
    <>
      <div className="single-product">
        <img src={img ? img : ""} alt="" />
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p>price: ${price}</p>
          <p>Manufacturer:{seller}</p>
          <p>Rating: {rating}star</p>
        </div>
        <div>
          <button
            onClick={() => addToCartHandler(props.product)}
            className="addToCart-btn"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
