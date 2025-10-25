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
                  title={partner.name || partner.titleImg || partner.alt}
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
  padding: 3.5rem 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`;
const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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
  max-width: 240px;
  padding: 0.6rem;
  display: flex;
  align-items: stretch;
`;
