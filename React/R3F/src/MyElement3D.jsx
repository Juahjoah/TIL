// MyElement3D.jsx
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function MyElement3D() {
  const refMesh = useRef();
  useFrame((state, delta) => {
    refMesh.current.rotation.z += delta;
  });
  return (
    <>
      <directionalLight position={[1, 1, 1]} /> {/* 조명 추가. 각각 x,y,z축 */}
      <axesHelper scale={10} /> {/* 축을 추가. 5는 축의 길이 */}
      <OrbitControls />
      {/* <mesh ref={refMesh} position={[0, 2, 0]}> rotation={[0, (45 * Math.PI) / 180, 0]} */}
      <mesh // 부모 메쉬
        ref={refMesh}
        position-y={2}
        rotation-z={THREE.MathUtils.degToRad(20)}
        scale={[2, 1, 1]}
      >
        <boxGeometry /> {/* 정육면체 추가 */}
        <meshStandardMaterial
          color="#e67e22"
          opacity={0.5}
          transparent={true}
        />
        {/* 색깔을 추가하기 위한 자식요소 */}
        {/* 조명이 없는 경우에는 검은색으로 출력 */}
        <axesHelper /> {/* mesh에 대한 좌표계를 추가 */}
        <mesh scale={[0.1, 0.1, 0.1]} position-y={2}>
          {/* 자식 메쉬. 따로 지정하지 않으면, 부모와 동일한 조건이 부여. */}
          <sphereGeometry />
          <meshStandardMaterial color="red" />
          <axesHelper scale={5} />
        </mesh>
      </mesh>
    </>
  );
}

export default MyElement3D;

// function MyElement3D() {
//   const refMesh = useRef();
//   useFrame((state, delta) => {
//     refMesh.current.rotation.y += delta;
//   });
//   return (
//     <>
//       <directionalLight position={[1, 1, 1]} /> {/* 조명 추가. 각각 x,y,z축 */}
//       {/* <mesh rotation={[0, 45*Math.PI/180, 0]}> */}
//       <mesh ref={refMesh} rotation-y={(45 * Math.PI) / 180}>
//         <boxGeometry /> {/* 정육면체 추가 */}
//         <meshStandardMaterial color="#e67e22" />{" "}
//         {/* 색깔을 추가하기 위한 자식요소 */}
//         {/* 조명이 없는 경우에는 검은색으로 출력 */}
//       </mesh>
//     </>
//   );
// }
