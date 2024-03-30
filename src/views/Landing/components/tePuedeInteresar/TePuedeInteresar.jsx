import React, { useState } from "react";

import { Link as ButtonNav } from "react-router-dom";
import { Link as Contact } from "react-scroll";
import Informacion from "./Informacion";
import logo from "../../components/assets/logos/logo-afymos.png";
import styled from "styled-components";

const IntroductionViewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #c6b1c9; 
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
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

  @media screen and (max-width: 900px) {
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
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 900px) {
    margin-top: 50px;
    right: 50%;
    transform: translate(50%, -50%);
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

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  & > svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }

  @media screen and (max-width: 900px) {
    display: none;
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
    height: 8rem;
  }

  h1 {
    font-size: 8rem;
    text-transform: uppercase;
    color: #071c2f;
  }

  @media (max-width: 440px) {
    h1 {
      font-size: 5rem;
    }

    img {
      height: 4rem;
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
  color: #071c2f;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }

  &:hover {
    background-color: #071c2f;
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
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

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
                onClick={handleClick}
                color={data.color}
                to={data.url}
                label={data.name}
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
                onClick={handleClick}
                color
              >
                Contacto
              </StyledButton>
            </ContactButtonContainer>
          </ButtonContainer>
        </ContentContainer>
        <SocialIconsContainer>
          <SocialIcon
            href="https://www.instagram.com/tv/CKKQgBcIW_Z/"
            target="_blank"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </SocialIcon>
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=100067093413028"
            target="_blank"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </SocialIcon>
          <SocialIcon
            href="https://www.youtube.com/@afymosasociacion2328"
            target="_blank"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6c-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8c11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </SocialIcon>
          <SocialIcon
            href="https://acortar.link/RGYfzQ"
            target="_blank"
            aria-label="Spotify"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
            </svg>
          </SocialIcon>
        </SocialIconsContainer>
      </IntroductionViewContainer>
      <Informacion />
    </>
  );
};

const linksData = [
  {
    key: 1,
    name: "Nosotros",
    color: "#ffd3e8",
    url: "nosotros",
  },
  {
    key: 2,
    name: "Terapias",
    color: "#ffd3e8",
    url: "terapias",
  },
  {
    key: 3,
    name: "Dona",
    color: "#ffd3e8",
    url: "donaciones",
  },
];

export default IntroductionView;
