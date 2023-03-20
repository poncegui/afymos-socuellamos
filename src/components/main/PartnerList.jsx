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
                name={partner.name}
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
  display: grid;
  justify-content: center;
  place-content: top;
`;

export const ContainerParnertList = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  @media (min-width: 1090px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
`;
