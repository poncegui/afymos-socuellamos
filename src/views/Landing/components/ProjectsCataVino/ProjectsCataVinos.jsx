import {
  colaboradoresData,
  partnersData,
} from '../../../../components/Partners/services/partnersListData';
import {
  reconocimientoDataFour,
  reconocimientoDataOne,
  reconocimientoDataThree,
  reconocimientoDataTwo,
} from './services/ProjectsCataVinos';

import { ContentProjects } from '../../../../components/Content/ContentProjects';
import FacebookReel from '../../../../components/Video/FacebookReel';
import Footer from '../../../../components/Footer/Footer';
import LazyResponsiveImage from '../../../../components/Image/LazyResponsiveImage';
import { Link } from 'react-router-dom';
import NavBarViews from '../../../../components/Header/NavBarViews';
import PartnerList from '../../../../components/Partners/PartnerList';
import React from 'react';
import ScrollToTop from '../../../../components/ScrollToUp';
import TitleSection from '../../../../components/TitleSection';
import heroImg from './assets/cata-vinos-6.png';
import styled from 'styled-components';

const ProjectsCataVinos = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Cata de Vinos" />
      <TitleSection
        title="Cata III Maridada - organiza Fundación MAPFRE"
        size
      />
      <Hero>
        <HeroImageWrap>
          <LazyResponsiveImage
            src={heroImg}
            alt="Cata de Vinos - imagen del evento"
            priority
            width="1200"
            height="360"
          />
        </HeroImageWrap>
        <HeroContent>
          <SmallTop>Evento solidario · Cata III Maridada</SmallTop>
          <HeroTitle>Cata de Vinos: cultura, sabor y solidaridad</HeroTitle>
          <HeroLead>
            El pasado sábado celebramos la III Cata de Vino Maridada a beneficio
            de AFYMOS, organizada junto a Fundación MAPFRE, la Agrupación de
            Catadores San Isidro y el chef Sergio Rodrigo. Una jornada donde la
            gastronomía y la inclusión fueron protagonistas.
          </HeroLead>
          <Actions>
            <Secondary
              onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
            >
              Conoce el programa
            </Secondary>
          </Actions>
        </HeroContent>
      </Hero>

      <FacebookReel url="https://www.facebook.com/reel/1749477539037985?locale=es_ES" />
      <ContentProjects {...reconocimientoDataOne} />
      <ContentProjects {...reconocimientoDataTwo} />
      <ContentProjects {...reconocimientoDataThree} />
      <ContentProjects {...reconocimientoDataFour} />
      <PartnerList
        size
        marginBottom
        data={colaboradoresData}
        title="Socios Colaboradores"
      />
      <PartnerList
        size
        inverse
        marginBottom
        data={partnersData}
        title="Cofinanciaciones"
      />
      <Footer />
    </>
  );
};

export default ProjectsCataVinos;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1100px;
  margin: 2rem auto;
  padding: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HeroImageWrap = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  max-height: 360px;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SmallTop = styled.span`
  color: #6b4b6e;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
`;

const HeroTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #071c2f;
`;

const HeroLead = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  color: #222;
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const CTA = styled(Link)`
  background: #071c2f;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
`;

const Secondary = styled.button`
  background: transparent;
  color: #071c2f;
  border: 2px solid #071c2f;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
`;
