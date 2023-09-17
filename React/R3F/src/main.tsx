import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Audio from "@/Audio.tsx";

import PayphonePage from "@/page/PayphonePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PayphonePage />
    <Audio />
    {/* <MicAudioRecorder /> */}
    <App />
  </React.StrictMode>
);
