import { useState } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";

export default function AudioReactRecorderComponent() {
  const [recordState, setRecordState] = useState(RecordState.STOP);
  const [audioData, setAudioData] = useState<any>(null);

  const startRecording = () => {
    setAudioData(null);
    setRecordState(RecordState.START);
  };

  const stopRecording = () => {
    setRecordState(RecordState.STOP);
  };

  const pauseRecording = () => {
    setRecordState(RecordState.PAUSE);
  };

  const resumeRecording = () => {
    setRecordState(RecordState.RESUME);
  };

  const handleAudioData = (data: any) => {
    setAudioData(data);
  };

  return (
    <div>
      <AudioReactRecorder
        state={recordState}
        type={"audio/wav"}
        onStop={handleAudioData}
        backgroundColor="rgb(255,255,255)"
      />

      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      {recordState === RecordState.START && (
        <button onClick={pauseRecording}>Pause Recording</button>
      )}
      {recordState === RecordState.PAUSE && (
        <button onClick={resumeRecording}>Resume Recording</button>
      )}

      {audioData && (
        <div>
          <audio controls src={audioData.url} />
        </div>
      )}
    </div>
  );
}
