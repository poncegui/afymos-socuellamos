import React, { useState } from "react";

import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import ProfileChart from "./ProfileChart";
import backgroundChart from "../../assets/images-chart-png/chartTeam1.jpg";
import { juntaChart } from "../Chart/services/ApiChart";
import styled from "styled-components";

const Chart = () => {
  const [junta] = useState(juntaChart);

  return (
    <>
      <NavBarTemplate title="junta directiva" alt="" />
      <BackgroundChart />
      <ContainerListChart>
        {junta.map((person) => {
          return (
            <ProfileChart
              key={person.id}
              name={person.name}
              img={person.img}
              alt={person.alt}
              role={person.role}
              profession={person.profession}
            />
          );
        })}
      </ContainerListChart>
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
  place-content: center;
  margin: auto;
  gap: 1.5rem;

  @media (max-width: 1090px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    padding: 10% 0;
  }
`;
