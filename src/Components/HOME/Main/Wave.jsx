import React from "react";
import styled from "styled-components";

const Wave = () => {
  return (
    <GraficoWave>
      <div className="curve"></div>
    </GraficoWave>
  );
};

export default Wave;

const GraficoWave = styled.div`
  position: relative;
  .curve {
    position: absolute;
    height: 26rem;
    width: 100%;
    bottom: 0;
    z-index: 1;
  }
  .curve::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 83%;
    background-color: #efefef;
    transform: translate(82%,82%);
  }
  .curve::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 83%;
    background-color: #2b3240;
    transform: translate(-9%,68%);
    z-index: -1;
  }
`;
