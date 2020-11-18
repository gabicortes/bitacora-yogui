import React, { useRef, Fragment } from "react";
import NavBar from "../UI/NavBar";
import Slogan from "./Slogan/Slogan";
import MartuPresentation from "./MartuPresentation/MartuPresentation";
import Services from "./Services/Services";
import ContactMe from "./ContactMe/ContactMe";
import Foot from "./Foot/Foot";

function Home() {
  const servicesRef = useRef(null);
  const sobreMiRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Home;
