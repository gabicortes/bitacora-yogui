import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import "./NavBar.css";

const scrollToRef = (ref) =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 100,
    behavior: "smooth",
  });

function NavBar(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleFirstButtonClick() {
    scrollToRef(props.firstSectionRef);
    setMenuIsOpen(false);
  }
  function handleSecondButtonClick() {
    scrollToRef(props.secondSectionRef);
    setMenuIsOpen(false);
  }

  function handleThirdButtonClick() {
    scrollToRef(props.thirdSectionRef);
    setMenuIsOpen(false);
  }

  function handleFourthButtonClick() {
    scrollToRef(props.fourthSectionRef);
    setMenuIsOpen(false);
  }

  function triggerHamburgerMenu() {
    setMenuIsOpen((prevValue) => !prevValue);
  }

  let menu;

  if (menuIsOpen) {
    menu = (
      <div className="burgerMenu">
        <span className="buttonBurgerNavBar" onClick={handleFirstButtonClick}>
          {props.firstButton}
        </span>
        <span className="buttonBurgerNavBar" onClick={handleSecondButtonClick}>
          {props.secondButton}
        </span>
        <span className="buttonBurgerNavBar" onClick={handleThirdButtonClick}>
          {props.thirdButton}
        </span>
        {props.fourthButton && (
          <span
            className="buttonBurgerNavBar"
            onClick={handleFourthButtonClick}
          >
            {props.fourthButton}
          </span>
        )}
      </div>
    );
  }

  return (
    <div id="navbar" className="navBarDiv" style={{ opacity: props.opacity }}>
      <Link to="./">
        <img className="logoImage" src={logo} alt="logo" />
      </Link>
      <div className="buttonsNavBar">
        <span className="buttonNavBar" onClick={handleFirstButtonClick}>
          {props.firstButton}
        </span>
        <span className="buttonNavBar" onClick={handleSecondButtonClick}>
          {props.secondButton}
        </span>
        <span className="buttonNavBar" onClick={handleThirdButtonClick}>
          {props.thirdButton}
        </span>
        <span className="buttonNavBar" onClick={handleFourthButtonClick}>
          {props.fourthButton}
        </span>
      </div>
      <TiThMenu className="burgerMenuButton" onClick={triggerHamburgerMenu} />
      {menu}
    </div>
  );
}

export default NavBar;
