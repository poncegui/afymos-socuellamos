import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import "../../styles/layout/features.css";
import { featuresData, featuresDataDetails } from "./data/FeaturesData";

const Tecno = () => {
  const [devTool, setDevTool] = useState(false);
  const [pictoData, setPictoData] = useState(featuresData);
  const [detailsData, setDetailsData] = useState(featuresDataDetails);
  const [dataHouse, setDataHouse] = useState("");

  const handleClick = () => {
    setDevTool(!devTool);
  };

  let toggleClassReact = devTool ? "clicked" : "";

  // const dataRoute = NavLink(`/organigrama/:id`);

  // const urlDetail = () => {
  //   if (dataRoute) {
  //     const routeIdcharacter = dataRoute.params.id;
  //     const findIdroute= pictoData.find((route) => {
  //       return route.id === routeIdcharacter;
  //     });
  //     return findIdroute || {};
  //   }
  // };

  const characterFiltered = pictoData.filter((character) => {
    if (dataHouse === pictoData.url) {
      return true;
    } else if (dataHouse === character.url) {
      return character.url;
    }
  });

  const handleUrl = (ev) => {
    setPictoData(ev.currentTarget);
    console.log("hola");
    console.log(ev.currentTarget);
  };

  return (
    <>
      <>
        <SectionMobile>
          <SectionFeatures>
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
          </SectionFeatures>
        </SectionMobile>

        <SectionDesktop>
          <SectionFeatures>
            <ButtonContainer>
              {pictoData.map((picto) => (
                <Icons key={picto.id} value={picto.name}>
                  <h3>{picto.name}</h3>
                  <img src={picto.img} alt={picto.alt} onClick={handleUrl} />
                </Icons>
              ))}
            </ButtonContainer>
          </SectionFeatures>
        </SectionDesktop>
      </>
    </>
  );
};

export default Tecno;

export const SectionDesktop = styled.div`
  display: none;
`;

export const SectionMobile = styled.div`
  @media (min-width: 820px) {
  }
`;

export const SectionFeatures = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin: 0px;
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
`;

export const ButtonContainer = styled.div`
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: auto;
  grid-gap: 50px 80px;
  margin: 5%;

  @media (max-width: 768px) {
    width: 100%;
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
  height: 200px;
  width: 200px;
  background: #e0e0e0;
  box-shadow: 41px 41px 82px #949494, -41px -41px 82px #ffffff;
  gap: 1rem;
  :hover {
    background-color: pink;
  }

  h3 {
    font-size: 1rem;
    padding: 0 0.3rem;
  }

  img {
    color: black;
    height: 100px;
    width: 100px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
    margin: 5%;
    margin-bottom: 15%;
    gap: 0.6rem;
    border-radius: 10px;
    height: 80px;
    width: 80px;
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
`;
