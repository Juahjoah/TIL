import { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export default function Audio() {
  const [latestRecording, setLatestRecording] = useState<string | null>(null);
  const recorderControls = useAudioRecorder();

  // 최신 녹음파일만 출력
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setLatestRecording(url);
  };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={(blob: Blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        downloadOnSavePress={false}
        showSaveButton={false}
        showPlayButtons={false}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
      />

      {latestRecording && (
        <div>
          <audio src={latestRecording} controls />
        </div>
      )}
    </div>
  );
}

// export default function Audio() {
//   const ExampleComponent = () => {
//     const recorderControls = useAudioRecorder();
//     const addAudioElement = (blob: Blob) => {
//       const url = URL.createObjectURL(blob);
//       const audio = document.createElement("audio");
//       audio.src = url;
//       audio.controls = true;
//       document.body.appendChild(audio);
//     };

//     // 파일 저장 버튼 이벤트 리스너 제거
//     useEffect(() => {
//       const downloadButton = document.querySelector(".react-audio-voice-recorder-download-button");
//       if (downloadButton) {
//         downloadButton.removeEventListener("click", recorderControls.downloadRecording);
//       }
//     }, [recorderControls]);

//     return (
//       <div>
//         <AudioRecorder
//           onRecordingComplete={(blob: Blob) => addAudioElement(blob)}
//           recorderControls={recorderControls}
//         />
//         <button onClick={recorderControls.stopRecording}>Stop recording</button>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <ExampleComponent />
//     </div>
//   );
// }
