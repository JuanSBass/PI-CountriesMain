import React, { useEffect, useState } from "react";
import styled from "styled-components";
import primavera from "../Img/Primavera.png";
import verano from "../Img/verano.png";
import otoño from "../Img/otoño.png";
import invierno from "../Img/invierno.png";

const CardActivities = ({ id, name, season, duration, dificult, created }) => {
  const [linkImage, setLinkImage] = useState("");
  useEffect(() => {
    if (season === "Primavera") setLinkImage(primavera);
    if (season === "Verano") setLinkImage(verano);
    if (season === "Otoño") setLinkImage(otoño);
    if (season === "Invierno") setLinkImage(invierno);
  }, [linkImage, season]);
  const star = '★'
  const dificultStars = star.repeat(dificult).padEnd(5, '☆');

  return (
    <ActivityContainer key={id}>
      <div className="seasonsIconos">
        {linkImage && <img src={linkImage} alt="season" />}
      </div>
      <div className="dataActivity">
        <span>{id}</span>
        <h1>{name}</h1>
        <h2>{season}</h2>
        <p>Duración: {duration} hrs</p>
        <p>Dificultad: {dificultStars}</p>
        <p>Creada en: {created}</p>
      </div>
    </ActivityContainer>
  );
};

export default CardActivities;

const ActivityContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 22rem;
  text-align: center;
  padding: 0.5rem;
  overflow: hidden;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 -3em 3em rgb(0 0 0 / 7%), 0 0 0 2px rgb(190 190 190), 0.3em 0.3em 1em rgb(0 0 0 / 40%);
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
  .seasonsIconos {
    position: relative;
    /* overflow: revert; */
    img {
      position: absolute;
      height: 20rem;
      z-index: -1;
      left: -3rem;
      opacity: 0.7;
      top: 3rem;
    }
  }
  .dataActivity {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1,
    h2,
    p,
    span {
      color: #2b3240;
      font-weight: 700;
    }
    h2{
      font-size: 1.6rem;
    }
    span {
      font-family: "Concert One";
    }
    p{
      font-size: 1rem;
    }
  }
  &:nth-child(5) {
    grid-column: 2/4;
  }
  &:nth-child(7),
  :nth-child(1) {
    grid-column: 1/3;
  }
  &:nth-child(8) {
    grid-column: 3/5;
  }
`;
