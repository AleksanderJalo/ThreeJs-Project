import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Suspense } from "react";
import Keyboard from '../components/Keyboard';
import * as THREE from "three";

const HomePage = () => {
  const pointZero = new THREE.Vector3(0, 0, 0);
  const RigKeyboard = () => {
    const { camera } = useThree();
    useFrame(() => {
      camera.lookAt(pointZero);
    });
  };
  return (
    <Suspense>
      <Canvas className="bg-slate-900" camera={{ position: [4, 0.5, 0] }}>
        <Keyboard />
        <pointLight position={[10, 5, 10]} />
        <OrbitControls />
        <RigKeyboard />
      </Canvas>
    </Suspense>
  );
};

export default HomePage;
