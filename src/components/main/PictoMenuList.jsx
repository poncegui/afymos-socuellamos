import React, { useState } from "react";
import styled from "styled-components";
import { pictoAccessibility } from "./services/ApiMainMenu";
import PictoCard from "./PictoCard";

const PictoSection = () => {
  const [pictos] = useState(pictoAccessibility);

  return (
    <>
      <ContainerListMenu>
        {pictos.map((picto) => {
          return (
            <PictoCard
              key={picto.id}
              name={picto.name}
              src={picto.src}
              alt={picto.alt}
              url={picto.url}
            />
          );
        })}
      </ContainerListMenu>
    </>
  );
};

export default PictoSection;

export const ContainerListMenu = styled.div`
  margin: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  border: 1px solid grey;
  border-radius: 5px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }

  @media (min-width: 1090px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
`;