import PartnersCard from './components/Partners';
import React from 'react';
import TitleSection from '../TitleSection';
import styled from 'styled-components';

const PartnerList = ({ size, inverse, data, title }) => {
  return (
    <>
      <TitleSection title={title} inverse={inverse} size={size} />
      <SectionPartners aria-label="Listado de entidades colaboradoras">
        <Inner>
          <PartnersGrid>
            {data?.map(partner => (
              <PartnerWrapper key={partner.id}>
                <PartnersCard
                  src={partner.logoSrc}
                  alt={partner.alt}
                  url={partner.url}
                  target={partner.target}
                  rel="noopener noreferrer"
                  loading="lazy"
                  title={partner.titleImg || partner.name}
                />
              </PartnerWrapper>
            ))}
          </PartnersGrid>
        </Inner>
      </SectionPartners>
    </>
  );
};

export default PartnerList;

const SectionPartners = styled.section`
  background: linear-gradient(180deg, #fbfbfd 0%, #ffffff 100%);
  padding: clamp(2rem, 5vw, 3.5rem) clamp(1rem, 3vw, 1.5rem);
  text-align: center;

  @media (max-width: 768px) {
    padding: clamp(1.5rem, 4vw, 2.5rem) clamp(0.75rem, 2vw, 1rem);
  }

  @media (max-width: 480px) {
    padding: clamp(1rem, 3vw, 1.5rem) clamp(0.5rem, 1.5vw, 0.75rem);
  }
`;
const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(0.5rem, 2vw, 1rem);
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(160px, 15vw, 200px), 1fr)
  );
  gap: clamp(1.5rem, 3vw, 2.5rem);
  justify-items: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: clamp(1.25rem, 2.5vw, 2rem);
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(140px, 12vw, 180px), 1fr)
    );
  }

  @media (max-width: 480px) {
    gap: clamp(1rem, 2vw, 1.5rem);
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(120px, 10vw, 160px), 1fr)
    );
  }
`;

const PartnerWrapper = styled.div`
  width: 100%;
  max-width: clamp(200px, 20vw, 240px);
  padding: clamp(0.4rem, 1vw, 0.6rem);
  display: flex;
  align-items: stretch;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    max-width: clamp(180px, 18vw, 220px);
    padding: clamp(0.35rem, 0.8vw, 0.5rem);
  }

  @media (max-width: 480px) {
    max-width: clamp(160px, 16vw, 200px);
    padding: clamp(0.3rem, 0.6vw, 0.4rem);
  }
`;
