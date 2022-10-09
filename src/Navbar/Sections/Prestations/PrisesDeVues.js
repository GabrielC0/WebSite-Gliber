import {React,Text} from "react";
import "./MesPrestations.css";
import IMG1 from "../Prestations/IMG/PH1.JPG";


function PrisesDeVues(){
    return(

        <div className="Contents">        
            <div style={{height:25}}></div>

            <h1>Prises de vues photo/vidéo aérienne par drone</h1>

            <div className="Desc">
                
            
                <img src={IMG1} className="Img"/>


                <div className="Txt">

                    <h2>
                        Chez GLIBER nous vous aroposons de capturer tout vos moments importants professionel ou personel : 
                        (Suivis de chantiers, photos de mariage, vue du ciel de tout vos biens immobilier...)
                
                        Quelle soit technique ou artistique la prise de vues aériennes par drone 
                        présente plusieurs avantages :
                        1) L'économie :
                        Plus de 10 fois moins cher que les solutions traditionnelles (hélicoptère, échafaudage, grue, nacelle ...).
                        2) La rapidité :
                        Mise en œuvre ultra-rapide, moins de 10min. pour déployer le système.
                        3) La Précision & la Maniabilité :
                        Permet accéder partout et de façon très précise.
                        4) Spectaculaire :
                        Images hors du commun, angles inédits.
                        5) Le Respect de l'environnement :
                        Silencieux et sans émission de CO2.
                    </h2>

                </div>
            </div>

        </div>
    );

}
export default PrisesDeVues;