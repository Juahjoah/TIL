import { useState } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";

export default function AudioReactRecorderComponent() {
  const [recordState, setRecordState] = useState(RecordState.STOP);
  const [audioData, setAudioData] = useState<any>(null);
  const [recordingMessage, setRecordingMessage] = useState(""); // 녹음 상태 메시지

  // 녹음 시작
  const startRecording = () => {
    setAudioData(null);
    setRecordState(RecordState.START);
    setRecordingMessage("녹음 중...");
  };
  // 녹음 중지/끝
  const stopRecording = () => {
    setRecordState(RecordState.STOP);
    setRecordingMessage("");
  };
  // 일시 중지
  const pauseRecording = () => {
    setRecordState(RecordState.PAUSE);
    setRecordingMessage("일시 중지됨");
  };
  // 정지 후 재시작
  const resumeRecording = () => {
    setRecordState(RecordState.RESUME);
    setRecordingMessage("녹음 중...");
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
      <div>{recordingMessage}</div>
      <button onClick={() => console.log("녹음 axios랑 연결하기")}>
        업로드하기
      </button>
    </div>
  );
}

// import { Component } from "react";
// import AudioReactRecorder, {
//   RecordState,
//   AudioData,
// } from "audio-react-recorder";

// // 컴포넌트의 props와 state의 타입을 정의합니다.
// interface AppState {
//   recordState: RecordState | null;
// }

// class App extends Component<{}, AppState> {
//   constructor(props: {}) {
//     super(props);

//     this.state = {
//       recordState: null,
//     };
//   }

//   start = () => {
//     this.setState({
//       recordState: RecordState.START,
//     });
//   };

//   pause = () => {
//     this.setState({
//       recordState: RecordState.PAUSE,
//     });
//   };

//   stop = () => {
//     this.setState({
//       recordState: RecordState.STOP,
//     });
//   };

//   // audioData 매개변수의 타입을 AudioData로 지정합니다.
//   onStop = (audioData: AudioData) => {
//     this.setState({
//       audioData,
//     });
//     console.log("audioData", audioData);
//   };

//   render() {
//     const { recordState } = this.state;

//     return (
//       <div>
//         <AudioReactRecorder
//           state={recordState}
//           onStop={this.onStop}
//           backgroundColor="rgb(255,255,255)"
//         />

//         <audio
//           id="audio"
//           controls
//           src={this.state.audioData ? this.state.audioData.url : null}
//         ></audio>
//         <button id="record" onClick={this.start}>
//           Start
//         </button>
//         <button id="pause" onClick={this.pause}>
//           Pause
//         </button>
//         <button id="stop" onClick={this.stop}>
//           Stop
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
