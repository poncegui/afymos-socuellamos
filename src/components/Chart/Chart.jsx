import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import { juntaChart } from "../Chart/services/ApiChart";
import ProfileChart from "./ProfileChart";
import backgroundChart from "../../images-chart/chartTeam1.jpg";

const Chart = (props) => {
  const [junta] = useState(juntaChart);

  return (
    <>
      <NavBarTemplate title="junta directiva" alt="" />
      <BackgroundChart>Junta Directiva</BackgroundChart>
      <ContainerListChart>
        {junta.map((person) => {
          return (
            <ProfileChart
              key={person.id}
              name={person.name}
              img={person.img}
              alt={person.alt}
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
    url(${backgroundChart});
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
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 10%;

  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 368px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
