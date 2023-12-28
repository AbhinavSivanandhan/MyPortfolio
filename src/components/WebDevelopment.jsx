import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model2 from './Model2'

const WebDevelopment = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Model2/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WebDevelopment