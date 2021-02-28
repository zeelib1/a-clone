import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import './Hamburger.css'

function Hamburger() {
  const [toggle, setToggle] = useState(true);

  return (
    <div classname="hamburger"
      onClick={() => {
        setToggle(false);
      }}
    >
      <MenuIcon />
    </div>
  );
}

export default Hamburger;
