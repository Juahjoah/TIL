import { Component } from "react";
import AudioReactRecorder, {
  RecordState,
  AudioData,
} from "audio-react-recorder";

// 컴포넌트의 props와 state의 타입을 정의합니다.
interface AppState {
  recordState: RecordState | null;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      recordState: null,
    };
  }

  start = () => {
    this.setState({
      recordState: RecordState.START,
    });
  };

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE,
    });
  };

  stop = () => {
    this.setState({
      recordState: RecordState.STOP,
    });
  };

  // audioData 매개변수의 타입을 AudioData로 지정합니다.
  onStop = (audioData: AudioData) => {
    this.setState({
      audioData,
    });
    console.log("audioData", audioData);
  };

  render() {
    const { recordState } = this.state;

    return (
      <div>
        <AudioReactRecorder
          state={recordState}
          onStop={this.onStop}
          backgroundColor="rgb(255,255,255)"
        />

        <audio
          id="audio"
          controls
          src={this.state.audioData ? this.state.audioData.url : null}
        ></audio>
        <button id="record" onClick={this.start}>
          Start
        </button>
        <button id="pause" onClick={this.pause}>
          Pause
        </button>
        <button id="stop" onClick={this.stop}>
          Stop
        </button>
      </div>
    );
  }
}

export default App;
