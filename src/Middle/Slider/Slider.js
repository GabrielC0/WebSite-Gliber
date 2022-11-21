import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import img1 from "../Pictures/PH1.JPG";
import img2 from "../Pictures/PH2.png";
import img3 from "../Pictures/PH3.png";
import img4 from "../Pictures/PH4.png";

import "./Slider.css";

class Slider extends Component {
  render() {
    return (
      <div className="Carousel">
        <Carousel autoFocus infiniteLoop autoPlay>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
        </Carousel>

        <div className="middle-content">
          <div className="Btn-smarthP">
            <Link to={"/Realisations/PrisesDeVues_IMG"}>
              <button className="Btn-s">Prises de vues</button>
            </Link>
            <Link to={"/Realisations/Inspection_IMG"}>
              <button className="Btn-s">Inspection</button>
            </Link>
            <Link to={"/Realisations/Conseils_IMG"}>
              <button className="Btn-s">Conseils</button>
            </Link>
            <Link to={"/Realisations/Stage_IMG"}>
              <button className="Btn-s">Stage</button>
            </Link>
          </div>
        </div>


      </div>
    );
  }
}
export default Slider;
