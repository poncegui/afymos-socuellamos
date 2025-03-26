import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import backgroundChartJpg from "./assets/images-chart-png/chartTeam1.jpg";
import { juntaChart } from "./services/ApiChart";
import styled from "styled-components";

const Chart = () => {
  const [junta] = useState(juntaChart);

  return (
    <>
      <NavBarViews title="Junta Directiva" />
      <picture>
        <source srcSet="/images/chart/chartTeam1.webp" type="image/webp" />
        <BackgroundChart
          role="img"
          aria-label="Fondo de personas de Afymos"
          style={{ backgroundImage: `linear-gradient(rgba(87, 89, 95, 0.8), rgba(75, 77, 81, 0.8)), url(${backgroundChartJpg})` }}
        />
      </picture>
      <Main>
        <ListChartSection aria-label="Listado de miembros de la Junta Directiva">
          <ContainerListChart role="list">
            {junta.map((person, index) => (
              <ChartItem key={person.id} index={index} role="listitem">
                <figure>
                  <picture>
                    <source
                      srcSet={person.imgWebp}
                      type="image/webp"
                    />
                    <img
                      src={person.img}
                      alt={person.alt || `Foto de ${person.name}`}
                      loading="lazy"
                      width="100"
                      height="100"
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        width: "100px",
                        height: "100px",
                      }}
                    />
                  </picture>
                  <figcaption className="sr-only">{person.name}</figcaption>
                </figure>
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
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartItemTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;

  @media (max-width: 440px) {
    font-size: 0.8rem;
  }
`;

const ChartItemSubTitle = styled.h4`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  text-align: center;

  @media (max-width: 440px) {
    font-size: 0.75rem;
  }
`;
