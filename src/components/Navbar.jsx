import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px){
    width: 100px;
  }
`
const Container = styled.div`
  width: 1400px;
  background-color: rgb(255, 245, 238, 0.3);
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media only screen and (max-width: 768px){
    width: 100px;
    padding: 10px;
  }
`
const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`
const Logo = styled.img`
`
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
@media only screen and (max-width: 768px){
  display: None;
}
`
const ListItem = styled.li`
cursor: pointer;
`
const Icons = styled.div`
`
const Icon = styled.img`
`
const Button = styled.button`
width: 100px;
padding: 10px;
background-color: pink;
color: white;
border: none;
border-radius: 5px;
`

const Navbar = () => {
    return (
        <Section>
          <Container>
            <Links>
            <Logo src="./img/logo.png" width="300" height="120"/>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Studio</ListItem>
              <ListItem>Works</ListItem>
              <ListItem>Contact</ListItem>
            </List>
            <Icons>
              <Icon src="./img/hire.png" width="20" height="20"/>
              <Button>Hire Now</Button>
            </Icons>
            </Links>
          </Container>
        </Section>
    )
}

export default Navbar