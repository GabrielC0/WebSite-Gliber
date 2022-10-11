import React, { Component } from "react";
import SmartSlider from "react-smart-slider";
import { Link, Outlet } from "react-router-dom";

import "./Slider.css";

function Slider() {
  const slidesArray = [
    {
      url: require("../Pictures/PH1.JPG"),
      childrenElem: (
        <Link to={"/Realisations/PrisesDeVues_IMG"}>
          <button className="Btn-middle-1">Prises de vues</button>
        </Link>
      ),
    },
    {
      url: require("../Pictures/PH2.png"),
      childrenElem: (
        <Link to={"/Realisations/Inspection_IMG"}>
          <button className="Btn-middle-2">Inspections</button>
        </Link>
      ),
    },
    {
      url: require("../Pictures/PH3.png"),
      childrenElem: (
        <Link to={"/Realisations/Conseils_IMG"}>
          <button className="Btn-middle-3">Guide d'achat de drone</button>
        </Link>
      ),
    },
    {
      url: require("../Pictures/PH4.png"),
      childrenElem: (
        <Link to={"/Realisations/Stage_IMG"}>
          <button className="Btn-middle-4">Stage</button>
        </Link>
      ),
    },
  ];
  return (
    <div className="Slider-Body">
      <SmartSlider slides={slidesArray} buttonShape="square" />
    </div>
  );
}
export default Slider;
// autoSlide={true}
