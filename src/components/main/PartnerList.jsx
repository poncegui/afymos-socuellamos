import React, { useState } from "react";
import styled from "styled-components";
import { partenrsData } from "./services/ApiPartners";
import PartnersCard from "./Partners";

const PartnerList = () => {
  const [partners] = useState(partenrsData);

  return (
    <>
      <SectionPartners>
        <h2>Cofinanciaciones</h2>
        <ContainerParnertList>
          {partners.map((partner) => {
            return (
              <PartnersCard
                key={partner.id}
                src={partner.src}
                alt={partner.alt}
                url={partner.url}
                target={partner.target}
              />
            );
          })}
        </ContainerParnertList>
      </SectionPartners>
    </>
  );
};

export default PartnerList;

export const SectionPartners = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 50px 0;

  h2 {
    font-size: 40px;
  }
`;

export const ContainerParnertList = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  gap: 50px;

  /* @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  @media (min-width: 1090px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 5px;
  } */
`;
