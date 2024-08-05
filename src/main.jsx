import React from "react";
import ReactDOM from "react-dom/client";
import PortfolioApp from "./PortfolioApp.jsx";
import "./css/estillos.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Language
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import globalEs from "./translations/es/global.json";
import globalEn from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: globalEs,
    },
    en: {
      global: globalEn,
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <React.StrictMode>
        <PortfolioApp />
      </React.StrictMode>
    </I18nextProvider>
  </BrowserRouter>
);
