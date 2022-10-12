import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo-BG.png";
import Burger from "./Menu-burger/burger";

export default function Navbar() {
  return (
    <div className="Header">
      <Burger />

      <nav className="Nvb">
        <img className="Logo" src={Logo} />
        <Link to={"/"}>
          <button className="Btn">Accueil</button>
        </Link>
        <Link to={"/Prestations"}>
          <button className="Btn">Mes préstations</button>
        </Link>
        <Link to={"/Realisations"}>
          <button className="Btn">Mes réalisations</button>
        </Link>
        <Link to={"/QuiSuisJe"}>
          <button className="Btn">Qui suis-je ?</button>
        </Link>
        <Link to={"/Contact"}>
          <button className="Btn">Contact</button>
        </Link>
      </nav>
    </div>
  );
}
