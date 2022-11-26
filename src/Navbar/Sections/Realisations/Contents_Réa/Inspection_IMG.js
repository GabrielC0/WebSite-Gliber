import React from "react";
import "./Styles.css";

import img3 from "../Pictures/PH7.JPG";
import img4 from "../Pictures/PH8.JPG";
import img1 from "../Pictures/PH9.jpg";
import img2 from "../Pictures/PH10.JPG";

function Inspection_IMG() {
  return (
    <div className="Global_IMG">
      <h1>Inspection</h1>

      <div className="IMG">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
      </div>
    </div>
  );
}
export default Inspection_IMG;
