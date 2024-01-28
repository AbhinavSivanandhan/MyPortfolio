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
background-color: #4D6F8F;
color: white;
border: none;
border-radius: 5px;
font-family: 'Roboto', sans-serif;
`

// const Navbar = () => {
//     return (
//         <Section>
//           <Container>
//             <Links>
//             <Logo src="./img/logo.png" width="300" height="120"/>
//             <List>
//               <ListItem>Home</ListItem>
//               <ListItem>Works</ListItem>
//               <ListItem>Skills</ListItem>
//               <ListItem>Contact</ListItem>
//             </List>
//             <Icons>
//               {/* <Button>Hire Now</Button> */}
//             </Icons>
//             </Links>
//           </Container>
//         </Section>
//     )
// }
const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" width="300" height="120" />
          <List>
            <ListItem onClick={() => scrollToSection('home')}>Home</ListItem>
            <ListItem onClick={() => scrollToSection('works')}>Works</ListItem>
            <ListItem onClick={() => scrollToSection('skills')}>Skills</ListItem>
            <ListItem onClick={() => scrollToSection('contact')}>Contact</ListItem>
          </List>
          <Icons>{/* ... */}</Icons>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar