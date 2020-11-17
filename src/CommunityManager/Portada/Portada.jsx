import React from "react";
import "./Portada.css";
import foto1 from "./foto3bis.jpg";
import { Wave } from "react-animated-text";

function Portada() {
  return (
    <div className="divQueEsCommunity">
      <img src={foto1} className="imagenFondo" />
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
