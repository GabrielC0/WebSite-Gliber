import React from "react";
import "./Styles.css";

import img1 from "../Pictures/PH1.JPG";
import img2 from "../Pictures/PH2.jpg";
import img3 from "../Pictures/PH3.jpg";
import img4 from "../Pictures/PH4.jpg";
import img5 from "../Pictures/PH5.JPG";
import img6 from "../Pictures/PH6.jpg";

function PrisesDeVues_IMG() {
  return (
    <div className="Global_IMG">
      <h1>PrisesDeVues</h1>

      <div className="IMG">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
      </div>
    </div>
  );
}
export default PrisesDeVues_IMG;
