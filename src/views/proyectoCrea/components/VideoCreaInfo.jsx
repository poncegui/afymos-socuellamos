import React from 'react';
import styled from 'styled-components';

const VideoCreaInfo = () => {
  return (
    <InfoWrapper>
      <InfoContainer>
        <Title>Proyecto NUEVO CREA — Formación y Empleo</Title>
        <Lead>Impulsando la inclusión laboral en AFYMOS</Lead>

        <Paragraph>
          El proyecto NUEVO CREA (formación y empleo) se ha llevado a cabo en
          AFYMOS con el objetivo de impulsar la INCLUSIÓN LABORAL. Financiado
          por el Servicio Público de Empleo Estatal, el Gobierno de Castilla-La
          Mancha, el Ministerio de Trabajo y Economía Social y el Ministerio de
          Educación, Formación Profesional y Deporte; aprobado en la
          convocatoria de 2024 y desarrollado de abril a noviembre de 2025.
        </Paragraph>

        <Paragraph>
          El objetivo principal ha sido mejorar las oportunidades de inserción
          sociolaboral y promover empleos de calidad para personas con
          discapacidad, utilizando la metodología de empleo con apoyo y
          ofreciendo formación personalizada y adaptada a sus características y
          necesidades.
        </Paragraph>

        <CompaniesTitle>Empresas adheridas</CompaniesTitle>
        <CompanyList>
          <li>Cabezuelo Foods</li>
          <li>EFA Molino de Viento</li>
          <li>Centro Concertado Virgen de Loreto</li>
          <li>Asociación de Alzheimer de Tomelloso</li>
          <li>Asociación Alzheimer Villarrobledo</li>
          <li>Victor Mateo</li>
          <li>Félix Food Logistics</li>
          <li>Afymos Asociación</li>
        </CompanyList>

        <Callout>Inclusión es igualdad. Formación es futuro.</Callout>
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/oUmMhYVsFZE"
            title="Video Proyecto NUEVO CREA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
      </InfoContainer>
    </InfoWrapper>
  );
};

export default VideoCreaInfo;

const InfoWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 1rem 6rem;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.02) 100%);
`;

const InfoContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: left;
  color: #222;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 700px) {
    padding: 0 1.25rem;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  margin: 0;
  color: #0b3961;
  font-weight: 700;
`;

const Lead = styled.h4`
  font-size: 20px;
  margin: 0.25rem 0 0.75rem 0;
  color: #1f4b6b;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: #111;
`;

const CompaniesTitle = styled.h5`
  font-size: 18px;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  color: #0b3961;
  font-weight: 600;
`;

const CompanyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.25rem 1rem;
  margin: 0;
  padding-left: 1rem;
  list-style-type: disc;
  color: #333;

  li {
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Callout = styled.p`
  margin-top: 1rem;
  font-weight: 700;
  color: #0b3961;
  font-size: 16px;
`;

const VideoWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  iframe {
    width: 100%;
    max-width: 1100px;
    height: 560px;
    border: 0;
    border-radius: 6px;
  }

  @media (max-width: 900px) {
    iframe {
      height: 300px;
    }
  }
`;
