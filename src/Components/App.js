// Modules import

import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "../StateProvider";

// Components
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "../firebase";
import PaymentFake from "./PaymentFake";

// Styles
import "../styles/App.css";


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is :", authUser);
      if (authUser) {
        //the user just logged in/ the user was logged in (even if you refresh the page)
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/paymentFake">
            <Header/>
            <PaymentFake />
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
