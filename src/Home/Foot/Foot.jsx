import React from "react";
import { FaCat } from "react-icons/fa";
import "./Foot.css";

function Foot() {
  const year = new Date().getFullYear();

  return (
    <div className="codedBy">
      {year} Coded by Kittyscripts <FaCat />
    </div>
  );
}

export default Foot;
