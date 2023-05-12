import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Box = () => {
  const gltf = useLoader(GLTFLoader, "box.glb");
  return <primitive object={gltf.scene} />;
};
export default Box;
