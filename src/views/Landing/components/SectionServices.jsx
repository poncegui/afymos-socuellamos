import React, { Suspense, lazy, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { servicesData } from "./services/pictoButtonsData";
import styled from "styled-components";

const SectionServiceFilter = lazy(() => import("./SectionServiceFilter"));

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
              <StyledLink
                to={item.url}
                aria-label={`Ir a la sección de ${item.name}`}
              >
                <IconWrapper>
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={`Icono de ${item.name}`}
                  />
                </IconWrapper>
                <CardText>{item.name}</CardText>
              </StyledLink>
            </IconCard>
          ))}
        </IconsGrid>
      ) : (
        <Suspense fallback={<div>Cargando servicios...</div>}>
          <SectionServiceFilter />
        </Suspense>
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
  min-height: 200px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e0d3e6;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: inherit;
  outline: none;

  &:focus-visible {
    outline: 3px solid #ffbf47;
    border-radius: 8px;
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const CardText = styled.h3`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #071c2f;
  margin: 0;
`;
