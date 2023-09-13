import { Canvas } from "@react-three/fiber";
// import Payphone from "./Payphone";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <ambientLight />
        {/* <pointLight position={[10, 10, 10]} />
        <Payphone /> */}
      </Canvas>
    </div>
  );
}

export default App;
