import React from "react";
import "./Practiquemos.css";

function Practiquemos() {
  return (
    <div className="divPractiquemos">
      <p className="practiquemosTitle">🧘🏻‍♀️ ¡Practiquemos! 🧘🏻‍♂️</p>
      <div className="timetable">
        <span>MARTES & JUEVES</span>
        <span>8:00 AM</span>
        <span>Precio</span>
      </div>
      <hr />
      <div className="timetable timetable2">
        <span>LUNES a VIERNES</span>
        <span>6:30 PM</span>
        <span>Precio</span>
      </div>
    </div>
  );
}

export default Practiquemos;
