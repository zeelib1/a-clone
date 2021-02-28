// Modules, Context provider, uuid for unique order
import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { getTotal } from "../reducer";
import Product from "./Product";
export let uniqueOrder = uuidv4();

function PaymentFake({ id, title, image, rating, price }) {
  const date = new Date(Date.now()).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(uuidv4())
        .set({
          user: user.uid,
          basket: basket,
          timestamp: new Date().valueOf(Math.floor(Date.now() / 1000)),
        })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    }
  }, [user]);

  const emptyBasketOnHomepageReturn = () => {
    history.replace("/paymentFake");
    dispatch({
      type: "EMPTY_BASKET",
      basket: [],
    });
  };

  return (
    <main className="orders">
      <button onClick={emptyBasketOnHomepageReturn}>Continue Shopping</button>
      {basket.length > 0 && user ? (
        <>
          <h1>Order Review: </h1>
          <section className="orders__info">
            <div className="ordersInfo__leftPane">
              <div>
                <p>Order Placed</p>
                <p>{date}</p>
              </div>
              <div>
                <p>Total</p>
                <p>${getTotal(basket)}</p>
              </div>
              <div>
                <p>Ship To</p>
                <p className="orders__username">
                  {user.email.substr(0, user.email.indexOf("@"))}
                </p>
              </div>
            </div>
            <div className="ordersInfo__rightPane">
              <p>Order ID :{uniqueOrder}</p>
              <p>Provide an Order ID for customer issues</p>
            </div>
          </section>

          <section className="orders__products">
            {basket
              ? basket.map((item, i) => {
                  return (
                    <Product
                      hiddenButton={true}
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
          </section>
        </>
      ) : basket.length === 0 ? (
        ((e) => history.push("/"))()
      ) : !user ? (
        ((e) => history.push("/login"))()
      ) : (
        ((e) => history.push("/paymentFake"))()
      )}
    </main>
  );
}

export default PaymentFake;
