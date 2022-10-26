import styled from "styled-components";
import { Link } from "react-router-dom";
import avion from "../IMG/avion.png";
import world from "../../Img/world.png";

export default function HomeMain() {
  return (
    <HomeContainer>
      <Intro>
        <h1>Consulta información relevante sobre tus paises preferidos.</h1>
        <Link to="/home" className="exp">
          <img src={avion} alt="avion" />
          <h2>Explorar</h2>
        </Link>
      </Intro>
      <div className="img-container">
        <img src={world} alt="World" />
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-items: center;
  margin: 20rem auto 5rem auto;
  background-color: #efefef;
  height: 40rem;
  width: 140rem;

  h1 {
    color: #43597d;
    font-size: 5rem;
    text-align: left;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: absolute;
      z-index: 30;
      bottom: 100px;
      animation: float 1s infinite alternate;
      height: 50rem;
    }
  }

  .img-container::after {
    content: "";
    width: 30rem;
    height: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 4rem;
    border-radius: 50%;
    margin-left: -1.6rem;
    z-index: 2;
    animation: shadow 1s infinite alternate;
  }

  @keyframes float {
    to {
      transform: translateY(-30px);
    }
  }

  @keyframes shadow {
    to {
      transform: scale(0.6);
    }
  }
`;

const Intro = styled.section`
  width: 68rem;
  padding: 0 5rem;
  filter: drop-shadow(-1.5rem 0.5rem 1rem #435984);
  img {
    height: 5rem;
    margin-top: 2rem;
  }
  h2 {
    margin: 0;
  }
`;
