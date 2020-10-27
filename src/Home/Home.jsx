import React from "react";
import NavBar from "../UI/NavBar";
import Home1 from "./Home1";
import MartuPresentation from "./MartuPresentation";
import Services from "./Services";
import ContactMe from "./ContactMe";
import Foot from "./Foot";

function Home() {
  return (
    <div>
      <NavBar />
      <Home1 />
      <MartuPresentation />
      <Services />
      <ContactMe />
      <Foot />
    </div>
  );
}

export default Home;
