import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Accueil
      </a>
      <a className="menu-item" href="/Prestations">
        Prestations
      </a>
      <a className="menu-item" href="/Realisations">
        Realisations
      </a>
      <a className="menu-item" href="/QuiSuisJe">
        Qui suis-Je
      </a>
      <a className="menu-item" href="/Contact">
        Contact
      </a>
    </Menu>
  );
};
