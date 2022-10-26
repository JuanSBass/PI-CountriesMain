import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addActivity, getAllCountries } from "../../actions";
import { Modal } from "../../Components/Modal";

const ActivitiesForm = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllCountries()), [dispatch]);
  const [modal, setModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    dificult: null,
    duration: null,
    season: "",
    countryIds: [],
  });

  const handleInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setErrors(validate({ ...input, [event.target.name]: event.target.value }));
  };

  const clickFlags = (event) => {
    event.preventDefault();
    if (input.countryIds.includes(event.target.id)){
      document.getElementById(event.target.id).style.filter = "grayscale(100%)";
      document.getElementById(event.target.id).style.scale = "none";
      setInput({
        ...input, countryIds: input.countryIds.filter(id => id !== event.target.id)
      })
    } else {
    setInput({
      ...input,
      countryIds: input.countryIds.concat(event.target.id),
    });
    document.getElementById(event.target.id).style.filter = "grayscale(0)";
    document.getElementById(event.target.id).style.scale = "calc(1.2)";}
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(!modal);
    input.countryIds.map((flag) => {
      document.getElementById(flag).style.filter = "grayscale(100%)";
      document.getElementById(flag).style.scale = "none";
    });
    dispatch(addActivity(input));
    setInput({
      name: "",
      dificult: null,
      duration: null,
      season: "",
      countryIds: [],
    });
  };

  const countries = useSelector((state) =>
    state.countries.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;
      return 0;
    })
  );

  const activities = useSelector((state) => state.activities);
  console.log(input);
  console.log(activities);

  return (
    <ActivityForm onSubmit={handleSubmit}>
      <Modal
      state={modal}
      changeState={setModal}
      />
      <div id="form-container">
        <input
          type="text"
          placeholder="Nombre"
          className={errors.name && "danger"}
          name="name"
          autoComplete="off"
          onChange={handleInputChange}
          value={input.name}
        />
        {errors.name && <p className="danger">{errors.name}</p>}

        <input
          list="season"
          className={errors.season && "danger"}
          name="season"
          placeholder="Temporada"
          onChange={handleInputChange}
          value={input.season}
        />
        <datalist id="season">
          <option value="Primavera"></option>
          <option value="Verano"></option>
          <option value="Otoño"></option>
          <option value="Invierno"></option>
        </datalist>
        {errors.season && <p className="danger">{errors.season}</p>}

        <div className="numberInput">
          <input
            type="number"
            min="1"
            max="12"
            size="2"
            className={errors.duration && "danger"}
            name="duration"
            placeholder="Duración (hrs)"
            onChange={handleInputChange}
            value={input.duration}
          />
          {errors.duration && <p className="danger">{errors.duration}</p>}

          <input
            type="number"
            min="1"
            max="5"
            size="1"
            className={errors.duration && "danger"}
            name="dificult"
            placeholder="Dificultad"
            onChange={handleInputChange}
            value={input.dificult}
          />
          {errors.dificult && <p className="danger">{errors.dificult}</p>}
        </div>

        {input.name && input.dificult && input.season && input.duration && <label>Selecciona el País(es):</label>}

        {input.name && input.dificult && input.season && input.duration ? (
          <section>
            {countries?.map((c) => (
              <div key={c.countryId}>
                <Link onClick={clickFlags} to="">
                  <div>
                    <img src={c.flag} alt="flag" id={c.countryId} />
                    <p>{c.countryId}</p>
                  </div>
                </Link>
              </div>
            ))}
          </section>
        ) : (
          <></>
        )}

        <button
          type="submit"
          disabled={
            !input.name ||
            !input.dificult ||
            !input.season ||
            !input.duration ||
            input.countryIds.length < 1
          }
        >
          Crear
        </button>
      </div>
    </ActivityForm>
  );
};

//? <---------- Validation --------------->

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "El nombre de la actividad es requerida";
  } else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.name))
    errors.name = "Escribe un nombre válido";

  if (!input.duration) {
    errors.duration = "Coloca una duración";
  } else if (input.duration < 1 || input.duration > 12)
    errors.duration = "La duración debe ser entre 1 y 12 hrs";

  if (!input.dificult) {
    errors.dificult = "Coloca una dificultad";
  } else if (input.dificult < 1 || input.dificult > 5)
    errors.dificult = "El nivel de dificultad debe ser entre 1 y 5";

  if (!input.season) {
    errors.season = "Elige una temporada";
  } else if (
    input.season !== "Verano" &&
    input.season !== "Primavera" &&
    input.season !== "Otoño" &&
    input.season !== "Invierno"
  )
    errors.season = "Temporada inválida";

  return errors;
};

//? ***************************************

const ActivityForm = styled.form`
  border: 1px solid black;
  width: 71rem;
  margin: 0 auto;
  border: 3px solid #fafafa10;
  background: #fafafa10;
  backdrop-filter: blur(5px);
  color: #131516;
  border-radius: 2rem;
  text-shadow: 4px 1px 8px rgba(0, 0, 0, 0.3);
  box-shadow: 15px 16px 27px -7px rgba(0, 0, 0, 0.69);
  -webkit-box-shadow: 15px 16px 27px -7px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: 15px 16px 27px -7px rgba(0, 0, 0, 0.69);
  #form-container {
    p.danger {
      color: red;
      font-size: 10px;
    }

    input.danger {
      border: 2px solid red;
      border-radius: 1rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 84rem;
    width: 66rem;
    margin: 0 auto;

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

    section {
      width: 95%;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      overflow-y: scroll;
      padding: 1rem 0;
      img {
        border-radius: 0.5rem;
      }

      &::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
      }
      &::-webkit-scrollbar-track {
        background: #9993a5;
        border-radius: 100vw;
        margin-block: 0.5em;
      }
      &::-webkit-scrollbar-thumb {
        background: #43597D;
        border-radius: 5rem;
        &:hover {
          background: #263449;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        width: 5rem;
        height: 5rem;
        text-align: center;
        transition: 0.5s;
        scale: none;
        &:hover {
          scale: calc(1.1);
        }
        img {
          filter: grayscale(100%);
          height: 3rem;
          object-fit: cover;
          transition: 0.5s;
          &:hover {
            filter: grayscale(0);
          }
        }
        p {
          margin: 3px 0 0 0;
          font-weight: 700;
        }
      }
    }
    .numberInput {
      display: flex;
      align-items: center;
      input {
        width: 12.1rem;
        margin: 1rem 4rem;
      }
    }
    label {
      margin: 1rem 0 1.5rem 0;
      font-size: 1.2rem;
    }
    button {
      cursor: pointer;
      margin: 2rem 0;
      display: inline-block;
      padding: 12px 24px;
      border: 1px solid #4f4f4f;
      border-radius: 4px;
      transition: all 0.2s ease-in;
      position: relative;
      overflow: hidden;
      font-size: 19px;
      z-index: 1;

      &:before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scaleY(1) scaleX(1.25);
        top: 100%;
        width: 140%;
        height: 180%;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 50%;
        display: block;
        transition: all 0.3s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
        z-index: -1;
      }

      &:after {
        content: "";
        position: absolute;
        left: 55%;
        transform: translateX(-50%) scaleY(1) scaleX(1.45);
        top: 180%;
        width: 160%;
        height: 190%;
        background-color: #43597d;
        border-radius: 50%;
        display: block;
        transition: all 0.3s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
        z-index: -1;
      }

      &:hover {
        border: 1px solid #43597d;
      }

      &:hover:before {
        top: -35%;
        background-color: #43597d;
        transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
      }

      &:hover:after {
        top: -45%;
        background-color: #43597d;
        transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
      }
    }
  }
`;

export default ActivitiesForm;
