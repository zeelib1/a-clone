import React from "react";
import Product from "./Product";

const date = new Date(Date.now()).toLocaleDateString("de-DE", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function Order({ order, hiddenButton }) {
  console.log(hiddenButton);

  return (
    <div>
      <h1>Order</h1>
      <p>{date}</p>
      <p>{order.id}</p>
      {order.data.basket?.map((item, i) => {
       return( <Product
       hiddenButton={hiddenButton}
          index={i}
          key={i}
          title={item.title}
          image={item.image}
          rating={item.rating} 
          price={item.price}
        />
      )})}
      
    </div>
  );
}

export default Order;
