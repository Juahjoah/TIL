import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import PayphonePage from "@/page/PayphonePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PayphonePage />
    <App />
  </React.StrictMode>
);
