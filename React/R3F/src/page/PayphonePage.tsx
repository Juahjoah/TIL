import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Audio from "@/Audio.tsx";
import Payphone from "@/models/Payphone";
import Modal from "./../component/Modal";

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
        title="클릭을 확인하겠습니다"
        buttonLabel="확인"
      >
        <Audio />
      </Modal>
    </div>
  );
}
