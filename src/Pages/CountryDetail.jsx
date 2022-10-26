import { getCountryDetail } from "../actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import styled from "styled-components";
import CardActivities from "./CardActivities";
import Loading2 from "../Components/Loading2";

export default function CountryDetail(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getCountryDetail(props.match.params.id));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, "1500");
  }, [dispatch, props.match.params.id]);

  const country = useSelector((state) => state.countryDetail);
  console.log(country);

  const separador = (num) => {
    let result = "";
    let str = String(num);
    let aux = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      if (aux % 3 === 0 && aux !== 0) {
        result = "," + result;
      }
      result = str[i] + result;
      aux++;
    }
    return result;
  };

  return (
    <PageSectionCountryDetail>
      <DetallePais key={country.countryId}>
        <div className="header">
          <img src={country.flag} alt="flag" />
          <h1>{country.name}</h1>
          <h2>{country.capital}</h2>
          <h2>{country.continent}</h2>
        </div>
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="data">
            <p>Subregión: {country.subregion}</p>
            <p>Población: {separador(country.population)} habitantes</p>
            <p>
              Área: {separador(country.area)} km<sup>2</sup>
            </p>
          </div>
        </div>
      </DetallePais>

      {loading ? (
        <Loading2 />
      ) : (
        <RelacionActivities>
          {country.activities?.map((act) => (
            <CardActivities
              key={act.activityId}
              id={act.activityId}
              name={act.name}
              season={act.season}
              duration={act.duration}
              dificult={act.dificult}
              created={act.Country_Activity.createdAt.slice(0, 7)}
            />
          ))}
        </RelacionActivities>
      )}
    </PageSectionCountryDetail>
  );
}

const PageSectionCountryDetail = styled.main`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1.5fr 1fr;
  width: 120rem;
  margin: 2rem auto;
  gap: 4rem;
`;

const DetallePais = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid;
  border-radius: 1rem;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  height: 48rem;
  color: #fff;
  color: #a0c0d6;
  width: 30rem;
  margin: 0 auto;
  p {
    color: black;
  }
  .header {
    position: absolute;
    width: 100%;
    height: 32rem;
    overflow: hidden;
    background: var(--fourth-color);
    z-index: 1;
    h1 {
      margin-top: 20rem;
      padding: 0 1rem;
      font-size: 2.7rem;
    }
    h2 {
      margin-bottom: 0;
    }
  }
  .data {
    p {
      font-weight: 700;
      color: #de7456;
    }
    position: absolute;
    width: 25rem;
    bottom: -13rem;
    left: 50%;
    transform: translate(-50%);
  }
  .wave-container {
    position: absolute;
    width: 100%;
    height: 70%;
    top: 0;
  }
  .wave {
    position: absolute;
    height: 62rem;
    width: 62rem;
    opacity: 0.6;
    border-radius: 42%;
    left: -16rem;
    top: -78%;
    background: linear-gradient(#1e2330, #1f2530);
    animation: wave 3s infinite linear;
  }

  @keyframes wave {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .wave:nth-child(2) {
    animation-delay: 0.2s;
  }
  .wave:nth-child(3) {
    animation-delay: 0.3s;
  }

  div img {
    position: absolute;
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    top: 3rem;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
  }
`;

const RelacionActivities = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  border-radius: 2rem;
`;
