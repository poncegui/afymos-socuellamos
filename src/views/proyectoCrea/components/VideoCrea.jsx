import React from 'react';
import styled from 'styled-components';
import VideoCreaInfo from './VideoCreaInfo';

const DemoVideo = () => {
  return (
    <Demo>
      <DemoContainer>
        <DemoLeft>
          <MainTitle>Proyecto NUEVO CREA — Formación y Empleo</MainTitle>
          <Subtitle>Impulsando la inclusión laboral en AFYMOS</Subtitle>
        </DemoLeft>
      </DemoContainer>
      <VideoCreaInfo />
    </Demo>
  );
};

export default DemoVideo;

const Demo = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  width: 100%;
`;

const DemoContainer = styled.div`
  width: 1240px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (max-width: 940px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`;

const DemoLeft = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const MainTitle = styled.h1`
  font-size: calc(1.75rem * var(--fs, 1));
  font-style: italic;
  margin: 0;
  color: #0b3961;
  line-height: 1.25;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  font-size: calc(1.25rem * var(--fs, 1));
  font-weight: 700;
  margin: 0;
  color: #0f3a57;
  line-height: 1.35;
`;
