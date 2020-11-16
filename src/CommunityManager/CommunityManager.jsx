import React, { useRef } from "react";
import NavBar from "../UI/NavBar";
import { WhatDoesaCM } from "./WhatDoesaCM/WhatDoesaCM";
import { Portada } from "./Portada/Portada";
import { Clients } from "./Clients/clients";
import ContactMe from "../Home/ContactMe";
import Foot from "../Home/Foot";

function CommunityManager() {
  const whatDoesaCMRef = useRef(null);
  const clientsRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <div>
      <NavBar
        firstButton={"Mis servicios"}
        firstSectionRef={whatDoesaCMRef}
        secondButton={"Clientes"}
        secondSectionRef={clientsRef}
        thirdButton={"Contacto"}
        thirdSectionRef={contactMeRef}
        opacity={0.95}
      />
      <Portada />
      <div ref={whatDoesaCMRef}>
        <WhatDoesaCM />
      </div>
      <div ref={clientsRef}>
        <Clients />
      </div>
      <div ref={contactMeRef}>
        <ContactMe />
      </div>
      <Foot />
    </div>
  );
}

export default CommunityManager;
