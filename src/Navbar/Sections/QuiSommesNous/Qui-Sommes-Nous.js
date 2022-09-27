import { React } from "react";
import LOGO from "../../Logo-BG.png";
import "./Qui-Sommes-Nous.css";

function QuiSommesNous() {
  return (
    <div className="Content">
      <h1>Qui sommes nous ?</h1>

      <div className="Titre">
        <img className="Logo" src={LOGO} />
      </div>
    </div>
  );
}
export default QuiSommesNous;
