import React from "react";
import "./Portada.css";
import { Wave } from "react-animated-text";

function Portada() {
  return (
    <div className="divQueEsCommunity">
      <div className="textCenter">
        <Wave
          className="comunique"
          text="¡COMUNIQUÉMONOS!"
          speed="6"
          iterations={2}
        />
      </div>
    </div>
  );
}

export { Portada };
