import React from "react";
import position3 from "./position3.jpg";
import "./WhatIsAshtangaYoga.css";

function WhatIsAshtangaYoga() {
  return (
    <div className="ashtangaYogaDiv">
      <img src={position3} className="fotoPosition2" />
      <div className="TextAshtanga">
        <span>Ashtanga Yoga y Ashtanga Vinyasa </span>
        <p>
          El término Ashtanga proviene de los{" "}
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
          y quiere decir{" "}
          <a
            className="hyperlinksRelatedAshtanga"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="https://ashtangasantafe.wixite.com/yogasantafe/ashtanga-8-angas"
            target="_blank"
          >
            Ocho Prácticas
          </a>{" "}
          (ashto = ocho; anga = práctica).
          <br />
          Estas ocho prácticas son las que{" "}
          <a
            className="hyperlinksRelatedAshtanga"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="https://es.m.wikipedia.org/wiki/Pata%C3%B1jali"
            target="_blank"
          >
            Patanjali
          </a>{" "}
          recomienda para habitar el estado de Yoga, en estado de unión con uno
          mismo y con el todo{" "}
          <a
            className="hyperlinksRelatedAshtanga"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="https://en.m.wikipedia.org/wiki/K._Pattabhi_Jois"
            target="_blank"
          >
            Sri Krishna Pattabhi Jois
          </a>{" "}
          fue quien desarrolló y popularizó el estilo vinyasa yoga conocido como{" "}
          <a
            className="hyperlinksRelatedAshtanga"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="https://es.m.wikipedia.org/wiki/Ashtanga_vinyasa_yoga"
            target="_blank"
          >
            Ashtanga Vinyasa Yoga
          </a>
          . El término Vinyasa significa “ir a través” o “movimiento”, y refiere
          a todos los movimientos respiratorios que se realizan entre una
          postura y la siguiente. Entonces debemos entender a Ashtanga Yoga como
          un conjunto de{" "}
          <a
            className="hyperlinksRelatedAshtanga"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="https://ashtangasantafe.wixsite.com/yogasantafe/ashtanga-8-angas"
            target="_blank"
          >
            prácticas
          </a>{" "}
          para conocernos como conciencia pura y{" "}
          <a
            className="hyperlinksRelatedAshtanga"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="https://es.m.wikipedia.org/wiki/Ashtanga_vinyasa_yoga"
            target="_blank"
          >
            Ashtanga Vinyasa
          </a>{" "}
          como una práctica de asanas (tercer anga) que, en complemento con los
          otros 7 angas, nos permite llegar a este estado.
        </p>
      </div>
    </div>
  );
}

export default WhatIsAshtangaYoga;
