import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Car from "./Car.jsx";
import Bike from "./Bike.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="car" element={<Car />} />
        <Route path="bike" element={<Bike />} />
      
      </Routes>
    </Router>
  </StrictMode>
);
