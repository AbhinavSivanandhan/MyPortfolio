import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Robot from './Robot'

const ArtificialIntelligence = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Robot/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default ArtificialIntelligence