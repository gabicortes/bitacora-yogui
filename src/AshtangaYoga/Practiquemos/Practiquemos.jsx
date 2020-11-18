import React from "react";
import "./Practiquemos.css";
import { SiGooglemaps } from "react-icons/si";

function Practiquemos() {
  return (
    <div className="divPractiquemos">
      <p className="practiquemosTitle">🧘🏻‍♀️ ¡Practiquemos! 🧘🏻‍♂️</p>
      <div className="timetable">
        <span className="horarioClase">Martes & Jueves</span>
        <span className="horarioClase">8:00 AM</span>
        <span>
          {" "}
          Nos vemos en
          <a
            className="iconGoogleMaps"
            href="https://www.google.com/maps/place/Av.+Sim%C3%B3n+Bol%C3%ADvar+535,+Tandil,+Provincia+de+Buenos+Aires,+Argentina/@-37.3378026,-59.1250704,17z/data=!3m1!4b1!4m5!3m4!1s0x95911fc8a03e1c4d:0x622aa5ed12da40cc!8m2!3d-37.3378026!4d-59.1228817"
            target="_blank"
          >
            <SiGooglemaps />
          </a>
        </span>
      </div>
      <hr />
      <div className="timetable timetable2">
        <span className="horarioClase">Lunes a Viernes</span>
        <span className="horarioClase">6:30 PM</span>
        <span>
          Nos vemos en
          <a
            className="iconGoogleMaps"
            target="_blank"
            href="https://www.google.com/maps/place/Av.+Sim%C3%B3n+Bol%C3%ADvar+535,+Tandil,+Provincia+de+Buenos+Aires,+Argentina/@-37.3378026,-59.1250704,17z/data=!3m1!4b1!4m5!3m4!1s0x95911fc8a03e1c4d:0x622aa5ed12da40cc!8m2!3d-37.3378026!4d-59.1228817"
          >
            <SiGooglemaps />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Practiquemos;
