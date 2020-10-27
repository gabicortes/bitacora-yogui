import React from "react";
import logo from "./logo.png";

function NavBar() {
  return (
    <div className="navBarDiv">
      <img className="logoImage" src={logo} alt="logo" />
      <div className="buttonsNavBar">
        <span className="buttonNavBar"> Sobre mi </span>
        <span className="buttonNavBar"> Mis servicios </span>
        <span className="buttonNavBar"> Contacto </span>
      </div>
    </div>
  );
}

export default NavBar;
