import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Car from "./Car.jsx";
import Bike from "./Bike.jsx";
import Gallery from "./Gallery.jsx";
import Services from "./Service.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="car" element={<Car />} />
        <Route path="bike" element={<Bike />} />
        <Route path="gallery" element={ <Gallery/> } />
        <Route path="service" element={ <Services/> } />
      </Routes>
    </Router>
  </StrictMode>
);
