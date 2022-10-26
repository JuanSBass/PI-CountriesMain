import React from "react";
import styled from "styled-components";
import FormContacto from "./FormContacto";
import logo from "../../Components/HOME/LogoPIprueba.png";

const Contact = () => {


  return (
    <ContactContainer>
      <FormContacto />
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.main`
  margin: 0 auto;
  text-align: center;
  background-image: url(${logo});
  background-size: 45%;
  background-repeat: no-repeat;
  height: 92.5rem;
  background-attachment: fixed;
  background-position: center left;
  

`;
