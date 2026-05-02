import { linksData, socialIcons } from "./services/SocialData";

import { Link as ButtonNav } from "react-router-dom";
import { Link as Contact } from "react-scroll";
import Informacion from "./Informacion";
import React from "react";
import logo from "../../components/assets/logos/logo-afymos.png";
import styled from "styled-components";

const IntroductionView = () => {
  return (
    <>
      <IntroductionViewContainer
        role="banner"
        aria-label="Sección principal de bienvenida"
      >
        <Overlay aria-hidden="true" />
        <ContentContainer>
          <HeaderTitle>
            <img src={logo} alt="Logotipo de Afymos" />
            <h1 className="brand-title">Afymos</h1>
          </HeaderTitle>

          <ButtonContainer role="navigation" aria-label="Navegación principal">
            {linksData.map((data) => (
              <StyledButton
                key={data.key}
                to={data.url}
                aria-label={`Ir a la sección ${data.name}`}
                title={data.title}
              >
                {data.name}
              </StyledButton>
            ))}

            <StyledButton
              as={Contact}
              to="contacto"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              aria-label="Ir a la sección de contacto"
              role="button"
              tabIndex={0}
              title="Ir a contacto"
            >
              Contacto
            </StyledButton>

            <StyledButtonTransparencia
              to="/transparencia"
              aria-label="Ir a la sección de transparencia"
              title="Ir a Transparencia"
            >
              Transparencia
            </StyledButtonTransparencia>
          </ButtonContainer>
        </ContentContainer>

        <SocialIconsContainer>
          {socialIcons.map((socialIcon, index) => (
            <SocialIcon
              key={index}
              href={socialIcon.url}
              target="_blank"
              aria-label={socialIcon.label}
              title={socialIcon.title}
              rel="noopener noreferrer"
            >
              {socialIcon.icon}
            </SocialIcon>
          ))}
        </SocialIconsContainer>
      </IntroductionViewContainer>

      <Informacion />
    </>
  );
};

export default IntroductionView;

const IntroductionViewContainer = styled.header`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: #c6b1c9;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  color: #fff;

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
  gap: 12px;
  padding: 0 1rem;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

const StyledButton = styled(ButtonNav)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.75rem;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  font-size: calc(1rem * var(--fs, 1));
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease,
    color 0.2s ease, transform 0.15s ease;
  white-space: nowrap;
  min-width: 100px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-color: #fff;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    font-size: calc(0.9rem * var(--fs, 1));
    padding: 0.55rem 1.4rem;
  }
`;

const StyledButtonTransparencia = styled(ButtonNav)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.75rem;
  border-radius: 999px;
  background-color: #071c2f;
  border: 1.5px solid #071c2f;
  color: #fff;
  font-size: calc(1rem * var(--fs, 1));
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease,
    box-shadow 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #224464;
    border-color: #224464;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    font-size: calc(0.9rem * var(--fs, 1));
    padding: 0.55rem 1.4rem;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }

  & > svg {
    width: 24px;
    height: 24px;
    fill: #071c2f;
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
    font-size: calc(8rem * var(--fs, 1));
    text-transform: uppercase;
    color: #071c2f;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 50px;
    h1 {
      font-size: calc(5rem * var(--fs, 1));
    }
    img {
      height: 4rem;
    }
  }
`;
