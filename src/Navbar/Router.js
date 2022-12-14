import Middle from "../Middle/Middle";
import React from "react";

import { Routes, Route } from "react-router-dom";

import Contact from "./Sections/Contact/Contact";
import QuiSuisJe from "./Sections/QuiSuisJe/QuiSuisJe";
import MesPrestations from "./Sections/Prestations/Mes-Prestations";
import Realisations from "./Sections/Realisations/Realisations";

import PrisesDeVues from "./Sections/Prestations/PrisesDeVues";
import Stage from "./Sections/Prestations/Stage";
import Conseils from "./Sections/Prestations/Conseils";
import Inspections from "./Sections/Prestations/Inspections";

import Conseils_IMG from "./Sections/Realisations/Contents_Réa/Conseils_IMG";
import Inspection_IMG from "./Sections/Realisations/Contents_Réa/Inspection_IMG";
import PrisesDeVues_IMG from "./Sections/Realisations/Contents_Réa/PrisesDeVues_IMG";
import Stage_IMG from "./Sections/Realisations/Contents_Réa/Stage_IMG";

import Navbar from "./Navbar";

function Router() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Middle />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/QuiSuisJe" element={<QuiSuisJe />} />

        <Route path="/Prestations" element={<MesPrestations />}>
          <Route path="/Prestations/Conseils" element={<Conseils />} />
          <Route path="/Prestations/Inspections" element={<Inspections />} />
          <Route path="/Prestations/PrisesDeVues" element={<PrisesDeVues />} />
          <Route path="/Prestations/Stage" element={<Stage />} />
        </Route>

        <Route path="/Realisations" element={<Realisations />}>
          <Route path="/Realisations/Conseils_IMG" element={<Conseils_IMG />} />
          <Route
            path="/Realisations/Inspection_IMG"
            element={<Inspection_IMG />}
          />
          <Route
            path="/Realisations/PrisesDeVues_IMG"
            element={<PrisesDeVues_IMG />}
          />
          <Route path="/Realisations/Stage_IMG" element={<Stage_IMG />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
