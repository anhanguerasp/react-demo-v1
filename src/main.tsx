import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "../public/scss/forms-g.scss";
import "../public/scss/forms.scss";
import "../public/scss/global.module.scss";
import "../public/scss/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
