import React, { useRef } from "react";
import NavBar from "../UI/NavBar";
import Slogan from "./Slogan";
import MartuPresentation from "./MartuPresentation";
import Services from "./Services";
import ContactMe from "./ContactMe";
import Foot from "./Foot";

function Home() {
  const servicesRef = useRef(null);
  const sobreMiRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <NavBar
        firstButton={"Sobre Mi"}
        firstSectionRef={sobreMiRef}
        secondButton={"Mis servicios"}
        secondSectionRef={servicesRef}
        thirdButton={"Contacto"}
        thirdSectionRef={contactRef}
      />
      <Slogan />
      <div ref={sobreMiRef}>
        <MartuPresentation />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>
      <Foot />
    </div>
  );
}

export default Home;
