import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Suspense } from "react";
import Keyboard from "./Kb65_noanimtest";
import * as THREE from "three";
import { AnimatePresence, motion } from "framer-motion";
const HomePage = (props) => {
  const pointZero = new THREE.Vector3(0, 0, 0);
  const RigKeyboard = () => {
    const { camera } = useThree();
    useFrame(() => {
      camera.lookAt(pointZero);
    });
  };
  return (
    <AnimatePresence>
      {props.layout === "Home" && <motion.div
        initial={{ x: 1800, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 1800, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full"
      >
        <Suspense>
          <Canvas
            className="bg-gradient-to-r from-slate-500 to-slate-800 relative rounded-xl"
            camera={{ position: [0.2, 1.77, 0.93] }}
          >
            <Keyboard />
            <pointLight position={[10, 5, 10]} intensity={4} />
            <RigKeyboard />
          </Canvas>
        </Suspense>
      </motion.div>}
    </AnimatePresence>
  );
};

export default HomePage;
