import { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export default function Audio() {
  const [latestRecording, setLatestRecording] = useState<string | null>(null);
  const recorderControls = useAudioRecorder();

  // 최신 녹음파일만 출력 = 우리가 서버로 보낼 녹음 파일도 addAudioElement 파일
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setLatestRecording(url);
  };

  // 우리가 서버로 보낼 녹음 파일도 addAudioElement 파일
  // const sendRecordingToServer = (blob) => {
  //   const saveFile = latestRecording;

  //   // 서버로 녹음 파일 전송
  // };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={(blob: Blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        downloadOnSavePress={false}
        classes={true}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadFileType="wav" // 확장자를 .wav로 설정
      />

      {latestRecording && (
        <div>
          <audio src={latestRecording} controls />
        </div>
      )}
    </div>
  );
}
