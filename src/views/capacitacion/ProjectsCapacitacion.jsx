import {
  capacitacionDataOne,
  capacitacionDataTwo,
} from "./services/capacitacionData";
import {
  colaboradoresData,
  partnersData,
} from "../../components/Partners/services/partnersListData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnertList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ProjectsCapacitacion = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Servicio de Capacitación" />
      <TitleSection title="Programa habilitación laboral" size />
      <ContentProjects {...capacitacionDataOne} inverse />
      <ContentProjects {...capacitacionDataTwo} reverse />
      <PartnertList
        size
        marginBottom
        data={colaboradoresData}
        title="Socios Colaboradores"
      />
      <PartnertList
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

export default ProjectsCapacitacion;
