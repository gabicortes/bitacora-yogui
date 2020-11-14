import React from "react";
import NavBar from "../UI/NavBar";
import { WhatDoesaCM } from "./WhatDoesaCM/WhatDoesaCM";
import { Portada } from "./Portada/Portada";
import { Clients } from "./Clients/clients";
import ContactMe from "../Home/ContactMe";
import Foot from "../Home/Foot";

function CommunityManager() {
  return (
    <div>
      <NavBar
        firstButton={"Mis servicios"}
        secondButton={"Clientes"}
        thirdButton={"Contacto"}
        opacity={0.95}
      />
      <Portada />
      <WhatDoesaCM />
      <Clients />
      <ContactMe />
      <Foot />
    </div>
  );
}

export default CommunityManager;
