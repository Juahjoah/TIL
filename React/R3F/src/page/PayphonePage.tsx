import Payphone from "@/models/Payphone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

export default function PayphonePage() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Stage environment="city" intensity={0.5} adjustCamera>
          <Payphone />
        </Stage>
      </Canvas>
    </div>
  );
}
