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
      <NavBarViews title="Junta Directiva" />
      <BackgroundChart />
      <Main>
        <ListChartSection>
          <ContainerListChart>
            {junta.map((person) => (
              <ChartItem key={person.id}>
                <ProfileChart
                  name={person.name}
                  img={person.img}
                  alt={person.alt}
                  role={person.role}
                  profession={person.profession}
                />
                <ChartItemTitle>{person.name}</ChartItemTitle>
                <ChartItemSubTitle>{person.profession}</ChartItemSubTitle>
              </ChartItem>
            ))}
          </ContainerListChart>
        </ListChartSection>
      </Main>
      <Footer />
    </>
  );
};

export default Chart;

export const BackgroundChart = styled.div`
  background: linear-gradient(rgba(87, 89, 95, 0.8), rgba(75, 77, 81, 0.8)),
    url(${backgroundChart});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
  z-index: 20;
`;

const Main = styled.main`
  display: block;
`;

export const ListChartSection = styled.section`
  padding: 5rem 18%;
  background-color: #f7f7f7;

  @media (max-width: 440px) {
    padding: 2rem 5%;
  }
`;

export const ContainerListChart = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media (max-width: 440px) {
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartItemTitle = styled.h3`
  margin-top: 1rem;
  @media (max-width: 440px) {
    font-size: 10px;
  }
`;

const ChartItemSubTitle = styled.h4`
  margin-top: 0.8rem;
  @media (max-width: 440px) {
    font-size: 10px;
  }
`;
