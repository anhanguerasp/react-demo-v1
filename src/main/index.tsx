import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "../presentation/routes/routes";
import "../presentation/styles/global.scss";
import "flowbite";
import "flowbite-react";
import "react-chatbot-kit/build/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
