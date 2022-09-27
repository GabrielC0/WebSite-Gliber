import { React } from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo-BG.png";

export default function Navbar() {
  return (
    <div className="Header">
      <img className="Logo" src={Logo} />
      <nav className="Nvb">
        <Link to={"/"}>
          <button className="Btn">Accueil</button>
        </Link>
        <Link to={"/Contact"}>
          <button className="Btn">Contact</button>
        </Link>
        <Link to={"/QuiSommesNous"}>
          <button className="Btn">Qui suis-je ?</button>
        </Link>
        <Link to={"/NosPrestations"}>
          <button className="Btn">Mes Préstations</button>
        </Link>
        <Link to={"/Realisations"}>
          <button className="Btn">MesRealisations</button>
        </Link>
      </nav>
    </div>
  );
}
