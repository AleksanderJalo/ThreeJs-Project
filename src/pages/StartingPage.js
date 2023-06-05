import { Canvas, useThree, useFrame } from "react-three-fiber";
import Monitor from "../components/Monitor";
import * as THREE from "three";
import { useState } from "react";

const StartingPage = (props) => {
  const pointZero = new THREE.Vector3(0, 0, 0);
  let anim = false;
  const onCanvasClick = () => {
    anim = true;
  };
  function Rig() {
    const { camera } = useThree();
    const [vec] = useState(() => new THREE.Vector3());
    useFrame(() => {
      if (camera.position.distanceTo(pointZero) < 0.21) {
        props.setAfterAnim(true);
      }
      if (camera.position.distanceTo(pointZero) > 0.2 && anim) {
        vec.set(0.1, 0, camera.position.z);
        camera.position.lerp(vec, 0.025);
        camera.lookAt(pointZero);
      } else {
        anim = false;
      }
    });
  }
  return (
    <Canvas
      className="bg-slate-900"
      camera={{ position: [1, 0.8, 0] }}
      onClick={onCanvasClick}
    >
      <pointLight position={[10, 5, 10]} />
      <Monitor/>
      <Rig />
    </Canvas>
  );
};

export default StartingPage;
