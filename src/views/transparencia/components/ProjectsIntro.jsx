import  React from "react";
import TitleSection from "../../../components/TitleSection";
import doc1 from "./assets/docs_transparencia/memoria-diputacion-2023.pdf";
import doc10 from "./assets/docs_transparencia/informe-auditoria-viviendas-apoyo-2023.pdf";
import doc11 from "./assets/docs_transparencia/memoria-afymos-joven-2023.pdf";
import doc2 from "./assets/docs_transparencia/informe-auditoria-centro-dia-2024.pdf";
import doc3 from "./assets/docs_transparencia/memoria-centro-dia-2023.pdf";
import doc4 from "./assets/docs_transparencia/plan-estrategico-2023-2024.pdf";
import doc5 from "./assets/docs_transparencia/memoria-terapias-rehabilitacion.pdf";
import doc6 from "./assets/docs_transparencia/plan-voluntariado-2022-2024.pdf";
import doc7 from "./assets/docs_transparencia/memoria-vivienda-2023-i.pdf";
import doc8 from "./assets/docs_transparencia/memoria-vivienda-2023-II.pdf";
import doc9 from "./assets/docs_transparencia/memoria-serv-capacitacion-2023.pdf";
import styled from "styled-components";

const DescargaTransparencia = () => {

  const links = [
    { id: 1, url: doc1, name: 'Memoria Diputación' },
    { id: 2, url: doc2, name: 'Informe auditoría viviendas' },
    { id: 3, url: doc3, name: 'Memoria Afymos' },
    { id: 4, url: doc4, name: 'Informe auditoría Centro Día' },
    { id: 5, url: doc5, name: 'Memoria Centro Día' },
    { id: 6, url: doc6, name: 'Plan de Voluntariado' },
    { id: 7, url: doc7, name: 'Memoria Vivienda I' },
    { id: 8, url: doc8, name: 'Memoria Vivienda II' },
    { id: 9, url: doc9, name: 'Memoria Servicio capacitación' },
    { id: 10, url: doc10, name: 'Auditoría Viviendas' },
    { id: 11, url: doc11, name: 'Memoria Afymos Joven' },
  ];

  return (
    <>
    <TitleSection title="Descarga de documentos de transparencia" size />
    <section>
      <SectionFeaturesMobile>
        <ButtonContainer>
          {links.map((link) => (
            <a href={link.url} download key={link.id}>
              <Icons>
                <h3>{link.name}</h3>
              </Icons>
            </a>
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: auto;
  grid-gap: 5% 5%;
  margin: 5% 20%;
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
  width: 150px;
  height: 100px;
  box-shadow: 5px 5px 10px #c6c5c5, -5px -5px 10px #ffffff;
  text-decoration:none;


  :hover {
    border: 3px solid #c6b1c9;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    padding: 0 0.3rem;
    color:  #071c2f;
  }

    cursor: pointer;


  @media (max-width: 368px) {
    margin: 5%;
    margin-bottom: 15%;
    gap: 0.6rem;
    border-radius: 10px;
    width: 80%;
    box-shadow: 5px 5px 10px #949494, -5px -5px 10px #ffffff;
    border: solid 1px #071c2f;

    h3 {
      font-size: 0.5rem;
      padding: 0 0.3rem;
      color:  #071c2f;
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
      color:  #071c2f;
    }

  }
`;
