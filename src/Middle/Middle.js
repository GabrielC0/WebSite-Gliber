import React from "react";
import "./Middle.css";
import Logo from "../Navbar/Logo-BG.png";

import Slider from "./Slider/Slider";

function Middle() {
  return (
    <div className="Global-middle">
      {/* <img className="Logo-menu" src={Logo} /> */}

      <Slider/>
    </div>
  );
}
export default Middle;
