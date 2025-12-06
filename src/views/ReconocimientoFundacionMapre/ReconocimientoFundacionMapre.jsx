import {
  colaboradoresData,
  partnersData,
} from "../../components/Partners/services/partnersListData";
import {
  reconocimientoDataFour,
  reconocimientoDataOne,
  reconocimientoDataThree,
  reconocimientoDataTwo,
} from "./services/ReconocimientoFundacionMapreData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnerList from "../../components/Partners/PartnerList";
import React from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ProjectsReconocimientoFundacion = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Reconocimiento Fundacion Mapfre" />
      <TitleSection title="Crecemos contigo" size />
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

export default ProjectsReconocimientoFundacion;
