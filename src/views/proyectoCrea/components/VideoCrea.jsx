import React from "react";
import styled from "styled-components";
import VideoCreaInfo from "./VideoCreaInfo";

const DemoVideo = () => {
  return (
    <Demo id="demo">
      <DemoContainer>
        <DemoLeft>
          <p>Proyecto NUEVO CREA — Formación y Empleo</p>
          <p>Impulsando la inclusión laboral en AFYMOS</p>
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

  p:nth-child(1) {
    font-size: 1.75rem;
    font-style: italic;
    margin: 0;
    color: #0b3961;
    line-height: 1.25;
  }
  p:nth-child(2) {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    color: #0f3a57;
    line-height: 1.35;
  }
`;

const DemoRight = styled.div`
  margin: auto;
`;
