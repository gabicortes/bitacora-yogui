import React from "react";
import NavBar from "../UI/NavBar";
import { Portada } from "./Portada/Portada";

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
    </div>
  );
}

export default CommunityManager;
