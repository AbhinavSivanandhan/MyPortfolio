import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Docker from './Docker'

const DevOps = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Docker/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default DevOps