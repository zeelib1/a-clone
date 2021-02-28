import React from "react";
import {useStateValue} from '../StateProvider'
import "../styles/CheckoutProduct.css";

function CheckoutProduct({id,index, title,image, rating, price}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type:"REMOVE_FROM_BASKET",
      index:index,
      item:{
        ...basket
        
      }
    });
  }
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="product-checkout"
      />
      <div className="checkoutProduct__info">
        <p>
          {title}
        </p>
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
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
