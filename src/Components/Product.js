import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "../styles/Product.css";

// Amazon Clone Product

function Product({ id, title, image, price, rating, hiddenButton }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const [button, setButton] = useState(false);
  const history = useHistory();

  const addToCart = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    setButton(true);
  };

  return (
    <div className="product__info">
      <p>{title}</p>

      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>

      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>

      <img src={image} alt="Book" />
      {user ? (
        <button
          className={hiddenButton ? "hide" : "show align__self"}
          onClick={() => {
            addToCart();
          }}
        >
          Add to Basket
        </button>
      ) : (
        <button className="align__self" onClick={(e) => history.push("/login")}>
          Add to Basket
        </button>
      )}
    </div>
  );
}

export default Product;
