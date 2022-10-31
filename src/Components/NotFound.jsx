import styled from "styled-components";
import notFound from "../Img/not-found.png";


export const NotFound = () => {

  return(
    <NotFoundContainer>
      <img src={notFound} alt="world404" />
      <h1>No hay datos que mostrar</h1>
    </NotFoundContainer>
  )
};


export const NotFoundContainer = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img{
    position: absolute;
    height:34rem;
    width:65rem;
    z-index:-1;
  }
  h1{
    color: #43597D;
  }
`