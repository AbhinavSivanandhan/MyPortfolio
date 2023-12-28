import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
// import Cube from './Cube'
import InProgress from './InProgress'
// import { meshStandardMaterial } from 'three'

const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
`

const Test = () => {
    return (
        <Container>
          <Canvas>
            <OrbitControls enableZoom={false}/> 
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <mesh>
              <boxGeometry args= {[1, 1, 1]}/>
              <InProgress/>
            </mesh>
          </Canvas>
          <Canvas camera={{fov: 25, position: [5, 5, 5] }}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8}/> 
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <mesh>
                <boxGeometry/>
                <Sphere args={[1,100,200]} scale={1}>
                  <MeshDistortMaterial color="#220736" attach="material" distort={0.5} speed={2}/>
                </Sphere>
              </mesh>
            </Canvas>
        </Container>
    )
}
 
export default Test