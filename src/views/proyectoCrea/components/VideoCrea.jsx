import React from "react";
import styled from "styled-components";

const DemoVideo = () => {
  return (
    <Demo id="demo">
      <DemoContainer>
        <DemoLeft>
          <p>Proyecto CREA;</p>
          <p>Nuestra filosofía</p>
          <p>
            Conoce nuestro Programa de Formación y Empleo para personas con
            algún tipo de discapacidad en Socuéllamos.
          </p>
        </DemoLeft>
        <DemoRight>
          <iframe
            width="570"
            height="320"
            src="https://www.youtube.com/embed/ZrI1CD7kdjQ"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DemoRight>
      </DemoContainer>
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
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 940px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 30px;

    iframe {
      width: 100%;
      height: auto;
    }
  }
`;

const DemoLeft = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p:nth-child(1) {
    font-size: 2rem;
    font-style: italic;
  }
  p:nth-child(2) {
    font-size: 3rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }
  p:nth-child(3) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const DemoRight = styled.div`
  margin: auto;
`;
