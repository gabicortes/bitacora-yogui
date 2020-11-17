import React from "react";
import martuyoga from "./martuyoga.png";
import "./MartuPresentation.css";

function MartuPresentation() {
  return (
    <div className="PresentationDiv">
      <img className="fotoMartu" src={martuyoga} alt="fotoMartu" />
      <p className="MartuWhoIsShe">
        <span className="holaSoyMartu">¡Hola! Soy Martu. </span>
        <span>
          Hace algunos años conocí la práctica de Yoga y me sumergí en su
          filosofía.
          <br />
          Al día de hoy, soy practicante y profesora certificada de Ashtanga
          Vinyasa Yoga/RYT 500hs YAI. Profundicé mi práctica con Maestros
          Certificados KPAYI (Mysore, India). Kino MacGregor, Ramiro Ventura y
          María di Masso son algunos de ellos.
          <br />
          <br />
          La práctica me permitió conocer a muchos seres maravillosos, y entre
          ellos, a toda la familia luleå Mindful. Leo, fundador de la empresa,
          vio en mí algo que hasta ese día yo no había visto: una gran capacidad
          para crear comunidades y comunicar. Allí nace una nueva Martu: como
          Community Manager. Este mundo que se abrió me llenó de oportunidades.
          Recuerdo una de mis primeras sesiones (allá por el 2016) con mi
          astróloga donde charlábamos sobre mi pasión y profesión en mi carta
          natal. ¿Adivinen que? "Lo tuyo es la comunicación, la mediación".
          <br />
          <br />
          Acá estoy, COMUNICANDO y contándoles un poco de mi. A través de redes,
          a través de yoga, siempre comunicando.
          <br />
          <br />
          ¡Gracias por leerme!
        </span>
      </p>
    </div>
  );
}

export default MartuPresentation;
