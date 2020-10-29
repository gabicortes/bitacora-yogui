import React from "react";
import logo from "./logo.png";

const scrollToRef = (ref) =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 100,
    behavior: "smooth",
  });

function NavBar(props) {
  function handleClickServices() {
    scrollToRef(props.servicesRef);
  }

  function handleClickSobreMi() {
    scrollToRef(props.sobreMiRef);
  }

  function handleClickContact() {
    scrollToRef(props.contactRef);
  }

  return (
    <div id="navbar" className="navBarDiv">
      <img className="logoImage" src={logo} alt="logo" />
      <div className="buttonsNavBar">
        <span className="buttonNavBar" onClick={handleClickSobreMi}>
          {props.firstButton}
        </span>
        <span className="buttonNavBar" onClick={handleClickServices}>
          {props.secondButton}
        </span>
        <span className="buttonNavBar" onClick={handleClickContact}>
          {props.thirdButton}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
