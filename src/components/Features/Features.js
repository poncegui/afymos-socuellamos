import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/layout/features.css";
import { featuresData } from "./data/FeaturesData";

const Features = () => {
  const [devTool, setDevTool] = useState(true);
  const [pictoData, setPictoData] = useState(featuresData);

  const handleUrl = (ev) => {
    setPictoData(ev.currentTarget);
  };

  return (
    <>
      <SectionFeaturesMobile>
        <h1>Menú de Principal de Servicios</h1>
        <ButtonContainer>
          {pictoData.map((picto) => (
            <Icons key={picto.id} value={picto.name}>
              <h3>{picto.name}</h3>
              <Link to={picto.url}>
                <img src={picto.img} alt={picto.alt} onClick={handleUrl} />
              </Link>
            </Icons>
          ))}
        </ButtonContainer>
      </SectionFeaturesMobile>

      {devTool ? (
        <SectionFeaturesDesktop>
          <h1>Menú de Principal de Servicios</h1>
          <ButtonContainer>
            {pictoData.map((picto) => (
              <Icons key={picto.id} value={picto.name}>
                <h3>{picto.name}</h3>
                <Link to={picto.url}>
                  <img src={picto.img} alt={picto.alt} onClick={handleUrl} />
                </Link>
              </Icons>
            ))}
          </ButtonContainer>
        </SectionFeaturesDesktop>
      ) : (
        <>
          <h1>Menú de Servicios</h1>
        </>
      )}
    </>
  );
};
export default Features;

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
  padding-bottom: 5%;

  @media (max-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
    background-color: white;
  }

  @media (min-width: 1090px) {
    display: none;
  }
`;

export const SectionFeaturesDesktop = styled.div`
  display: none;

  @media (min-width: 1090px) {
    display: contents;
    display: flex;
    width: 100%;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 15%;
    background-color: white;

    @media (max-width: 768px) {
      display: flex;
      width: 100%;
      position: relative;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 0px;
      background-color: white;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: auto;
  grid-gap: 5% 5%;
  margin: 5%;
  justify-content: center;

  @media (max-width: 768px) {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
  width: 70%;
  background: #e0e0e0;
  box-shadow: 41px 41px 82px #949494, -41px -41px 82px #ffffff;
  padding: 5% 0%;
  gap: 1rem;
  :hover {
    background-color: #ffc0bc;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1rem;
    padding: 0 0.3rem;
  }

  img {
    color: black;
    height: 100px;
    width: 100px;
    cursor: pointer;
  }

  @media (max-width: 368px) {
    margin: 5%;
    margin-bottom: 15%;
    gap: 0.6rem;
    border-radius: 10px;
    width: 80%;
    box-shadow: 41px 41px 82px #949494, -41px -41px 82px #ffffff;
    border: solid 1px #071c2f;

    h3 {
      font-size: 0.5rem;
      padding: 0 0.3rem;
    }

    img {
      color: black;
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
    height: 80%;
    box-shadow: 30px 20px 40px #949494, -41px -41px 82px #ffffff;
    border: solid 1px #071c2f;

    h3 {
      font-size: 0.5rem;
      padding: 0 0.8rem;
    }

    img {
      color: black;
      width: 40px;
      padding-bottom: 10px;
    }
  }
`;

const NavBack = styled.nav`
  background-color: #071c2f;
  height: 100px;
  width: 100%;
  position: sticky;
  top: 0;

  z-index: 50;

  display: flex;
  flex-direction: row;

  i {
    margin-left: 50px;
    font-size: 25px;
    color: #ffc0bc;

    @media (max-width: 768px) {
      margin-left: 40px;
    }
  }

  h3 {
    color: #ffc0bc;
    font-weight: 400;
    margin-left: 20px;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #ffc0bc;
    text-decoration: none;
    margin-right: 1.5rem;
  }
`;
