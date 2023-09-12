import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

const Payphone = () => {
  const gltf = useLoader(GLTFLoader, "/src/models/payphone.glb");
  const group = useRef();

  const initialPosition = [0, -3, -2];

  return (
    <group ref={group} position={initialPosition}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Payphone;
