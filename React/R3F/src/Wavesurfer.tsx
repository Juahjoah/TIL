import React, { useEffect, useRef, useState } from "react";
import WavesurferRecorder from "wavesurfer.js";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js"; // RecordPlugin을 임포트합니다.

const Wavesurfer: React.FC = () => {
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    // WaveSurfer 초기화
    if (!waveSurferRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: "#waveform",
        waveColor: "rgb(200, 0, 200)",
        progressColor: "rgb(100, 0, 100)",
      });
    }

    // Record 플러그인 초기화
    waveSurferRef.current.addPlugin(RecordPlugin.create());

    // record-end 이벤트 리스너
    waveSurferRef.current.on("record-end", (blob) => {
      // 녹음이 종료될 때 처리할 로직을 여기에 추가합니다.
      console.log("녹음이 종료되었습니다. Blob:", blob);

      // 녹음된 오디오를 재생하거나 백엔드로 전송하는 로직을 추가하세요.
    });
  }, []);

  const toggleRecording = async () => {
    if (waveSurferRef.current) {
      if (!recording) {
        try {
          await waveSurferRef.current.startRecording();
          setRecording(true);
        } catch (e) {
          console.error(e);
        }
      } else {
        try {
          await waveSurferRef.current.stopRecording();
          setRecording(false);
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  return (
    <div>
      <button onClick={toggleRecording}>
        {recording ? "녹음 중지" : "녹음 시작"}
      </button>
      <div id="waveform"></div>
    </div>
  );
};

export default Wavesurfer;
