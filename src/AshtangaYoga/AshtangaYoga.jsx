import React, { useRef, Fragment } from "react";
import WhatIsYoga from "./WhatIsYoga/WhatIsYoga";
import WhatIsAshtangaYoga from "./WhatIsAshtangaYoga/WhatIsAshtangaYoga";
import Practiquemos from "./Practiquemos/Practiquemos";
import StudentsCarrousel from "./StudentsCarousel/StudentsCarrousel";
import NavBar from "../UI/NavBar";
import ContactMe from "../Home/ContactMe/ContactMe";
import Foot from "../Home/Foot/Foot";

function AshtangaYoga() {
  return (
    <Fragment>
      <NavBar
        firstButtonText={"Home"}
        firstButtonLink={"/"}
        secondButtonText={"Community Manager"}
        secondButtonLink={"/communitymanager"}
      />
      <WhatIsYoga />
      <WhatIsAshtangaYoga />
      <Practiquemos />
      <StudentsCarrousel />
      <ContactMe />
      <Foot />
    </Fragment>
  );
}

export default AshtangaYoga;
