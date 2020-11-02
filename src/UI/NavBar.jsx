import React from "react";
import logo from "./logo.png";

const scrollToRef = (ref) =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 100,
    behavior: "smooth",
  });

function NavBar(props) {
  function handleSecondButtonClick() {
    scrollToRef(props.secondSectionRef);
  }

  function handleFirstButtonClick() {
    scrollToRef(props.firstSectionRef);
  }

  function handleThirdButtonClick() {
    scrollToRef(props.thirdSectionRef);
  }

  function handleFourthButtonClick (){
    scrollToRef(props.fourthSectionRef);
  }

  return (
    <div id="navbar" className="navBarDiv">
      <img className="logoImage" src={logo} alt="logo" />
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
    </div>
  );
}

export default NavBar;
