import React, { useState } from "react";
import styled from "styled-components";
import { partenrsData } from "./services/ApiPartners";
import PartnersCard from "./Partners";

const PartnerList = () => {
  const [partners] = useState(partenrsData);

  return (
    <>
      <SectionPartners>
        <section>
          <h2>Cofinanciaciones</h2>
        </section>

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
  margin: 0 0 0px 0;
  section {
    background-color: #071c2f;
    height: 80px;
    width: 100%;
    color: pink;
    display: grid;
    place-content: center;
  }

  h2 {
    font-size: 40px;
  }

  @media (max-width: 368px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0px;

    section {
      height: 60px;
    }
    h2 {
      font-size: 28px;
    }
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 368px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    padding: 30px 0;
  }
`;
