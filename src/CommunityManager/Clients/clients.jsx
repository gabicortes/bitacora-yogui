import React from "react";
import "./clients.css";
import hexagon from "./hexagon.png";
import luleaLogo from "./luleaLogo.png";
import yesicaOtero from "./yesicaOtero.jpeg";
import karinaSauroLogo from "./karinaSauroLogo.jpeg";

function Clients() {
  return (
    <div className="clientsDiv">
      <span className="titleMisClientes">Mis clientes</span>
      <div className="divImg">
        <a
          className="container container1"
          href="https://luleamindful.com/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <img className="foto1 hexagonImg" src={hexagon} />
          <div className="clientName">
            <img className="logoClientes" src={luleaLogo} />
          </div>
        </a>
        <a
          className="container container2"
          href="https://instagram.com/yessioteropeluqueria?igshid=1qkjalu4i4jb4"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <img className="foto2 hexagonImg" src={hexagon} />
          <div className="clientName">
            <img className="logoClientes" src={yesicaOtero} />
          </div>
        </a>
        <a
          className="container container3"
          href="https://www.fluiryoga.com/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <img className="foto3 hexagonImg" src={hexagon} />
          <div className="clientName">
            <img className="logoKarina" src={karinaSauroLogo} />
          </div>
        </a>
      </div>
    </div>
  );
}

export { Clients };
