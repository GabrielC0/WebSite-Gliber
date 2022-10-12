import { React } from "react";
import "./QuiSuisJe.css";

import img1 from "./IMGS/QuiSuisJe-PHOTO1.jpg";
import img3 from "./IMGS/QuiSuisJe-PHOTO2.jpg";
import img2 from "./IMGS/QuiSuisJe-PHOTO3.jpg";
import img4 from "./IMGS/QuiSuisJe-PHOTO6.jpg";
import img5 from "./IMGS/QuiSuisJe-PHOTO8.jpg";
import img6 from "./IMGS/QuiSuisJe-PHOTO9.jpg";
import img7 from "./IMGS/QuiSuisJe-PHOTO11.jpg";

function QuiSuisJe() {
  return (
    <div className="Content">
      <h1>Qui suis-je ?</h1>

      <div className="Pictures">
        <img className="IMG1" src={img1} />
        <img className="IMG2" src={img2} />
      </div>

      <div className="Titre1">
        <h1>Gabriel CHANGRENIER</h1>
      </div>

      <div className="Middle">
        <img className="IMG3" src={img3} />
        <div className="Texte">
          <p>
            Je m'appelle Gabriel CHANGRENIER et mon expertise concerne le
            pilotages de drones, les prises de vues aériennes, mais aussi la
            conception d'application. Je suis en effet étudiant à Efrei PARIS,
            l'une des meilleures écoles d'ingénieurs spécialisée dans le
            numérique. Je suis donc actuellement étudiant en 2e année de
            bachelor Concepteur Développeur et je souhaite par la suite obtenir
            un master Developpeur Manager FULL-STACK. J'ai deux passions : la
            programmation et les drones, je serai ravi de pouvoir discuter avec
            vous sur ses sujets ;) .
          </p>
        </div>
      </div>


      <div className="Text2">
        <h1>Efrei PARIS</h1>
        <div className="Galerie">
          <img className="Galerie" src={img4} />
          <img className="Galerie" src={img5} />
          <img className="Galerie" src={img6} />
          <img className="Galerie" src={img7} />
        </div>
      </div>
    </div>
  );
}
export default QuiSuisJe;
