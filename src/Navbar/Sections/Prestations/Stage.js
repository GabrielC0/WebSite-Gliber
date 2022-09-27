import React from "react";
import "./NosPrestations.css";
import IMG4 from "../Prestations/IMG/PH4.png";


function Stage(){
    return(

        <div className="Contents">   

            <div style={{height:50}}></div>
            <h1>Formation telepilotage de drone</h1>

            <div className="Desc">

                <img src={IMG4} className="Img"/>

                <div className="Txt">

                <h2>Vous etes interresé par une formation de pilotage de drone, n'hésitez pas?</h2>

                    
                    <h2>La formation telepilotage de drone proposeé par nos services, vous permettra 
                        d’acquérir les compétences nécessaires pour pouvoir piloter votre aéronef en toutes securité 
                        et en le maîtrisant dans les scénarios S1, S2 et S3.
                        Avec ou sans votre drone drone, GLIBER vous propose d'acquérir des compétences en matiére 
                        de télépilotage et de les ameliorer.
                        
                    </h2>

                </div>
            </div>

        </div>
    );

}
export default Stage;