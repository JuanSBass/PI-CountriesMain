import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardPais = ({ flag, name, continent, id }, props) => {
  return (
    <CardContainer>
      <CardRender>
        <div>
          <Link to={`/country/${id}`}>
            <img src={flag} alt="flag" />
          </Link>
        </div>
        <section>
          <h1>{name}</h1>
          <h2>{continent}</h2>
        </section>
      </CardRender>
    </CardContainer>
  );
};

export default CardPais;

const CardContainer = styled.main``;

const CardRender = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  section {
    height: 16rem;
    width: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    transition: all .5s;
    h1{
      color: #43597D;
    }
    h2{
      color: #DE7456;
      font-weight: bold;
    }
    &:hover {
      border: 3px solid #fafafa10;
      background: #fafafa10;
      backdrop-filter: blur(5px);
      color: #131516;
      border-radius: 2rem;
      text-shadow: 4px 1px 8px rgba(0, 0, 0, 0.3);
      box-shadow: 15px 16px 27px -7px rgba(0, 0, 0, 0.69);
      -webkit-box-shadow: 15px 16px 27px -7px rgba(0, 0, 0, 0.69);
      -moz-box-shadow: 15px 16px 27px -7px rgba(0, 0, 0, 0.69);
      /* filter: brightness(0.9); */
    }
  }
  div img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 16px 17px 24px -6px rgba(0, 0, 0, 0.84);
    -webkit-box-shadow: 16px 17px 24px -6px rgba(0, 0, 0, 0.84);
    -moz-box-shadow: 16px 17px 24px -6px rgba(0, 0, 0, 0.84);
  }
`;
