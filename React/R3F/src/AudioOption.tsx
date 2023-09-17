import React, { useEffect, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";

export default function AudioOption() {
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
  } = useAudioRecorder();

  const [isRecordingUIVisible, setIsRecordingUIVisible] = useState(false);

  useEffect(() => {
    if (isRecording) {
      setIsRecordingUIVisible(true);
    } else {
      setIsRecordingUIVisible(false);
    }
  }, [isRecording]);

  return (
    <div>
      <div>
        {!isRecording && !isPaused && (
          <button onClick={startRecording}>Start Recording</button>
        )}
        {isRecordingUIVisible && (
          <div>
            <p>Recording Time: {Math.floor(recordingTime / 1000)} seconds</p>
            <button onClick={stopRecording}>Stop Recording</button>
          </div>
        )}
        {isPaused && <p>Paused</p>}
      </div>
      {recordingBlob && (
        <div>
          <audio src={URL.createObjectURL(recordingBlob)} controls />
        </div>
      )}
    </div>
  );
}
