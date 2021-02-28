// Modules, auth and state provider
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

// Styles
import "../styles/Header.css";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [toggle, setToggle] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "EMPTY_BASKET",
        basket: [],
      });
    }
  };

  const toggleHamburgerButton = () => {
    setToggle(!toggle);
  };

  return (
    <header className="header">
      {/* LOGO */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          alt="logo"
        />
      </Link>

      {/* SEARCH INPUT */}
      <div className="header__search">
        <input className="header__input" type="" name="" value="" />
        <SearchIcon className="header__searchIcon" />
        <MenuIcon
          viewbox={(-5, 0, 25, 15)}
          onClick={toggleHamburgerButton}
          className={!toggle ? "hamburger__show" : "hamburger__hide"}
        />
      </div>

      {/* NAVBAR */}

      <nav className={!toggle ? "header__nav toggle" : "header__nav"}>
        <ul className={!toggle ? "header__ul" : "header__ul menu"}>
          <MenuIcon onClick={toggleHamburgerButton} className="hamburger" />

          <li className="header__option">
            <a href="/" className="header__optionLineOne">
              <span>Hello</span>
              {user ? (
                <p>{user.email.substr(0, user.email.indexOf("@"))}</p>
              ) : (
                ""
              )}
            </a>
            <Link
              onClick={handleAuthentication}
              to={!user && "/login"}
              className="header__optionLineTwo"
            >
              {user ? `Sign out` : "Sign in"}
            </Link>
          </li>
          <Link to="/orders">
            <li className="header__option">
              <a href="/" className="header__optionLineOne">
                Orders
              </a>
              <a href="/" className="header__optionLineTwo">
                History
              </a>
            </li>
          </Link>
          <li className="header__option">
            <a href="/" className="header__optionLineOne">
              Your
            </a>
            <a href="/" className="header__optionLineTwo">
              Prime
            </a>
          </li>
          <Link to="/checkout">
            <li className="header__optionBasket">
              <AddShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
