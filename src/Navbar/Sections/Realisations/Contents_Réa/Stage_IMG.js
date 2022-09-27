import React from "react";
import "./Styles.css";
import img1 from "../Pictures/IMG.png";


function Stage_IMG (){
    return(
        <div className="Global_IMG">

            <h1>Stage</h1>
            
            <div className="IMG">
                <img src={img1}/>  
                <img src={img1}/>  
                <img src={img1}/>  
            </div>

        </div>
    );

}
export default Stage_IMG;