import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Audio from "@/Audio.tsx";
import Payphone from "@/models/Payphone";
import Modal from "./../component/Modal";
import AudioReactRecorder from "@/AudioReactRecorder.tsx";

export default function PayphonePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Stage environment="city" intensity={0.5} adjustCamera>
          <Payphone onClick={openModal} />
        </Stage>
      </Canvas>

      <button onClick={openModal}>Open Modal</button>

      <Modal
        modalOpen={modalOpen}
        onClose={closeModal}
        title="녹음을 테스트해보겠습니다."
        buttonLabel="닫기"
      >
        <AudioReactRecorder />
      </Modal>
    </div>
  );
}
