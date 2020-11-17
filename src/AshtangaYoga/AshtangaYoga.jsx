import React, { useRef } from "react";
import WhatIsYoga from "./WhatIsYoga/WhatIsYoga";
import WhatIsAshtangaYoga from "./WhatIsAshtangaYoga/WhatIsAshtangaYoga";
import Practiquemos from "./Practiquemos/Practiquemos";
import StudentsCarrousel from "./StudentsCarousel/StudentsCarrousel";
import NavBar from "../UI/NavBar";
import ContactMe from "../Home/ContactMe/ContactMe";
import Foot from "../Home/Foot/Foot";

function AshtangaYoga() {
  const whatIsAshtangaRef = useRef(null);
  const horariosRef = useRef(null);
  const alumnosRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <NavBar
        firstButton={"Qué es Ashtanga Yoga"}
        firstSectionRef={whatIsAshtangaRef}
        secondButton={"Horarios"}
        secondSectionRef={horariosRef}
        thirdButton={"Alumnos"}
        thirdSectionRef={alumnosRef}
        fourthButton={"Contacto"}
        fourthSectionRef={contactRef}
      />
      <WhatIsYoga />
      <div ref={whatIsAshtangaRef}>
        <WhatIsAshtangaYoga />
      </div>
      <div ref={horariosRef}>
        <Practiquemos />
      </div>
      <div ref={alumnosRef}>
        <StudentsCarrousel />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>

      <Foot />
    </div>
  );
}

export default AshtangaYoga;
