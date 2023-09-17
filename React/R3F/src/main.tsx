import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Audio from "@/Audio.tsx";
import WaveSurfer from "@/Wavesurfer.tsx";

import PayphonePage from "@/page/PayphonePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Audio />
    <PayphonePage />
    {/* <MicAudioRecorder /> */}
    {/* <WaveSurfer /> */}
    <App />
  </React.StrictMode>
);
