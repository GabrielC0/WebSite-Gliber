import React from "react";
import IMG2 from "../Prestations/IMG/PH2.png";

import "./MesPrestations.css";

function Inspections(){
    return(
        <div className="Contents">        
        <div style={{height:50}}></div>

        <h1>Inspection de toiture/d'ouvrage en hauteur</h1>

        <div className="Desc">

            <img src={IMG2} className="Img"/>

            <div className="Txt">
                <h2>À quoi sert l'inspection de toiture par drone ?</h2>
                <p>Les aéronefs télépilotés sont de plus en plus sollicités 
                    pour accomplir des travaux autrefois jugés trop risqués voire impossibles.
                    L’inspection par drone est idéale pour la reconnaissance de zones difficilement accessibles, 
                    notamment la détection de pathologie (infiltration, casse, affaissement…) des éléments 
                    constitutifs des bâtiments (toiture, cheminée, façade…) et autres équipements.
                    Qu’il s’agisse de maison individuelle, immeuble ou de site industriel, 
                    cette technique vise à repérer et analyser les défauts d’une structure.
                    Nous inspectons également diverses installations techniques, 
                    telle que les panneaux photovoltaïques.

                </p>
            </div>
        </div>

    </div>
    );

}
export default Inspections;