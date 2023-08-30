import { useRef } from "react";

function MyElement3D() {
  const refMesh = useRef();
  return (
    <>
      <directionalLight position={[1, 1, 1]} /> {/* 조명 추가 */}
      {/* <mesh rotation={[0, 45*Math.PI/180, 0]}> */}
      <mesh ref={refMesh} rotation-y={(45 * Math.PI) / 180}>
        <boxGeometry /> {/* 정육면체 추가 */}
        <meshStandardMaterial color="#e67e22" />{" "}
        {/* 색깔을 추가하기 위한 자식요소 */}
        {/* 조명이 없는 경우에는 검은색으로 출력 */}
      </mesh>
    </>
  );
}

export default MyElement3D;
