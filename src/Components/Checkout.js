import React from "react";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import "../styles/Checkout.css";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <main className="checkout">
      <section className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/Grocery/Wave2/GetGifting/diwali-offer.gif"
          alt="checkout-ad"
        />
        <div>
          <div className="checkout__title">
            {" "}
            {user ? (
              <>
                <span>Hey </span>
                <p className="name">
                  
                  {basket.length > 0 ? user.email.substr(0, user.email.indexOf("@")) + ", check your shopping basket:" : user.email.substr(0, user.email.indexOf("@"))+", your basket is empty."}
                </p>
              </>
            ) : (
              "Please login"
            )}
          </div>
          {basket
            ? basket.map((item, i) => {
                return (
                  <CheckoutProduct
                    index={i}
                    key={i}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                    price={item.price}
                  />
                );
              })
            : 0}
        </div>
      </section>
      <section className="checkout__right">
        <Subtotal />
      </section>
    </main>
  );
}

export default Checkout;
