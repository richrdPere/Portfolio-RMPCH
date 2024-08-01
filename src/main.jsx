import React from "react";
import ReactDOM from "react-dom/client";
import PortfolioApp from "./PortfolioApp.jsx";
import "./css/estillos.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <PortfolioApp />
    </React.StrictMode>
  </BrowserRouter>
);
