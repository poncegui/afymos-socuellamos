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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section>
        <Titulo>
          <CircleIcon />
          Nuestros servicios...
        </Titulo>
        {windowWidth >= 500 ? (
          <IconsContainer>
            {servicesData.map((item) => (
              <Icons key={item.id} value={item.name}>
                <Link to={item.url} aria-label="ir a la ruta seleccionada">
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                </Link>
              </Icons>
            ))}
          </IconsContainer>
        ) : (
          <SectionServiceFilter />
        )}
      </section>
    </>
  );
};

export default SectionServices;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 2rem;
  margin: 2rem auto;
`;
const Icons = styled.div`
  flex: 1 1 25rem;
  padding: 2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none;
  img {
    height: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #071c2f;
    padding: 1rem 0;
  }
  p {
    font-size: 1.2rem;
    color: #071c2f;
    padding: 0.2rem 0;
  }
  p a {
    font-size: 1.5rem;
    color: #071c2f;
    padding: 0.2rem 0;
  }
  p:hover {
    font-size: 1.5rem;
    color: #071c2f;
    padding: 0.2rem 0;
  }
  :hover {
    background-color: #c6b1c9;
  }
`;

const Titulo = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  font-size: 24px;
  text-decoration: none;
  @media (max-width: 900px) {
    margin-top: 50px;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const CircleIcon = styled.div`
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #224464;
`;
