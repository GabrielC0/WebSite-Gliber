import React from "react";
import "./Styles.css";

import img1 from "../Pictures/IMG.png";

function Conseils_IMG (){
    return(
        <div className="Global_IMG">

            <h1>Guide d'achat de Drone</h1>
            
            <div className="IMG">
                <img src={img1}/>  
                <img src={img1}/>  
                <img src={img1}/>  
            </div>

        </div>
    );

}
export default Conseils_IMG;