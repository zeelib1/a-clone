// Modules, state provider
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getTotal } from "../reducer";
import { useHistory } from "react-router-dom";

// Styles and Icons
import "../styles/Subtotal.css";
import TouchAppIcon from "@material-ui/icons/TouchApp";


function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  // const emptyBasketOnHomepageReturn = () => {
  //   history.replace("/paymentFake");
  //   dispatch({
  //     type: "EMPTY_BASKET",
  //     basket: [],
  //   });
  // };
  return (
    <div className="subtotal">
     
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {basket.length === 0 ? (
        <button onClick={(e) => history.push("/")} className="subtotal__button">
          Add items to basket
        </button>
      ) : (
        <button
          onClick={
            user
              ? (e) => {
                history.push("/paymentFake");
                 }
              : (e) => history.push("/login")
          }
          className="subtotal__button"
        >
          <TouchAppIcon  />
          Buy now with 1-Click&#x00AE;
        </button>
      )}
    </div>
  );
}

export default Subtotal;
