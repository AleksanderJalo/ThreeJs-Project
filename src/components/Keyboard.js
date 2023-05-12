import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Keyboard = () => {
  const gltf = useLoader(GLTFLoader, "KeyboardT.glb");
  return <primitive object={gltf.scene} />;
};
export default Keyboard;
