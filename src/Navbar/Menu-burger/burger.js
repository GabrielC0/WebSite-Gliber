import React from "react";
import "./burger.css";
import Sidebar from "./Sidebar";
import Logo from "../../Navbar/Logo-BG.png";
function Burger() {
  return (
    <div className="Burger" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
    </div>
  );
}

export default Burger;
