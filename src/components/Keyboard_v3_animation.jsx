/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 .\public\Keyboard_v3_animation.gltf
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/Keyboard_v3_animation.gltf"
  );
  const { actions } = useAnimations(animations, group);
  let action = null;
  const keycapSound = new Audio('buttonClick.mp3')

  useEffect(() => {
    document.addEventListener("keydown", detectKey, true);
  },[]);
  const detectKey = (e) => {
    action = `${e.key.toUpperCase()}_Action`;
    if (e.key === " ") {
      action = "Space_Action"
    }
    console.log(action);
    action = actions[action];
    
  };

  useFrame(() => {
    if (action != null) {
      keycapSound.pause();
      action.reset()
      action.setLoop(THREE.LoopOnce);
      action.play();
      keycapSound.play();
      action = null;
    }

    
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="ESC"
          geometry={nodes.ESC.geometry}
          material={materials.Key}
          position={[-1, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="Board"
          geometry={nodes.Board.geometry}
          material={materials.Board}
          position={[0, 0.24, -0.03]}
          scale={0.99}
        />
        <mesh
          name="2001"
          geometry={nodes["2001"].geometry}
          material={materials.Key}
          position={[-0.95, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2002"
          geometry={nodes["2002"].geometry}
          material={materials.Key}
          position={[-0.9, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2003"
          geometry={nodes["2003"].geometry}
          material={materials.Key}
          position={[-0.87, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2004"
          geometry={nodes["2004"].geometry}
          material={materials.Key}
          position={[-1, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="A"
          geometry={nodes.A.geometry}
          material={materials.Key}
          position={[-0.77, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="S"
          geometry={nodes.S.geometry}
          material={materials.Key}
          position={[-0.63, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="D"
          geometry={nodes.D.geometry}
          material={materials.Key}
          position={[-0.49, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2008"
          geometry={nodes["2008"].geometry}
          material={materials.Key}
          position={[-0.36, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2009"
          geometry={nodes["2009"].geometry}
          material={materials.Key}
          position={[-0.22, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2010"
          geometry={nodes["2010"].geometry}
          material={materials.Key}
          position={[-0.08, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2011"
          geometry={nodes["2011"].geometry}
          material={materials.Key}
          position={[0.05, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2012"
          geometry={nodes["2012"].geometry}
          material={materials.Key}
          position={[0.19, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2013"
          geometry={nodes["2013"].geometry}
          material={materials.Key}
          position={[0.32, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2014"
          geometry={nodes["2014"].geometry}
          material={materials.Key}
          position={[0.46, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2015"
          geometry={nodes["2015"].geometry}
          material={materials.Key}
          position={[0.6, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2016"
          geometry={nodes["2016"].geometry}
          material={materials.Key}
          position={[0.86, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2017"
          geometry={nodes["2017"].geometry}
          material={materials.Key}
          position={[1, 0.29, 0.05]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="1"
          geometry={nodes["1"].geometry}
          material={materials.Key}
          position={[-0.86, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2"
          geometry={nodes["2"].geometry}
          material={materials.Key}
          position={[-0.73, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="3"
          geometry={nodes["3"].geometry}
          material={materials.Key}
          position={[-0.59, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2021"
          geometry={nodes["2021"].geometry}
          material={materials.Key}
          position={[-0.45, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2022"
          geometry={nodes["2022"].geometry}
          material={materials.Key}
          position={[-0.32, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2023"
          geometry={nodes["2023"].geometry}
          material={materials.Key}
          position={[-0.18, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2024"
          geometry={nodes["2024"].geometry}
          material={materials.Key}
          position={[-0.04, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2025"
          geometry={nodes["2025"].geometry}
          material={materials.Key}
          position={[0.09, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2026"
          geometry={nodes["2026"].geometry}
          material={materials.Key}
          position={[0.23, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2027"
          geometry={nodes["2027"].geometry}
          material={materials.Key}
          position={[0.36, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2028"
          geometry={nodes["2028"].geometry}
          material={materials.Key}
          position={[0.5, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2029"
          geometry={nodes["2029"].geometry}
          material={materials.Key}
          position={[0.64, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2030"
          geometry={nodes["2030"].geometry}
          material={materials.Key}
          position={[0.86, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2031"
          geometry={nodes["2031"].geometry}
          material={materials.Key}
          position={[1, 0.29, -0.23]}
          rotation={[0.04, 0, 0]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2032"
          geometry={nodes["2032"].geometry}
          material={materials.Key}
          position={[-0.82, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="W"
          geometry={nodes.W.geometry}
          material={materials.Key}
          position={[-0.68, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2034"
          geometry={nodes["2034"].geometry}
          material={materials.Key}
          position={[-0.54, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2035"
          geometry={nodes["2035"].geometry}
          material={materials.Key}
          position={[-0.41, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2036"
          geometry={nodes["2036"].geometry}
          material={materials.Key}
          position={[-0.27, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2037"
          geometry={nodes["2037"].geometry}
          material={materials.Key}
          position={[-0.13, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2038"
          geometry={nodes["2038"].geometry}
          material={materials.Key}
          position={[0, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2039"
          geometry={nodes["2039"].geometry}
          material={materials.Key}
          position={[0.14, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2040"
          geometry={nodes["2040"].geometry}
          material={materials.Key}
          position={[0.27, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2041"
          geometry={nodes["2041"].geometry}
          material={materials.Key}
          position={[0.41, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2042"
          geometry={nodes["2042"].geometry}
          material={materials.Key}
          position={[0.55, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2043"
          geometry={nodes["2043"].geometry}
          material={materials.Key}
          position={[0.68, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2044"
          geometry={nodes["2044"].geometry}
          material={materials.Key}
          position={[0.86, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2045"
          geometry={nodes["2045"].geometry}
          material={materials.Key}
          position={[1, 0.29, -0.09]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2046"
          geometry={nodes["2046"].geometry}
          material={materials.Key}
          position={[-0.73, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2047"
          geometry={nodes["2047"].geometry}
          material={materials.Key}
          position={[-0.59, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2048"
          geometry={nodes["2048"].geometry}
          material={materials.Key}
          position={[-0.46, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2049"
          geometry={nodes["2049"].geometry}
          material={materials.Key}
          position={[-0.32, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2050"
          geometry={nodes["2050"].geometry}
          material={materials.Key}
          position={[-0.18, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2051"
          geometry={nodes["2051"].geometry}
          material={materials.Key}
          position={[-0.05, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2052"
          geometry={nodes["2052"].geometry}
          material={materials.Key}
          position={[0.09, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2053"
          geometry={nodes["2053"].geometry}
          material={materials.Key}
          position={[0.22, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2054"
          geometry={nodes["2054"].geometry}
          material={materials.Key}
          position={[0.36, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2055"
          geometry={nodes["2055"].geometry}
          material={materials.Key}
          position={[0.5, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2056"
          geometry={nodes["2056"].geometry}
          material={materials.Key}
          position={[0.72, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2057"
          geometry={nodes["2057"].geometry}
          material={materials.Key}
          position={[0.86, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2058"
          geometry={nodes["2058"].geometry}
          material={materials.Key}
          position={[1, 0.29, 0.18]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2059"
          geometry={nodes["2059"].geometry}
          material={materials.Key}
          position={[-0.83, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2060"
          geometry={nodes["2060"].geometry}
          material={materials.Key}
          position={[-0.66, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="SPACE"
          geometry={nodes.SPACE.geometry}
          material={materials.Key}
          position={[-0.49, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2062"
          geometry={nodes["2062"].geometry}
          material={materials.Key}
          position={[0.31, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2063"
          geometry={nodes["2063"].geometry}
          material={materials.Key}
          position={[0.45, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2064"
          geometry={nodes["2064"].geometry}
          material={materials.Key}
          position={[0.59, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2065"
          geometry={nodes["2065"].geometry}
          material={materials.Key}
          position={[0.72, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2066"
          geometry={nodes["2066"].geometry}
          material={materials.Key}
          position={[0.86, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
        <mesh
          name="2067"
          geometry={nodes["2067"].geometry}
          material={materials.Key}
          position={[1, 0.29, 0.32]}
          scale={[2.47, 3.19, 2.47]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Keyboard_v3_animation.gltf");
