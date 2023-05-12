import "./App.css";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

import Keyboard from "./components/Keyboard";
import * as THREE from "three";
import { useState, Suspense } from "react";
import StartingPage from "./pages/StartingPage";

function App() {
  const [afterAnim, setAfterAnim] = useState(false);
  const pointZero = new THREE.Vector3(0, 0, 0);
  const RigKeyboard = () => {
    const { camera } = useThree();
    useFrame(() => {
      camera.lookAt(pointZero);
    });
  };

  return (
    <div className="w-screen h-screen">
      {!afterAnim && <StartingPage setAfterAnim={setAfterAnim} />}
      {afterAnim && (
        <Suspense>
          <Canvas className="bg-slate-900" camera={{ position: [4, 0.5, 0] }}>
            <Keyboard />
            <pointLight position={[10, 5, 10]} />
            <OrbitControls />
            <RigKeyboard />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
}

export default App;

// import { Stats, OrbitControls, Circle } from '@react-three/drei'
// import { Canvas, useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// export default function App() {
//   const gltf = useLoader(GLTFLoader, 'KeyboardT.glb')

//   return (
//     <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
//       <directionalLight position={[3.3, 1.0, 4.4]} castShadow />

//       <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
//         <meshStandardMaterial />
//       </Circle>
//       <OrbitControls target={[0, 1, 0]} />
//       <axesHelper args={[5]} />
//       <Stats />
//     </Canvas>
//   )
// }
