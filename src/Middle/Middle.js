import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Middle.css";

import img1 from "./Pictures/PH1.JPG";
import img2 from "./Pictures/PH2.png";
import img3 from "./Pictures/PH3.png";
import img4 from "./Pictures/PH4.png";

function Middle() {
  return (
    <div className="Global-middle">
      <nav className="Nvb-nd">
        <Link to={"/Realisations/PrisesDeVues_IMG"}>
          <button className="Btn-middle-1">Prises de vues</button>
        </Link>
        <Link to={"/Realisations/Inspection_IMG"}>
          <button className="Btn-middle-2">Inspections</button>
        </Link>
        <Link to={"/Realisations/Conseils_IMG"}>
          <button className="Btn-middle-3">Guide d'achat de drone</button>
        </Link>
        <Link to={"/Realisations/Stage_IMG"}>
          <button className="Btn-middle-4">Stage</button>
        </Link>
      </nav>

      <div className="Top-div">
        <img src={img1} />
        <img src={img2} />
      </div>

      <div className="Bottom-div">
        <img src={img3} />
        <img src={img4} />
      </div>
    </div>
  );
}
export default Middle;
