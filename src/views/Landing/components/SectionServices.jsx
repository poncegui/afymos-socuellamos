import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import SectionServiceFilter from "./SectionServiceFilter";
import { servicesData } from "./services/pictoButtonsData";
import styled from "styled-components";

const SectionServices = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section aria-labelledby="services-heading">
      <Titulo id="services-heading">
        <CircleIcon aria-hidden="true" />
        Nuestros servicios
      </Titulo>
      {windowWidth >= 500 ? (
        <IconsGrid>
          {servicesData.map((item) => (
            <IconCard key={item.id}>
              <StyledLink to={item.url} aria-label={`Ir a la sección de ${item.name}`}>
                <img src={item.img} alt={`Icono de ${item.name}`} />
                <h3>{item.name}</h3>
              </StyledLink>
            </IconCard>
          ))}
        </IconsGrid>
      ) : (
        <SectionServiceFilter />
      )}
    </Section>
  );
};

export default SectionServices;

const Section = styled.section`
  padding: 2rem 1rem;
`;

const Titulo = styled.h2`
  margin: 0 auto 2rem;
  position: relative;
  font-size: 26px;
  text-align: center;
  color: #071c2f;
`;

const CircleIcon = styled.span`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #224464;
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const IconCard = styled.div`
  background-color: #f3eef5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 2rem;
  min-height: 180px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0d3e6;
  }

  img {
    height: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    color: #071c2f;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: inherit;
  outline: none;

  &:focus-visible {
    outline: 3px solid #ffbf47;
    border-radius: 8px;
  }
`;
