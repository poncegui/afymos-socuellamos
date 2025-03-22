import PartnersCard from "./components/Partners";
import React from "react";
import TitleSection from "../TitleSection";
import styled from "styled-components";

const PartnerList = ({ size, inverse, data, title }) => {
  return (
    <>
      <TitleSection title={title} inverse={inverse} size={size} />
      <SectionPartners aria-label="Listado de entidades colaboradoras">
        <PartnersGrid>
          {data?.map((partner) => (
            <PartnerWrapper key={partner.id} title={partner.titleImg}>
              <PartnersCard
                src={partner.logoSrc}
                alt={partner.alt}
                url={partner.url}
                target={partner.target}
                rel="noopener noreferrer"
                loading="lazy"
              />
            </PartnerWrapper>
          ))}
        </PartnersGrid>
      </SectionPartners>
    </>
  );
};

export default PartnerList;

const SectionPartners = styled.section`
  background-color: white;
  padding: 3rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;
const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2.5rem;
  justify-items: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;

const PartnerWrapper = styled.div`
  width: 100%;
  max-width: 220px;
  padding: 0.5rem;

  &:hover::after {
    content: attr(title);
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #071c2f;
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.85rem;
    white-space: nowrap;
    z-index: 1;
  }
`;
