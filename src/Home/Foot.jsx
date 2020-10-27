import React from "react";
import { FaCat } from "react-icons/fa";

function Foot() {
  const year = new Date().getFullYear();

  return (
    <div className="codedBy">
      {year} Coded by Gabi Cortés <FaCat />
    </div>
  );
}

export default Foot;
