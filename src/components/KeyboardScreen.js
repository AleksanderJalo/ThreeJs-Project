import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Suspense } from "react";
import Keyboard from "./Kb65_noanimtest";
import * as THREE from "three";

const HomePage = () => {
  const pointZero = new THREE.Vector3(0, 0, 0);
  const RigKeyboard = () => {
    const { camera } = useThree();
    useFrame(() => {
      camera.lookAt(pointZero);
      console.log(camera.position);
      console.log(camera.rotation);
    });
  };
  return (
    <Suspense>
      <Canvas className="bg-gradient-to-r from-slate-500 to-slate-800 relative rounded-xl" camera={{ position: [0.2, 1.77, 0.93] }}>
        <Keyboard />
        <pointLight position={[10, 5, 10]} intensity={4} />
        <RigKeyboard />
      </Canvas>
    </Suspense>
  );
};

export default HomePage;
