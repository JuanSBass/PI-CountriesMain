import React from "react";
import styled from "styled-components";

const Pagination = ({
  nextPage,
  prevPage,
  currentPage,
  countriesPerPage,
  countries,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginadoSection>
      <button className="next" onClick={() => prevPage(currentPage - 1)}>
        <div className="arrow-wrapper">
          <div className="arrow-back"></div>
        </div>
      </button>
      <p className="info_pages">
        {" "}
        Page {currentPage} of {Math.ceil(countries / countriesPerPage)}{" "}
      </p>
      <button className="next" onClick={() => nextPage(currentPage + 1)}>
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
    </PaginadoSection>
  );
};

const PaginadoSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30rem;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 10rem;

  .next {
    box-sizing: border-box;
    border: 0;
    border-radius: 2rem;
    color: #fff;
    padding: 1em 1.8em;
    background: #de7456;
    display: flex;
    transition: 0.4s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;

    .arrow-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .arrow,
    .arrow-back {
      margin-top: 1px;
      width: 1rem;
      background: #de7456;
      height: 2px;
      position: relative;
      transition: 0.2s;
    }

    .arrow::before {
      content: "";
      position: absolute;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      display: inline-block;
      top: -3px;
      right: 5px;
      transition: 0.4s;
      padding: 3px;
      transform: rotate(-45deg);
    }

    .arrow-back::before {
      content: "";
      position: absolute;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      display: inline-block;
      top: -3px;
      left: 5px;
      transition: 0.4s;
      padding: 3px;
      transform: rotate(135deg);
    }

    &:hover {
      background-color: #2b3240;
    }

    &:hover .arrow,
    :hover .arrow-back {
      background-color: #fff;
    }

    &:hover .arrow:before {
      right: 0;
    }

    &:hover .arrow-back:before {
      left: 0;
    }
  }
`;

export default Pagination;
