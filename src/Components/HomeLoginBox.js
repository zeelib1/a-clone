import React from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import '../styles/HomeLoginBox.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="homeLoginBox">
      <h2>{!user ? "Sign in for your best experience" : user.email.substr(0, user.email.indexOf("@"))  +", welcome" + user  && basket.length === 0 ? "please add items into your basket !" :"Add more items, or proceed to checkout."}</h2>
      {!user ? (
        <button onClick={(e) => history.push("/login")} className="subtotal__button">
          Sign in securely
        </button>
      ) : (
        <button
          onClick={
            user
              ? (e) => history.push("/checkout")
              : (e) => history.push("/login")
          }
          className="subtotal__button"
        >
         
          <p style={{display:"flex", alignItems:"center", justifyContent:"center"}} >Cart <AddShoppingCartIcon style={{marginLeft:5}} /></p> 

        </button>
      )}
    </div>
  );
}

export default Subtotal;
