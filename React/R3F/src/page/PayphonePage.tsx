import Payphone from "@/models/Payphone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import PayphoneGray from "./../component/Payphone/PayphoneGray";

export default function PayphonePage() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Stage environment="city" intensity={0.5} adjustCamera>
          <Payphone />
          <PayphoneGray />
        </Stage>
      </Canvas>
    </div>
  );
}
