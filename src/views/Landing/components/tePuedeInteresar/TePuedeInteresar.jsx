import { linksData, socialIcons } from './services/SocialData';

import { Link as ButtonNav } from 'react-router-dom';
import { Link as Contact } from 'react-scroll';
import Informacion from './Informacion';
import React from 'react';
import logo from '../../components/assets/logos/logo-afymos.png';
import styled from 'styled-components';

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
            {linksData.map(data => (
              <StyledButton
                key={data.key}
                to={data.url}
                aria-label={`Ir a la sección ${data.name} de Afymos`}
                title={`${data.name} - Afymos`}
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
              aria-label="Ir a la sección de contacto de Afymos"
              title="Contacto - Afymos"
              role="button"
              tabIndex={0}
            >
              Contacto
            </StyledButton>

            <StyledButtonTransparencia
              to="/transparencia"
              aria-label="Ir a la sección de transparencia de Afymos"
              title="Transparencia - Afymos"
            >
              Transparencia
            </StyledButtonTransparencia>

            <StyledButtonService
              to="/servicio-capacitacion"
              aria-label="Ir al servicio de capacitación sociolaboral de Afymos"
              title="Servicio de Capacitación sociolaboral - Afymos"
            >
              Servicio de capacitación
            </StyledButtonService>
          </ButtonContainer>
        </ContentContainer>

        <SocialIconsContainer>
          {socialIcons.map((socialIcon, index) => (
            <SocialIcon
              key={index}
              href={socialIcon.url}
              target="_blank"
              aria-label={`${socialIcon.label} (abre en nueva pestaña)`}
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
  min-height: 50vh;
  background: linear-gradient(180deg, #c7b7c5 0%, #b9aab9 100%);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 100vh;
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 2rem 0 1.5rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  width: min(1100px, 100%);
  margin: 0 auto;
  padding: 2rem 1rem 1.5rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: min(980px, 100%);
  margin: 0 auto;
  padding: 0 0.75rem;

  @media (max-width: 600px) {
    gap: 0.75rem;
    width: min(100%, 520px);
  }
`;

const baseButtonStyles = `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 148px;
  padding: 0.8rem 1.9rem;
  border-radius: 999px;
  border: 1.5px solid rgba(17, 55, 77, 0.18);
  background: rgba(255, 255, 255, 0.38);
  color: #17364a;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.3), 0 6px 18px rgba(32, 52, 69, 0.08);
  font-size: calc(1.1rem * var(--fs, 1));
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease,
    border-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(232, 246, 236, 0.9);
    border-color: rgba(28, 93, 76, 0.5);
    box-shadow: 0 10px 24px rgba(28, 93, 76, 0.15);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #1e5d4a;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    min-width: 120px;
    font-size: calc(0.96rem * var(--fs, 1));
    padding: 0.7rem 1.2rem;
  }
`;

const greenButtonStyles = `
  ${baseButtonStyles}
  background: linear-gradient(135deg, #1e5d4a 0%, #244d3d 100%);
  border-color: #1e5d4a;
  color: #f6faf8;
  box-shadow: 0 10px 24px rgba(32, 70, 58, 0.22);

  &:hover {
    background: linear-gradient(135deg, #174b40 0%, #1d5d4a 100%);
    border-color: #174b40;
    box-shadow: 0 12px 26px rgba(22, 54, 45, 0.28);
  }
`;

const StyledButton = styled(ButtonNav)`
  ${baseButtonStyles}
`;

const StyledButtonTransparencia = styled(ButtonNav)`
  ${greenButtonStyles}
`;

const StyledButtonService = styled(ButtonNav)`
  ${greenButtonStyles}
  min-width: 210px;

  @media (max-width: 600px) {
    min-width: 170px;
  }
`;

const SocialIconsContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
    margin-right: 0;
    margin-top: 1rem;
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
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(17, 55, 77, 0.12);

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #1e5d4a;
    outline-offset: 3px;
  }

  & > svg {
    width: 24px;
    height: 24px;
    fill: #17364a;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  img {
    display: block;
    height: clamp(4.5rem, 9vw, 8rem);
    width: auto;
    object-fit: contain;
  }

  h1 {
    font-size: clamp(4.5rem, 11vw, 10rem);
    text-transform: uppercase;
    color: #17364a;
    margin: 0;
    line-height: 0.9;
    letter-spacing: -0.06em;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;

    h1 {
      font-size: clamp(3.5rem, 18vw, 6rem);
    }

    img {
      height: clamp(3rem, 15vw, 5rem);
    }
  }
`;
