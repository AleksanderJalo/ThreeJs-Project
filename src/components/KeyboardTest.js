import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef();
    const { nodes, materials, animations } = useGLTF('/KeyboardT.glb');
    console.log(nodes)
    console.log(materials)
    console.log(animations)
  return (
    <group {...props} dispose={null} ref={group}>
      {/* <group scale={[1, 0.53, 1]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.monitor} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.eKRAN} />
      </group> */}
    </group>
  )
}

useGLTF.preload('/Monitor.glb')
