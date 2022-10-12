import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default (props) => {
  return (
    <Menu>
      <Link to={"/"}>
        <button className="menu-item-btn">Accueil</button>
      </Link>
      <Link to={"/Prestations"}>
        <button className="menu-item-btn">Mes préstations</button>
      </Link>
      <Link to={"/Realisations"}>
        <button className="menu-item-btn">Mes réalisations</button>
      </Link>
      <Link to={"/QuiSuisJe"}>
        <button className="menu-item-btn">Qui suis-je ?</button>
      </Link>
      <Link to={"/Contact"}>
        <button className="menu-item-btn">Contact</button>
      </Link>
    </Menu>
  );
};
