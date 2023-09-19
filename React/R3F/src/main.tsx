import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Audio from "@/Audio.tsx";
import AudioOption from "@/AudioOption.tsx";
import PayphonePage from "@/page/PayphonePage.tsx";
import AudioReactRecorder from "@/AudioReactRecorder.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Audio />
    <AudioOption />
    <PayphonePage />
    {/* <MicAudioRecorder /> */}
    {/* <WaveSurfer /> */}
    <App />
    <AudioReactRecorder />
    {/* <Nouse /> */}
    {/* <AudioGithub /> */}
  </React.StrictMode>
);
