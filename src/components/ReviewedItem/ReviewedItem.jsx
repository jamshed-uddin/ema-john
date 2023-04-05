import React from "react";
import "./ReviewedItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewedItem = (props) => {
  // console.log(props.product);
  const { id, img, name, price, quantity } = props.product;

  const deleteItemHandler = props.deleteItemHandler;
  // console.log(products);
  return (
    <div className="reviewed-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="item-info">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="delete-btn">
        <button onClick={() => deleteItemHandler(id)}>
          {" "}
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default ReviewedItem;
