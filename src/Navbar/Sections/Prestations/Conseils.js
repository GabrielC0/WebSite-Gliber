import React from "react";
import "./NosPrestations.css";
import IMG3 from "../Prestations/IMG/PH3.png";

function Conseils(){
    
    return(
        <div className="Contents">        
            <div style={{height:50}}></div>

            <h1>Guide d'achat de Drone</h1>

            <div className="Desc">
                <img src={IMG3} className="Img"/>

                <div className="Txt">
                    <h2>Quel type de drone recherchez vous ?</h2>
                    <h2>
                        Acheter un drone demande beaucoup de réflexions.  
                        Chez GLIBER, nous vous proposons nos services afin de trouver le drone dont 
                        avez besoin, que ce soit pour les professionnels ou les particuliers.
                        Commencez par nous contacter en nous donnant toutes les informations sur vos critéres d'achats
                        et nous reviendrons dans les plus braves delais avec une ou plusieurs propositions d'achat de 
                        drone au juste prix. De plus nous faisons toutes les démarches administratives à votre place.
                    </h2>
                </div>
            </div>

        </div>
    );

}
export default Conseils;