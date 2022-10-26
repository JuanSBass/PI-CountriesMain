import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Modal = ({ state, changeState }) => {
  const activities = useSelector((state) =>
    state.activities.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;
      return 0;
    })
  );

  const countryIds = activities.at(-1).countryIds;

  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer>
            <h1>¡Actividad creada!</h1>
            <img
              src="https://media.tenor.com/A-1z4jlGrXgAAAAi/onay2.gif"
              alt="checked"
            />
            <span>Veamos lo que creaste 👀</span>
            <section>
              {countryIds?.map((id) => (
                <Link to={`/country/${id}`}>
                  <button>{id}</button>
                </Link>
              ))}
            </section>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

const Overlay = styled.div`
  height: 76.3rem;
  width: 63.3rem;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  border-radius: 1.5rem;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  min-height: 10rem;
  background: #fff;
  position: relative;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
  section {
    z-index: 2;
    margin: 1rem 0 1rem 8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      cursor: pointer;
      width: 7rem;
      height: 3rem;
      font-weight: 700;
      margin: .5rem;
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
      color: #606060;
      text-shadow: 0 1px #fff;

      &:hover {
        box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
          0 -6px 4px #fefefe, inset 0 0 3px 3px #cecfd1;
      }

      &:active {
        box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
          0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 1rem #aaa;
      }

      &:focus {
        box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
          0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 1rem #aaa;
      }
    }
  }
  img {
    position: absolute;
    width: 11rem;
    height: 11rem;
  }
  h1, span {
    margin-left: 6rem;
  }
`;
