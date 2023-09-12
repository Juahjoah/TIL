import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Payphone from "./Payphone";

export default function App() {
  return (
    // <Canvas shadows camera={{ position: [0, 0, 1.66] }}>
    <Canvas>
      {/* <Environment preset="forest" /> */}
      <Payphone />
      {/* <ContactShadows position={[0, -0.8, 0]} color="#ffffff" /> */}
      {/* <OrbitControls autoRotate /> */}
    </Canvas>
  );
}
