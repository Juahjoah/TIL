import { useEffect, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";

interface VoiceRecordProps {
  field: string;
}

const VoiceRecord: React.FC<VoiceRecordProps> = ({ field }) => {
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
  } = useAudioRecorder();
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    let handler: number | undefined;
    if (notification) {
      handler = window.setTimeout(() => {
        setNotification(false);
      }, 1500);
    }
    return () => clearTimeout(handler);
  }, [notification]);

  return (
    <div>
      <form>
        {recordingTime === 0 ? (
          <button onClick={startRecording}>Start Recording</button>
        ) : (
          <>
            <button disabled={isPaused === true} onClick={togglePauseResume}>
              {isPaused ? <p>Play</p> : <p>Pause</p>}
            </button>

            <button onClick={stopRecording}>
              <p>Submit</p>
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default VoiceRecord;
