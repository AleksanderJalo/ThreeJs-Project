import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
const Keyboard = () => {
  const {scene, animations} = useLoader(GLTFLoader, "KeyboardDD.glb");
//   const {scene, animations} = useGLTF("KeyboardDD.glb")
//   let mixer = new THREE.AnimationMixer()
//   animations.forEach((clip) => {
//     const action = mixer.clipAction(clip);
//   })
//   useFrame((state, delta) => {
//     mixer.update(delta);
// });
  return <primitive object={scene} />;
};
export default Keyboard;
