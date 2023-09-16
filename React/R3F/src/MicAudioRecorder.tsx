import MicRecorder from "mic-recorder-to-mp3";
import { useEffect, useState } from "react";
import Lame from "lamejs";

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [recorder, setRecorder] = useState<MicRecorder | null>(null);

  useEffect(() => {
    const button = document.querySelector("button");
    const recorderInstance = new MicRecorder({
      bitRate: 128,
    });
    setRecorder(recorderInstance);

    button?.addEventListener("click", toggleRecording);

    return () => {
      button?.removeEventListener("click", toggleRecording);
    };
  }, []);

  const toggleRecording = async () => {
    if (recorder) {
      if (!isRecording) {
        try {
          await recorder.start();
          setIsRecording(true);
        } catch (e) {
          console.error(e);
        }
      } else {
        try {
          const blob = await recorder.stop();
          const file = new File([blob], "music.mp3", {
            type: blob.type,
            lastModified: Date.now(),
          });

          setAudioFile(file);
          setIsRecording(false);
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  return (
    <div className="container text-center">
      <h1>Mic Recorder to Mp3 Example</h1>
      <p>Check your web developer tool console.</p>

      <hr />

      <button className={`btn ${isRecording ? "btn-danger" : "btn-primary"}`}>
        {isRecording ? "Stop recording" : "Start recording"}
      </button>

      <br />
      <br />
      <br />

      {audioFile && (
        <div>
          <audio src={URL.createObjectURL(audioFile)} controls />
        </div>
      )}
    </div>
  );
}
