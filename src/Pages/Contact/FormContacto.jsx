
import styled from "styled-components";

const FormContacto = () => {

  return (
    <ContactContainerForm>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/juan-santillan-velazco-6775a8243/" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="iconoIn"
            className="icon-contact"
          />
          <h1>Linkedin</h1>
        </a>

        <a target="_blank" href="https://github.com/JuanSBass" rel="noreferrer">
          <h1>Git</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
            alt="iconoGit"
            className="icon-contact"
          />
          <h1>Hub</h1>
        </a>

        <a target="_blank" href="https://www.instagram.com/manzarekluke/" rel="noreferrer">
          <h1>Instagram</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt="iconoInst"
            className="icon-contact"
          />
        </a>
        <p>
          Página desarrollada por Juan Santillán © <br /> Estudiante de
          Desarrollo Web Full Stack
        </p>
      </div>

      <section>
        <section id="info-page">
          <h1>Gracias por visitar</h1>
          <img
            src="https://media.tenor.com/4s8RxnXHt-4AAAAi/icon-cute.gif"
            alt="messageIcon"
          />
          <p>
            Esta página es un proyecto hecho con fines educativos. <br />
            <i>QApp-io</i> <b>NO</b> es una empresa real. La creación del nombre
            como de la imágen es simulada para mostrar en esta aplicación web
            los conocimientos adquiridos durante el bootcamp #SoyHenry💛.
          </p>
        </section>
      </section>
    </ContactContainerForm>
  );
};

const ContactContainerForm = styled.main`
  width: 130rem;
  height: 86rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    a {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      h1{
        font-size: 7rem;
        color: transparent;
        color: #000;
      }
      &:hover{
        background-color: #fff;
      }
    }
    display: flex;
    flex-direction: column;
    img {
      width: 20rem;
      height: 20rem;
    }
    section {
      display: flex !important;
      justify-content: space-evenly;
      .icon-contact {
        height: 10rem;
        width: 10rem;
      }
    }
    h1 {
      color: #43597d;
    }
    border: 1px solid black;
    border: 3px solid #fafafa10;
    background: #00000099;
    backdrop-filter: blur(5px);
    color: #fff;
    border-radius: 2rem;
    text-shadow: 4px 1px 8px rgba(0, 0, 0, 0.3);
    box-shadow: 15px 16px 27px -7px rgba(0, 0, 0, 0.69);
    -webkit-box-shadow: 15px 16px 27px -7px rgba(0, 0, 0, 0.69);
    -moz-box-shadow: 15px 16px 27px -7px rgba(0, 0, 0, 0.69);
    text-align: center;
  }

  section {
    display: grid;
    grid-template-rows: 50%;
    #info-page {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      width: 31rem;
      margin: 1rem auto;
      img {
        height: 20rem;
        width: 20rem;
      }
      h1 {
        color: #43597d;
      }
    }
  }
`;

export default FormContacto;
