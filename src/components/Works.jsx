import React, { useState } from 'react';
import styled from 'styled-components';
import DevOps from "./DevOps"
import ArtificialIntelligence from "./ArtificialIntelligence"
import WebDevelopment from "./WebDevelopment"
import CloudComputing from "./CloudComputing"
import Automation from "./Automation"

// import './stylesheets/worksStyles.css'
const data = [
  'Web Development',
  'Artificial Intelligence',
  'DevOps',
  'Cloud Computing',
  'Automation',
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px){
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px black;
  position: relative;
  @media only screen and (max-width: 768px){
    font-size: 34px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #4D6F8F;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    &::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText{
        to{
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Development")

  
  return (
    <Section id="skills">
      <Container>

        <Left>
          <List>
            --- Choose a skill ---

            {data.map((item) => (
              <ListItem key={item} text={item} onClick={()=> setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        {
  work === "Web Development" ? (
    <WebDevelopment />
  ) : work === "DevOps" ? (
    <DevOps />
  ) : work === "Cloud Computing" ? (
    <CloudComputing />
  ) : work === "Automation" ? (
    <Automation />
  ) : (
    <ArtificialIntelligence />
  )
}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;