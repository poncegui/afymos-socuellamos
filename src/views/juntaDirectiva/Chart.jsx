import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import ProfileChart from "./components/ProfileChart";
import backgroundChart from "./assets/images-chart-png/chartTeam1.jpg";
import { juntaChart } from "./services/ApiChart";
import styled from "styled-components";

const Chart = () => {
  const [junta] = useState(juntaChart);

  return (
    <>
      <NavBarViews title="junta directiva" alt="" />
      <BackgroundChart />
      <ListChartSection>
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
      </ListChartSection>
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

export const ListChartSection = styled.section`
  padding: 5rem 18%;
  background-color: #f7f7f7;

  @media (max-width: 440px) {
    padding: 2rem 5%;
  }
`;

export const ContainerListChart = styled.div`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;

  @media (max-width: 440px) {
    gap: 2rem;
  }
`;
