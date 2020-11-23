import React, { useRef, Fragment } from "react";
import NavBar from "../UI/NavBar";
import Slogan from "./Slogan/Slogan";
import MartuPresentation from "./MartuPresentation/MartuPresentation";
import Services from "./Services/Services";
import { InstagramPhotos } from "./InstagramPhotos/InstagramPhotos";
import ContactMe from "./ContactMe/ContactMe";
import Foot from "./Foot/Foot";

function Home() {
  return (
    <Fragment>
      <NavBar
        firstButtonText={"Ashtanga Yoga"}
        firstButtonLink={"/ashtangayoga"}
        secondButtonText={"Community Manager"}
        secondButtonLink={"/communitymanager"}
      />
      <Slogan />
      <MartuPresentation />
      <Services />
      <InstagramPhotos />
      <ContactMe />

      <Foot />
    </Fragment>
  );
}

export default Home;
