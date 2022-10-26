import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <GiftLoad>
      <iframe
        src="https://media.tenor.com/HucqVAcp1ksAAAAi/hug-world.gif"
        frameBorder="0"
        allowFullScreen
        height="500"
        width="500"
        title="loading..."
      ></iframe>
    </GiftLoad>
  );
};

export default Loading;

const GiftLoad = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

