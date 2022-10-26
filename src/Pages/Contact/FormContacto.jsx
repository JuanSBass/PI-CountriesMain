import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { ModalContact } from "../../Components/ModalContact";

const FormContacto = () => {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const sendEmail = (event) => {
    event.preventDefault();
    setModal(!modal);
    setTimeout(() => {
      setModal(!modal);
    }, "1500");
    emailjs
      .sendForm(
        "service_9qmrtn3", //? service ID
        "template_l0b7d5s", //? template ID
        event.target,
        "KjhABlSMS8yiq-raI" //? API key
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

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
          <ModalContact state={modal} changeState={setModal} />
        </section>
        <form id="form-container" onSubmit={sendEmail}>
          <h1>Contáctame ;)</h1>
          <input
            type="text"
            name="user_name"
            placeholder="Nombre"
            value={input.user_name}
            onChange={handleInputChange}
          />
          <hr />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={input.user_email}
            onChange={handleInputChange}
          />
          <hr />

          <label>Mensaje</label>
          <textarea
            name="user_message"
            id=""
            cols="30"
            rows="10"
            value={input.user_message}
            onChange={handleInputChange}
          ></textarea>
          <hr />
          <button
            type="submit"
            disabled={
              !input.user_name || !input.user_email || !input.user_message
            }
          >
            Enviar
          </button>
        </form>
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
    #form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;

      input {
        margin: 1rem 0;
        width: 40rem;
        font-size: medium;
        line-height: 28px;
        border: 2px solid transparent;
        border-bottom-color: #777;
        padding: 0.2rem 0;
        outline: none;
        background-color: transparent;
        color: #0d0c22;
        transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        text-align: center;
        &:focus,
        :hover {
          outline: none;
          padding: 0.2rem 1rem;
          border-radius: 1rem;
          border-color: #7a9cc6;
        }
        &::placeholder {
          color: #777;
        }
        &:focus::placeholder {
          opacity: 0;
          transition: opacity 0.5s;
        }
      }
      textarea {
        width: 32rem;
        height: 15rem;
        font-size: medium;
        line-height: 28px;
        border: 2px solid transparent;
        border-bottom-color: #777;
        padding: 0.2rem 0;
        background-color: transparent;
        color: #0d0c22;
        transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:focus,
        :hover {
          padding: 0.2rem 1rem;
          border-radius: 1rem;
          border-color: #7a9cc6;
        }
      }
      h1 {
        color: #43597d;
      }
      label {
        margin: 0.5rem 0;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        width: 7rem;
        height: 3rem;
        font-weight: 700;
        margin: 0.5rem;
        background-image: linear-gradient(
          to top,
          #d8d9db 0%,
          #fff 80%,
          #fdfdfd 100%
        );
        border-radius: 2rem;
        border: 1px solid #8f9092;
        transition: all 0.2s ease;
        font-size: 14px;
        text-shadow: 0 1px #fff;

        &:hover {
          box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9,
            0 -4px 4px #cecfd1, 0 -6px 4px #fefefe, inset 0 0 3px 3px #cecfd1;
        }

        &:active {
          box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9,
            0 -4px 4px #cecfd1, 0 -6px 4px #fefefe, inset 0 0 5px 3px #999,
            inset 0 0 1rem #aaa;
        }

        &:focus {
          box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9,
            0 -4px 4px #cecfd1, 0 -6px 4px #fefefe, inset 0 0 5px 3px #999,
            inset 0 0 1rem #aaa;
        }
      }
    }
  }
`;

export default FormContacto;
