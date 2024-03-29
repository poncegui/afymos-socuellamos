import React, { useState } from "react";

import { ContentButton } from "../../../components/Content/ContentStyles";
import { Link } from "react-router-dom";
import TitleSection from "../../../components/TitleSection";
import styled from "styled-components";

const DemoVideo = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <TitleSection title="Proyecto Crea" size />
      <section>
        <Demo id="demo">
          <DemoContainer>
            <DemoRight>
              <iframe
                width="570"
                height="320"
                src="https://www.youtube.com/embed/SJI4HjfxSj8"
                title="Youtube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </DemoRight>
            <DemoLeft>
              <p>Proyecto CREA;</p>
              <p>Nuestra filosofía</p>
              <p>
                Conoce nuestro Programa de Formación y Empleo para personas con
                algún tipo de discapacidad en Socuéllamos.
              </p>
              <Link onClick={handleClick} to="/proyecto-crea">
                <ContentButton transition={{ delay: 1, duration: 0.6 }}>
                  Saber más
                </ContentButton>
              </Link>
            </DemoLeft>
          </DemoContainer>
        </Demo>
      </section>
    </>
  );
};

export default DemoVideo;

const Demo = styled.div`
  width: 100%;
  background: white;
`;

const DemoContainer = styled.div`
  width: 1240px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 940px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

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
    margin-top: 7%;
    font-size: 2rem;
    font-style: italic;
    color: #071c2f;
  }
  p:nth-child(2) {
    font-size: 3rem;
    font-weight: 600;
    margin: 0.5rem 0;
    color: #071c2f;
  }
  p:nth-child(3) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #071c2f;
  }
`;

const DemoRight = styled.div`
  margin: auto;
  margin: 7% 0;
`;
