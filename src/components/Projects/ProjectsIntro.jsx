import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/layout/features.css";

import { introData } from "./services/introData";

const ProjectsIntro = () => {
  const [devTool, setDevTool] = useState(true);
  const [others, setOthers] = useState(introData);
  // const [ detailsData, setDetailsData ] = useState(featuresDataDetails);

  const handleDetail = () => {
    setDevTool(!devTool);
  };

  const handleUrl = (ev) => {
    setOthers(ev.currentTarget);
  };

  return (
    <>
      <>
        <SectionFeaturesMobile>
          <h1>Nuestras Terapias</h1>
          <ButtonContainer>
            {others.map((picto) => (
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
            <h1>Nuestras Terapias</h1>
            <ButtonContainer>
              {others.map((picto) => (
                <Icons key={picto.id} value={picto.name}>
                  <h3>{picto.name}</h3>
                  <img src={picto.img} alt={picto.alt} onClick={handleDetail} />
                </Icons>
              ))}
            </ButtonContainer>
          </SectionFeaturesDesktop>
        ) : (
          <>
            <h1>Y además...</h1>
            {/* <SectionFeaturesDesktop>
        <h1>Menú de Servicios</h1>
          <ButtonContainer>
            {detailsData.map((detail) => (
              <Content key={detail.id}  buttonLabel={"saber más"} >
                <h3>{detail.name}</h3>
                <img src={detail.img} alt={detail.alt} />
                <Link className="Link" to="/" onClick={handleBack}>
          <NavBack>
            <i class="fa-solid fa-angles-left"></i>
            <h3>
              volver a <span>Principal</span>
            </h3>
          </NavBack>
        </Link>
              </Content>
            ))}
          </ButtonContainer>
        </SectionFeaturesDesktop> */}
          </>
        )}
      </>
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: auto;
  grid-gap: 5% 5%;
  margin: 5%;
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
  width: 70%;
  background: #e0e0e0;
  box-shadow: 41px 41px 82px #949494, -41px -41px 82px #ffffff;
  margin: 5% 0%;
  gap: 1rem;
  :hover {
    background-color: pink;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1rem;
    padding: 0 0.3rem;
  }

  img {
    color: #071c2f;
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
    box-shadow: 30px 20px 40px #949494, -41px -41px 82px #ffffff;
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
