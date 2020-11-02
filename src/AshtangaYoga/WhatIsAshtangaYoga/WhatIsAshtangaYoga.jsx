import React from "react";
import position3 from "./position3.jpg";
import "./WhatIsAshtangaYoga.css";

function WhatIsAshtangaYoga() {
  return (
    <div className="ashtangaYogaDiv">
      <img src={position3} className="fotoPosition2" />
      <div className="TextAshtanga">
        <span> Qué es Ashtanga Yoga?</span>
        <p>
          Es un conjunto de prácticas (8 angas) para conocernos como conciencia
          pura y conectarnos con nuestro estado más elevado. Para esto utilizamos
          tres prácticas que deben ser constantes:
          <br /> 1. Respiración (ujjayi): contraemos suavemente la glotis
          (pequeño músculo a la altura de la tráquea) que provoca una
          respiración sonora, lenta y regular. Con su sonido, calmamos nuestra
          mente y nos relajamos
          <br /> 2. Activación de contracciones sutiles en tres delicadas
          estructuras corporales (bandhas): controlamos la energía aumentando
          nuestra concentración en simultáneo
          <br />
          3. Quietud de la mirada durante los movimientos y en las posturas
          (Dhristis): focalizamos la mirada toda la duración de la postura
          potenciando la concentración, tonificamos los músculos oculares y nos
          conduce a la meditación.
        </p>
      </div>
    </div>
  );
}

export default WhatIsAshtangaYoga;
