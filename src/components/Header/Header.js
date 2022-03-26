import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header m-4 p-3 shadow rounded text-center">
      <h1>
        <span style={{ color: "orange" }}>DRONE BK-40 </span>TERRA
      </h1>
      <h2 className="text-danger fw-bold">Choose 4 Drones</h2>
    </div>
  );
};

export default Header;
