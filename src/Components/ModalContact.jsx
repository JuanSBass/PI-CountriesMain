import styled from "styled-components";

export const ModalContact = ({ state, changeState }) => {
  
  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer>
            <h1>Mensaje enviado.</h1>
            <p>¡Gracias!</p>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

const Overlay = styled.section`
  height: 8rem;
  width: 16rem;
  position: relative;
  top: 34rem;
  background: rgba(0, 0, 0, 0.5);
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  border-radius: 1.5rem;
`;

const ModalContainer = styled.section`
  display: flex !important; 
  flex-direction: column;
  min-height: 7rem;
  background: #fff;
  position: relative;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;

`;
