import React, { useState } from "react";
import styled from "styled-components";
import foto from "../../images-chart/chartTeam1.jpg";

import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import { personsChart } from "../Chart/services/ApiChart";
import ProfileChart from "./ProfileChart";

const Chart = (props) => {
  const [persons, setPersons] = useState(personsChart);

  return (
    <>
      <NavBarTemplate title="junta directiva" alt="" />
      <BackgroundChart>Junta Directiva</BackgroundChart>
      <ContainerListChart>
        {persons.map((person) => {
          return (
            <ProfileChart
              key={person.id}
              name={person.name}
              img={person.img}
              role={person.role}
              profession={props.profession}
            />
          );
        })}
      </ContainerListChart>

      <button>Descargar estatutos</button>
      <button>Cuentas anuales</button>

      <Footer />
    </>
  );
};

export default Chart;

export const BackgroundChart = styled.div`
  background: linear-gradient(rgba(87, 89, 95, 0.8), rgba(75, 77, 81, 0.8)),
    url("../../images-chart/chartTeam1.jpg");
  min-width: 100vh;
  background-size: 100%;
  background-position: cover;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
  z-index: 20;
`;

export const ContainerListChart = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (max-width: 368px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
