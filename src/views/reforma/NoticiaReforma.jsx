import { colaboradoresData, partnersData } from "../../components/Partners/services/partnersListData";
import {
  reconocimientoDataOne,
  reconocimientoDataTwo,
} from "./services/ReconocimientoFundacionMapreData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnerList from "../../components/Partners/PartnerList";
import React from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const NoticiaReforma = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Reforma Centro de Día" />
      <TitleSection title="Crecemos contigo" size />
      <ContentProjects {...reconocimientoDataOne} />
      <ContentProjects {...reconocimientoDataTwo} />
      <PartnerList size marginBottom data={colaboradoresData} title="Socios Colaboradores" />
      <PartnerList size inverse marginBottom data={partnersData} title="Cofinanciaciones" />
      <Footer />
    </>
  );
};

export default NoticiaReforma;
