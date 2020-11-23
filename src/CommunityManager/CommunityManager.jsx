import React, { useRef } from "react";
import NavBar from "../UI/NavBar";
import { WhatDoesaCM } from "./WhatDoesaCM/WhatDoesaCM";
import { Portada } from "./Portada/Portada";
import { Clients } from "./Clients/clients";
import ContactMe from "../Home/ContactMe/ContactMe";
import Foot from "../Home/Foot/Foot";

function CommunityManager() {
  return (
    <div>
      <NavBar
        firstButtonText={"Home"}
        firstButtonLink={"./"}
        secondButtonText={"Ashtanga Yoga"}
        secondButtonLink={"./ashtangayoga"}
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
