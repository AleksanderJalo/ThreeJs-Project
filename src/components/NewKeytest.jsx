/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 .\TestObjects\NewKeytest.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/NewKeytest.glb')
  const { actions } = useAnimations(animations, group)
  useFrame(() => {
    actions.Space_animation.play();
    
    
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Keyboard" geometry={nodes.Keyboard.geometry} material={materials.Keyboard} scale={[1, 1.29, 1]} />
        <mesh name="Space" geometry={nodes.Space.geometry} material={materials.Key} position={[0, -0.04, 0]} scale={[1, 1.29, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/NewKeytest.glb')
