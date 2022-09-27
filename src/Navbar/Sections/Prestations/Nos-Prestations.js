import React from "react";
import {Link,Outlet} from "react-router-dom";
import "./NosPrestations.css";

import IMG1 from "../Prestations/IMG/PH1.JPG";
import IMG2 from "../Prestations/IMG/PH2.png";
import IMG3 from "../Prestations/IMG/PH3.png";
import IMG4 from "../Prestations/IMG/PH4.png";


function NosPrestations(){
    return(
        <div>

            <div style={{height:50}}></div> 
            <h1>Nos Prestations</h1> 

            <div className='Nd-Menu'>  

                <div className="Contents-Img">
                    <div>
                        <img src={IMG1} className="Img"/>
                    </div>

                    <div>
                        <img src={IMG2} className="Img"/>
                    </div>

                    <div>
                        <img src={IMG3} className="Img"/>
                    </div>

                    <div>
                        <img src={IMG4} className="Img"/>
                    </div>
                </div>


                <nav className="Nvb-nd">
                    <Link to={"/NosPrestations/PrisesDeVues"}><button className='Btn-nd'>Prises de vues</button></Link>
                    <Link to={"/NosPrestations/Inspections"}><button className='Btn-nd'>Inspections</button></Link>
                    <Link to={"/NosPrestations/Conseils"}><button className='Btn-nd'>Guide d'achat de Drone</button></Link>
                    <Link to={"/NosPrestations/Stage"}><button className='Btn-nd'>Formation</button></Link>
                </nav>
            </div>

            <Outlet/>

        </div>
    );

}
export default NosPrestations;