import React, { useState } from "react";

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
      <button
        className="buttonServices"
        onMouseOver={handleOverYoga}
        onMouseOut={handleOutYoga}
      >
        Ashtanga
        <br />
        Yoga
      </button>
      <button
        className="buttonServices"
        onMouseOver={handleOverCommunity}
        onMouseOut={handleOutCommunity}
      >
        Community
        <br /> Management
      </button>
    </div>
  );
}

export default Services;
