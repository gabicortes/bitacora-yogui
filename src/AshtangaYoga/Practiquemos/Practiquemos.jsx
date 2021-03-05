import React, { Fragment } from "react";
import "./Practiquemos.css";
import { SiGooglemaps } from "react-icons/si";

function Practiquemos() {
  return (
    <div className="divPractiquemos">
      <p className="practiquemosTitle">🧘🏻‍♀️ ¡Practiquemos! 🧘🏻‍♂️</p>
      <Fragment>
        <div className="timetable">
          <span className="horarioClase">Miércoles</span>
          <span className="horarioClase">7 PM</span>
          <span>Vinyasa Flow</span>
        </div>
        <hr />
        <div className="timetable timetable2">
          <span className="horarioClase">Martes & Jueves</span>
          <span className="horarioClase">7 PM</span>
          <span>Ashtanga Yoga</span>
        </div>
      </Fragment>
      <div>
        <div className="directionBolivar">
          <div> Te espero en Av. Bolívar 535 </div>
          <a
            className="iconGoogleMaps"
            target="_blank"
            href="https://www.google.com/maps/place/Av.+Sim%C3%B3n+Bol%C3%ADvar+535,+Tandil,+Provincia+de+Buenos+Aires,+Argentina/@-37.3378026,-59.1250704,17z/data=!3m1!4b1!4m5!3m4!1s0x95911fc8a03e1c4d:0x622aa5ed12da40cc!8m2!3d-37.3378026!4d-59.1228817"
          >
            <SiGooglemaps />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Practiquemos;
