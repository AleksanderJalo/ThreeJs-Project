import React from 'react'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Monitor = () => {
    const gltf = useLoader(GLTFLoader, 'Monitor.glb');
    return <primitive object={gltf.scene}/>
      
}

export default Monitor