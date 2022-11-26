import React from "react";
import "./Realisations.css";
import { Link, Outlet } from "react-router-dom";

import Video2 from "./Videos/VIDEO_1080P.mp4";
import Video1 from "./Videos/VIDEO_JET_1080P.mp4";

function Realisations() {
  return (
    <div className="Nd-Menu">
      <h1>Mes réalisations</h1>

      <div className="content">
        <video src={Video1} controls />
        {/* <video src={Video2} controls /> */}
      </div>

      <nav className="Nvb-nd">
        <Link to={"/Realisations/PrisesDeVues_IMG"}>
          <button className="Btn-C">Prises De Vues</button>
        </Link>
        <Link to={"/Realisations/Inspection_IMG"}> 
          <button className="Btn-C">Inspections</button>
        </Link>
        <Link to={"/Realisations/Conseils_IMG"}>
          <button className="Btn-C">Guide d'achat de Drone</button>
        </Link>
        <Link to={"/Realisations/Stage_IMG"}>
          <button className="Btn-C">Stage</button>
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}
export default Realisations;
