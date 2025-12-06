import { React, useState } from "react";

import { Link } from "react-scroll";
import TitleSection from "../../../components/TitleSection";
import { introData } from "./services/introData";
import styled from "styled-components";

const ProjectsIntro = () => {
  const [others] = useState(introData);

  return (
    <>
      <TitleSection title="Nuestras Terapias" size />
      <section>
        <SectionFeaturesMobile>
          <ButtonContainer>
            {others.map((picto) => (
              <Icons key={picto.id} value={picto.name}>
                <h3>{picto.name}</h3>
                <Link
                  to={picto.url}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  aria-label="ir a la terapia selecionada"
                >
                  <img loading="lazy" src={picto.src} alt={picto.alt} />
                </Link>
              </Icons>
            ))}
          </ButtonContainer>
        </SectionFeaturesMobile>
      </section>
    </>
  );
};

export default ProjectsIntro;

export const SectionFeaturesMobile = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  background-color: white;
  margin: auto;
  padding: 5% 15%;
  h1 {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
    background-color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: auto;
  grid-gap: 5% 5%;
  margin: 5% 20%;
  justify-content: center;

  @media (max-width: 768px) {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto;
    grid-gap: 30px 30px;
    margin: 5%;
    margin-bottom: 15%;
    width: 90%;
  }
`;

export const Description = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  width: 150px;
  box-shadow: 5px 5px 10px #949494, -5px -5px 10px #ffffff;
  margin: 5% 5%;
  gap: 1rem;

  :hover {
    border: 3px solid #c6b1c9;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1rem;
    padding: 0 0.3rem;
  }

  img {
    height: 100px;
    width: 100px;
    padding-bottom: 5%;
    cursor: pointer;
  }

  @media (max-width: 368px) {
    margin: 5%;
    margin-bottom: 15%;
    gap: 0.6rem;
    border-radius: 10px;
    width: 80%;
    box-shadow: 5px 5px 10px #949494, -5px -5px 10px #ffffff;
    border: solid 1px #071c2f;

    h3 {
      font-size: 0.5rem;
      padding: 0 0.3rem;
    }

    img {
      color: #071c2f;
      height: 40px;
      width: 40px;
    }
  }

  @media (min-width: 1090) {
    margin: 5%;
    margin-bottom: 15%;
    gap: 0.6rem;
    border-radius: 10px;
    width: 70%;
    height: 70%;
    box-shadow: 30px 20px 40px #949494, -5px -5px 10px #ffffff;
    border: solid 1px #071c2f;

    h3 {
      font-size: 0.5rem;
      padding: 0 0.3rem;
    }

    img {
      color: #071c2f;
      height: 40px;
      width: 40px;
    }
  }
`;
