import React from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
@media only screen and (max-width: 768px){
  display: none;
}
`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
@media only screen and (max-width: 768px){
  align-items: center;
  text-align: center;
}
`
const Title = styled.h1`
font-size: 74px;
@media only screen and (max-width: 768px){
  font-size: 60px;
}
`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Line = styled.img`
height: 5px;
`
const Subtitle = styled.h2`
color: pink;
`
const Desc = styled.p`
font-size: 24px;
color: lightgray;
`
const Button = styled.button`
background-color: pink;
color: white;
font-width: 500; 
width: 80px;
padding: 10px;
border-radius: 5px;
cursor: pointer;
`


const Who = () => {
    return (
        <Section>
          <Container>
            <Left>
              <Canvas camera={{fov: 25, position: [5, 5, 5] }}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8}/> 
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <mesh>
                <boxGeometry/>
                <Cube/>
              </mesh>
              </Canvas>
            </Left>
            <Right>
            <Title>Would you like to see my work?</Title>
            <WhatWeDo>
              <Line src="./img/line.png"/>
              <Subtitle>Prioritizing impactful solutions. Substance over style.</Subtitle>
            </WhatWeDo>
            <Desc>
              Crafting innovative solutions that bridge the gap between technology and real-world challenges.
            </Desc>
            <Button>Go for it!</Button>
            </Right>
          </Container>
        </Section>
    )
}

export default Who