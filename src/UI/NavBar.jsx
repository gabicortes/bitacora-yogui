import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import "./NavBar.css";

function NavBar(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function triggerHamburgerMenu() {
    setMenuIsOpen((prevValue) => !prevValue);
  }

  let menu;

  if (menuIsOpen) {
    menu = (
      <div className="burgerMenu">
        <span className="buttonBurgerNavBar">{props.firstButton}</span>
        <span className="buttonBurgerNavBar">{props.secondButton}</span>
      </div>
    );
  }

  return (
    <div id="navbar" className="navBarDiv" style={{ opacity: props.opacity }}>
      <Link to="/">
        <img className="logoImage" src={logo} alt="logo" />
      </Link>

      <div className="buttonsNavBar">
        <Link to={props.firstButtonLink} className="buttonNavBar">
          {props.firstButtonText}
        </Link>
        <Link to={props.secondButtonLink} className="buttonNavBar">
          {props.secondButtonText}
        </Link>
      </div>
      <TiThMenu className="burgerMenuButton" onClick={triggerHamburgerMenu} />
      {menu}
    </div>
  );
}

export default NavBar;
