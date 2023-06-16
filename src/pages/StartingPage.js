import { Canvas, useThree, useFrame } from "react-three-fiber";
import { useState } from "react";
import Lobby from "../components/Lobby_3"
import * as THREE from "three";
import LoadingPage from "../pages/LoadingPage.js";

const StartingPage = (props) => {
  const [loading, setLoading] = useState(false);
  const monitor = new THREE.Vector3(0, 2.2, 0.08);
  const monitorLook = new THREE.Vector3(0, 2.2, -0.1);
  let anim = false;
  const onCanvasClick = () => {
    anim = true;
  };
  function Rig() {
    const { camera } = useThree();
    useFrame(() => {
      if (camera.position.distanceTo(monitor) < 0.1) {
        camera.lookAt(monitorLook);
        setTimeout(() => {
          setLoading(true)
        }, 620);
      }
      if (camera.position.distanceTo(monitor) > 0.05 && anim) {
        camera.position.lerp(monitor, 0.025);
        camera.lookAt(monitorLook);
      } else {
        anim = false;
      }
    });
  }
  return (
    <div className="relative w-full h-full">
      <Canvas
        className="bg-[#0f172a]"
        camera={{ position: [3, 2, 3], rotation: [0, 0.5, 0] }}
        onClick={onCanvasClick}
      >
        <pointLight position={[10, 5, 10]} />
        <Lobby />
        <Rig />
      </Canvas>
      {loading && <LoadingPage setAfterAnim={props.setAfterAnim} />}
    </div>
  );
};

export default StartingPage;
