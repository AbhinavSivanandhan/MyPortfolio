import React from 'react'
import styled from 'styled-components'
import Navbar from "./Navbar"
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px){
    height: 200vh;
  }
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`
const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
@media only screen and (max-width: 768px){
  flex: 1;
  align-items: center;
}
`
const Title = styled.h1`
font-size: 74px;
@media only screen and (max-width: 768px){
  text-align: center;
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
@media only screen and (max-width: 768px){
  padding: 20px;
  text-align: center;
}
`
const Button = styled.button`
background-color: pink;
color: white;
font-width: 500; 
width: 100px;
padding: 10px;
border-radius: 5px;
cursor: pointer;
`

const Right = styled.div`
flex: 3;
position: relative;
@media only screen and (max-width: 768px){
  flex: 1;
  width: 100%;
}
`
const Img = styled.img`
width: 310px;
height: 265px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
@media only screen and (max-width: 768px){
  height: 300px;
  width: 300px;
}
@keyframes animate{
  to{
     transform: translateY(50px);
    }
}
`

const Hero = () => {
    return (
        <Section>
          <Navbar/>
           <Container>
            <Left>
            <Title>👋 Hello, I'm Abhinav Sivanandhan!</Title>
            <WhatWeDo>
              <Line src="./img/line.png"/>
              <Subtitle>I specialize in crafting innovative solutions that bridge the gap between technology and real-world challenges</Subtitle>
            </WhatWeDo>
            <Desc>
              Explore my journey in software development, where I've tackled projects ranging from AI-driven batch schedulers to scalable social media applications. Let's build the future together! 🚀
            </Desc>
            <Button>Learn More</Button>
            </Left>
            <Right>
            <Canvas camera={{fov: 25, position: [5, 5, 5] }}>
              <OrbitControls enableZoom={false} /> 
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <mesh>
                <boxGeometry/>
                <Sphere args={[1,100,200]} scale={1.45}>
                  <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2}/>
                </Sphere>
              </mesh>
            </Canvas>
            <Img src="./img/man.png"/>
            </Right>
          </Container> 
        </Section>
    )
}

export default Hero