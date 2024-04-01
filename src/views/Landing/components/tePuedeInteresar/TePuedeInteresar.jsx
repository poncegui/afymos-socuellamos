import { linksData, socialIcons } from "./services/SocialData";

import { Link as ButtonNav } from "react-router-dom";
import { Link as Contact } from "react-scroll";
import CoverImages from "./CoverImages";
import Informacion from "./Informacion";
import React from "react";
import logo from "../../components/assets/logos/logo-afymos.png";
import styled from "styled-components";

const IntroductionViewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #c6b1c9;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: 50vh;

  @media (max-width: 768px) {
    height: 100vh;
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ContentContainer = styled.div`
  text-align: center;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: auto;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  & > svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 50px;

  img {
    display: block;
    height: 10rem;
  }

  h1 {
    font-size: 12rem;
    text-transform: uppercase;
    color: #071c2f;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 50px;
    h1 {
      font-size: 6rem;
    }
    img {
      height: 8rem;
    }
  }
`;

const StyledButton = styled(ButtonNav)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: #224464;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 16px;
  }

  &:hover {
    background-color: #224464;
    color: #c6b1c9;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ContactButtonContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffd3e8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroductionView = () => {
  return (
    <>
      <IntroductionViewContainer aria-label="Introduction View" role="banner">
        <Overlay />
        <ContentContainer>
          <HeaderTitle>
            <img src={logo} alt="logo-afymos" />
            <h1>Afymos</h1>
          </HeaderTitle>
          <ButtonContainer>
            {linksData.map((data) => (
              <StyledButton
                key={data.key}
                color="#f5f5f5"
                to={data.url}
                aria-label={data.name}
              >
                {data.name}
              </StyledButton>
            ))}
            <ContactButtonContainer>
              <StyledButton
                as={Contact}
                to="contacto"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                color="#f5f5f5"
                aria-label="contacto"
              >
                Contacto
              </StyledButton>
            </ContactButtonContainer>
          </ButtonContainer>
        </ContentContainer>
        <SocialIconsContainer>
          {socialIcons.map((socialIcon, index) => (
            <SocialIcon
              key={index}
              href={socialIcon.url}
              target="_blank"
              aria-label={socialIcon.label}
            >
              {socialIcon.icon}
            </SocialIcon>
          ))}
        </SocialIconsContainer>
      </IntroductionViewContainer>
      <CoverImages />
      <Informacion />
    </>
  );
};

export default IntroductionView;
