import React from "react";
import TitleSection from "../../components/TitleSection";
import styled from "styled-components";

const DemoVideo = () => {
  return (
    <>
      <TitleSection title="Semana de la Capacidad" size />
      <section>
        <Demo>
          <DemoContainer>
            <DemoRight>
              <iframe
                width="570"
                height="320"
                src="https://www.youtube.com/embed/KCKDmcgh2dk"
                title="Youtube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </DemoRight>
            <DemoLeft>
              <p>Actividades en I.E.S Fernando de Mena</p>
              <p></p>
              <p>
                Actividad para LA SEMANA DE LA CAPACIDAD 2023 realizada por los
                alumnos del CFGM Atención a Personas en Situación de Dependencia
                del I.E.S Fernando de Mena y el Servicio de Capacitación Afymos.
              </p>
            </DemoLeft>
          </DemoContainer>
        </Demo>
      </section>
      <section>
        <Demo>
          <DemoContainer>
            <DemoLeft>
              <iframe
                width="570"
                height="320"
                src="https://www.youtube.com/embed/eQhdLRWSuZg"
                title="Youtube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </DemoLeft>
            <DemoRight>
              <p>Agrupación musical Synesthesia Trio</p>
            </DemoRight>
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
    margin: 5%;
    font-size: calc(2rem * var(--fs, 1));
    font-style: italic;
    color: #071c2f;
  }
  p:nth-child(2) {
    font-size: calc(3rem * var(--fs, 1));
    font-weight: 600;
    margin: 0.5rem 0;
    color: #071c2f;
  }
  p:nth-child(3) {
    font-size: calc(1.6rem * var(--fs, 1));
    margin-bottom: 1rem;
    margin: 15%;
    margin-top: 0;
    margin-left: 0;
    color: #071c2f;
    text-align-last: match-parent;
  }
`;

const DemoRight = styled.div`
  margin: auto;
  margin: 7% 0;
`;
