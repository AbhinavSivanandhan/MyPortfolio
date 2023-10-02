import React from 'react'
import styled from 'styled-components'

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
`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`
const Title = styled.h1`
font-size: 74px;
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
            {/* 3D-Model */}
            </Left>
            <Right>
            <Title>Think Outside the Square space</Title>
            <WhatWeDo>
              <Line src="./img/line.png"/>
              <Subtitle>What We Do</Subtitle>
            </WhatWeDo>
            <Desc>
              Would you like to see my work?
            </Desc>
            <Button>Go for it!</Button>
            </Right>
          </Container>
        </Section>
    )
}

export default Who