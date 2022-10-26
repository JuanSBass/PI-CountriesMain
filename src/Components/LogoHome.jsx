import React from "react";
import styled from "styled-components";
import logo2 from "./HOME/LogoPIprueba.png";

const LogoHome = () => {
  return (
    <LogoHeader>
      <img src={logo2} alt="logo" />
    </LogoHeader>
  );
};

export default LogoHome;

const LogoHeader = styled.div`
  margin: 0 auto;
  width: 17rem;
  img {
    height: 19rem;
    width: 16rem;
    position: absolute;
    top: 7rem;
    z-index: 2;
  }
`;
