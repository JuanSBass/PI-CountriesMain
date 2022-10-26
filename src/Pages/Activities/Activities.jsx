import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading";
import ActivitiesForm from "./ActivitiesForm";
import bkgCalendario from "../../Img/CalendarioActivities.png";

export const Activities = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, "1500");
  }, [setLoading]);

  return (
    <PageSectionActivity>
      <h1>Crear Actividad</h1>
      <br />
      {loading ? <Loading /> : <ActivitiesForm />}
    </PageSectionActivity>
  );
};

const PageSectionActivity = styled.main`
  text-align: center;
  background-image: url(${bkgCalendario});
  background-size: 45%;
  background-repeat: no-repeat;
  height: 91rem;
  background-attachment: fixed;
  background-position: center right;
  h1 {
    color: #43597d;
  }
`;
