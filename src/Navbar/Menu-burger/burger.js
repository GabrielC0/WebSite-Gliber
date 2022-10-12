import React from "react";
import "./burger.css";
import Sidebar from "./Sidebar";

function Burger() {
  return (
    <div className="Burger" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap"></div>
    </div>
  );
}

export default Burger;
