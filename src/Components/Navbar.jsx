import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./HOME/LogoPIprueba.png";
// import homeIcon from "../Img/HomeIcon.png";

export default function Nav() {
  return (
    <NavBarStyle>
      <Link to="/">
      <img src={logo} alt="logo" />
      </Link>
      <section>
        <Link to="/home" className="linknav">
          <p>Inicio</p>
        </Link>
        <Link to="/activities" className="linknav">
          <p>Actividades</p>
        </Link>
        <Link to="/contact" className="linknav">
          <p>Contacto</p>
        </Link>
      </section>
    </NavBarStyle>
  );
}

const NavBarStyle = styled.div`
  display: grid;
  grid-template-columns: 15rem 5fr 15rem;
  align-items: center;
  justify-items: center;
  padding: 1rem 0;
  transition: all 0.8s;
  font-weight: bold;
  color: #2b3249;
  section {
    display: flex;
    width: 60%;
    justify-content: space-around;
    align-items: center;
    font-size: 2rem;
  }
  img {
    height: 6rem;
  }
  section img {
    height: 3rem;
  }
  .linknav {
    position: relative;
    transition: all 0.8s ease-in-out;
  }

  .linknav::before {
    content: "";
    height: 0.1rem;
    width: 100%;
    position: absolute;
    left: 0;
    top: 70%;
    background-color: #a0c0d6;
    opacity: 0;
    transition: all 1.5s;
  }

  .linknav:hover {
    font-size: x-large;
    color: #43597D;
  }

  .linknav:hover::before {
    transition: inherit;
    transform: scale(1.5);
    opacity: 1;
  }
`;
