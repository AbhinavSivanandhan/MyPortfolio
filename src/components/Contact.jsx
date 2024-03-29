//require('dotenv').config();

import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';
// import MyEnv from './MyEnv'; // Import the MyEnv component


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px){
    justify-content: center;
  }
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px){
    width: 300px;
  }
`
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
 `
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
 `
const Button = styled.button`
  padding: 20px;
  background-color: #4D6F8F;
  color: white;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
 `

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px){
    display: none;
  }
`



const Contact = () => {

    const ref = useRef()
    const [success, setSuccess] = useState(null)

    const handleSubmit = e => {
      e.preventDefault()
      //emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, ref.current,process.env.REACT_APP_EMAILJS_USERID)
      //emailjs.sendForm('service_lq318z8', 'template_ac9j0rl', ref.current, 'gHd-3YkfOLfZpTicy')
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, ref.current, process.env.REACT_APP_EMAILJS_USERID)
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
    }
    return (
        <Section id="contact">
          <Container>
            <Left>
              <Form ref={ref} onSubmit={handleSubmit}>
                <Title>Contact Me !</Title>
                <Input placeholder='Name' name='name'/>
                <Input placeholder='Email' name='email'/>
                <TextArea placeholder='Write your message' name='message' rows={10}/>
                <Button type="submit">Send</Button>
                {success && "Your message has been sent. I'll get back to you soon!!"}
              </Form>
            </Left>
            <Right>
            <Map />
            </Right>
          </Container>
        </Section>
    )
}

export default Contact