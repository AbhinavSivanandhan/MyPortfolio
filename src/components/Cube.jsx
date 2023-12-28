import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
  const textRef = useRef()
  useFrame(state=> (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*1.2))
  return (  
    <meshStandardMaterial>
    <RenderTexture attach="map">
    <PerspectiveCamera makeDefault position={[0,0,5]}/>
        <color attach="background" args={["#dc9dcd"]} />
        <Text ref={textRef} fontSize={3} color="#555">
        hello
        </Text>
    </RenderTexture>
    </meshStandardMaterial>
  )
}

export default Cube