import React from "react";
import TitleSection from "../../../components/TitleSection";
import doc1 from "./assets/docs_transparencia/memoriaActividadesSociolaboral.pdf";
import doc12 from "./assets/docs_transparencia/cuentas-anuales-2024.pdf";
import doc4 from "./assets/docs_transparencia/plan-estrategico-2023-2024.pdf";
import doc6 from "./assets/docs_transparencia/plan-voluntariado-2025-2027.pdf";
import doc8 from "./assets/docs_transparencia/auditoria-afymos.pdf";
import doc9 from "./assets/docs_transparencia/codigoEtico.pdf";
import styled from "styled-components";
import ExternalLink from "../../../components/ExternalLink";

const DescargaTransparencia = () => {
  const links = [
    { id: 1, url: doc1, name: "Memoria Programa de Integración Sociolaboral" },
    { id: 4, url: doc4, name: 'Plan Estratégico: "En ruta"' },
    { id: 6, url: doc6, name: "Plan de Voluntariado: 2025-2027" },
    { id: 8, url: doc8, name: "Informes Auditoria 2024" },
    { id: 9, url: doc9, name: "Código Ético" },
    { id: 12, url: doc12, name: "Cuentas Anuales 2024" },
  ];

  return (
    <>
      <TitleSection title="Descarga de documentos de transparencia" size />
      <section>
        <SectionFeaturesMobile>
          <ButtonContainer>
            {links.map((link) => (
              <ExternalLink
                key={link.id}
                href={link.url}
                ariaLabel={`Abrir ${link.name}`}
                title={link.name}
              >
                <Icons>
                  <h3>{link.name}</h3>
                </Icons>
              </ExternalLink>
            ))}
          </ButtonContainer>
        </SectionFeaturesMobile>
      </section>
    </>
  );
};

export default DescargaTransparencia;

export const SectionFeaturesMobile = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  background-color: white;
  margin: auto;
  padding: 5% 15%;
  h1 {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
    background-color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: auto;
  grid-gap: 5% 5%;
  margin: 5% 10%;
  justify-content: center;

  @media (max-width: 768px) {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto;
    grid-gap: 30px 30px;
    margin: 5%;
    margin-bottom: 15%;
    width: 90%;

    @media (max-width: 440px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  width: 350px;
  height: 150px;
  box-shadow: 5px 5px 10px #c6c5c5, -5px -5px 10px #ffffff;
  text-decoration: none;
  background-color: "#c6b1c9";

  :hover {
    border: 3px solid #c6b1c9;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    padding: 0 0.3rem;
    color: #071c2f;
  }
  cursor: pointer;

  @media (max-width: 440px) {
    margin: 3%;
    border-radius: 10px;
    width: 80%;
    box-shadow: 5px 5px 10px #949494, -5px -5px 10px #ffffff;
    border: solid 1px #071c2f;
    width: 350px;
    height: 150px;

    h3 {
      font-size: 1.5rem;
      padding: 0 0.3rem;
      color: #071c2f;
    }
  }

  @media (min-width: 1090) {
    margin: 5%;
    margin-bottom: 15%;
    gap: 0.6rem;
    border-radius: 10px;
    width: 70%;
    height: 70%;
    box-shadow: 30px 20px 40px #949494, -5px -5px 10px #ffffff;
    border: solid 1px #071c2f;

    h3 {
      font-size: 0.5rem;
      padding: 0 0.3rem;
      color: #071c2f;
    }
  }
`;
