import React from "react";
import "./WhatDoesaCM.css";
import { FaCalendarCheck, FaTools } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

function WhatDoesaCM() {
  return (
    <div>
      <p className="yoComoComunityHagoEsto">
        Como Community Manager mi trabajo es.... Proin sodales magna vitae neque
        feugiat hendrerit. Proin non eros et enim ullamcorper auctor at et
        justo. Sed quis condimentum felis. Aliquam pharetra, diam quis gravida
        pulvinar, lorem ante viverra velit, eget tempor nibh lectus quis turpis.
        Morbi in ullamcorper sapien, a tincidunt nibh. Donec imperdiet molestie
        mattis. Ut et feugiat dui, ut sodales orci. Pellentesque varius a velit
        et elementum. Curabitur a lectus in purus sollicitudin ultricies et a
        orci. Vivamus vehicula libero sodales ante tincidunt suscipit a sit amet
        justo. Etiam nulla tellus, fringilla et rutrum quis, ornare nec nibh.
        Morbi aliquet justo justo, sit amet blandit elit posuere sed. Te invito
        a descargar mi planning de contenidos de manera gratuita haciendo click
        aqui.
      </p>
      <div className="martuServices">
        <div className="planSocialMedia">
          <span className="spanLeft">
            <FaCalendarCheck />
          </span>
          <span className="spanRight">
            <span className="spanTitulo">PLAN DE SOCIAL MEDIA</span>
            <span className="spanExplanation">Explicacion</span>
          </span>
        </div>
        <div className="gestionRedesSociales">
          <span className="spanLeft">
            <MdPhoneIphone />
          </span>
          <span className="spanRight">
            <span className="spanTitulo">GESTION DE REDES SOCIALES</span>
            <span className="spanExplanation">Explicacion</span>
          </span>
        </div>
        <div className="asesoramientosPersonalizados">
          <span className="spanLeft">
            <FaTools />
          </span>
          <span className="spanRight">
            <span className="spanTitulo">ASESORAMIENTOS PERSONALIZADOS</span>
            <span className="spanExplanation">Explicacion</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export { WhatDoesaCM };
