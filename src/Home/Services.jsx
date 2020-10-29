import React, { useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const [backgroundType, setBackgroundType] = useState("none");

  function handleOverYoga() {
    setBackgroundType("yogaService");
  }

  function handleOutYoga() {
    setBackgroundType("none");
  }

  function handleOverCommunity() {
    setBackgroundType("communityService");
  }

  function handleOutCommunity() {
    setBackgroundType("none");
  }

  return (
    <div className={`divServices ${backgroundType}`}>
      <Link to="/ashtangayoga">
        <button
          className="buttonServices buttonAshtanga"
          onMouseOver={handleOverYoga}
          onMouseOut={handleOutYoga}
        >
          Ashtanga
          <br />
          Yoga
        </button>
      </Link>
      <Link to="/communitymanager">
        <button
          className="buttonServices buttonCommunity"
          onMouseOver={handleOverCommunity}
          onMouseOut={handleOutCommunity}
        >
          Community
          <br /> Management
        </button>
      </Link>
    </div>
  );
}

export default Services;
