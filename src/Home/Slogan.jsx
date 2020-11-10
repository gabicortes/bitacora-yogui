import React from "react";
import zorro from "./zorro.png";

function Slogan() {
  return (
    <div className="home1Div">
      <p className="slogan">
        Cultivando una
        <br />
        comunicación
        <br />
        responsable.
      </p>
      <img className="foxImage" src={zorro} alt="zorro-photo" />
    </div>
  );
}

export default Slogan;
