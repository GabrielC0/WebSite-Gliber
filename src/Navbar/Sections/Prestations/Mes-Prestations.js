import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MesPrestations.css";

import IMG1 from "../Prestations/IMG/PH1.JPG";
import IMG2 from "../Prestations/IMG/PH2.png";
import IMG3 from "../Prestations/IMG/PH3.png";
import IMG4 from "../Prestations/IMG/PH4.png";

function MesPrestations() {
  return (
    <div>
      <div style={{ height: 50 }}></div>
      <h1>Mes prestations</h1>

      <div className="Nd-Menu">
        <div className="Contents-Img">
          <img src={IMG1} className="Img" />

          <img src={IMG2} className="Img" />

          <img src={IMG3} className="Img" />

          <img src={IMG4} className="Img" />
        </div>

        <nav className="Nvb-nd">
          <Link to={"/Prestations/PrisesDeVues"}>
            <button className="Btn-nd1">Prises de vues</button>
          </Link>
          <Link to={"/Prestations/Inspections"}>
            <button className="Btn-nd2">Inspections</button>
          </Link>
          <Link to={"/Prestations/Conseils"}>
            <button className="Btn-nd3">Guide d'achat de Drone</button>
          </Link>
          <Link to={"/Prestations/Stage"}>
            <button className="Btn-nd4">Formation</button>
          </Link>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
export default MesPrestations;
