import React from "react";
import position2 from "./position2.jpg";
import "./WhatIsYoga.css";

function WhatIsYoga() {
  return (
    <div className="queEsElYoga">
      <div className="queEsElYogaTexto">
        <span> Qué es el Yoga?</span>
        <p>
          La palabra Yoga (YUG en sánscrito) significa Unión: nos enseña a
          ponernos en contacto con nosotros mismos, a través del cuerpo y de la
          respiración. <br />
          Mientras practicamos Yoga, intentamos dejar de lado nuestros
          pensamientos, conceptos del mundo, nuestros proyectos y
          preocupaciones. Es a través de postura, respiración y Presencia que
          producimos espacio, la percepción de un silencio en nuestro interior
          en donde las sensaciones se manifiestan. El silencio interior es un
          alimento necesario para el cuerpo y la mente, sustrato fértil para
          recomponer nuestras fragmentadas vidas. Muchas zonas del cuerpo, como
          articulaciones, músculos y hasta órganos internos, quedan sin
          movimientos, sin energía, sin vida. La práctica de posturas abre y
          regenera los movimientos perdidos. Este despertar evoca la
          reactivación de las zonas mentales y emocionales que estaban
          desactivadas, como la alegría, positividad, vitalidad. Creamos un
          círculo de sentido contrario y el cuerpo se acostumbrara a funcionar
          con la calma y la relajación.
        </p>
      </div>
      <img className="fotoPosition2" src={position2} alt="fotoposition1" />
    </div>
  );
}

export default WhatIsYoga;
