import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model1 from './Model1'

const Automation = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Model1/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Automation