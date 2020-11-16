import React from "react";
import position2 from "./position2.jpg";
import "./WhatIsYoga.css";

function WhatIsYoga() {
  return (
    <div className="queEsElYoga">
      <div className="queEsElYogaTexto">
        <span> Qué es el Yoga?</span>
        <p>
          Practicar Yoga es intentar ubicar una pausa en nuestro habitual
          accionar, de forma de ponerse en contacto con el sentir de ese
          momento, aprendiendo a escuchar nuestras sensaciones y emociones.
          Mientras practicamos Yoga, intentamos dejar de lado nuestros
          pensamientos, conceptos del mundo, nuestros proyectos y
          preocupaciones.
          <br />
          Es a través de postura, respiración y presencia que producimos
          espacio, la percepción de un silencio en nuestro interior en donde las
          sensaciones se manifiestan. Este es un alimento necesario para el
          cuerpo y la mente, sustrato fértil para recomponer nuestras
          fragmentadas vidas.
          <br />
          La palabra Yoga (YUG en sánscrito) significa Unión: nos enseña a
          ponernos en contacto con nosotros mismos, a través del cuerpo y de la
          respiración. En los{" "}
          <a
            className="hyperlinksRelatedAshtanga"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="https://es.m.wikipedia.org/wiki/Yoga_sutra"
            target="_blank"
          >
            Yoga Sutras
          </a>{" "}
          se lo define como un estado de la mente donde las ondulaciones se
          aquietan, la mente se calma, se aclara y se concentra: estado donde no
          nos distraemos con sus habituales movimientos involuntarios. El
          Budismo llama a este estado “la mente natural”, la conciencia libre de
          preconceptos, omnipresente.
        </p>
      </div>
      <img className="fotoPosition2" src={position2} alt="fotoposition1" />
    </div>
  );
}

export default WhatIsYoga;
