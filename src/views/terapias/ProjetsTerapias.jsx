import {
  auditivaPsicologiaData,
  fisioterapiaData,
  introduccionData,
  logopediaData,
  neuroPsicologiaData,
  psicoPedagogíaData,
  psicologiaData,
  terapiaOcupacionalData,
  visualPedagogíaData,
} from "./services/terapiasData";
import { colaboradoresData, partnersData } from "../../components/Partners/services/partnersListData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnertList from "../../components/Partners/PartnerList";
import ProjectsIntro from "./components/ProjectsIntro";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";

const ProjectsTerapias = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Servicio de Terapia" />
      <ProjectsIntro />
      <ContentProjects {...introduccionData} reverse />
      <ContentProjects {...logopediaData} inverse />
      <ContentProjects {...fisioterapiaData} reverse />
      <ContentProjects {...terapiaOcupacionalData} inverse />
      <ContentProjects {...psicoPedagogíaData} reverse />
      <ContentProjects {...neuroPsicologiaData} inverse />
      <ContentProjects {...auditivaPsicologiaData} reverse />
      <ContentProjects {...visualPedagogíaData} inverse />
      <ContentProjects {...psicologiaData} reverse />
      <PartnertList size  marginBottom data={colaboradoresData} title='Socios Colaboradores' />
      <PartnertList size inverse marginBottom data={partnersData} title='Cofinanciaciones'/>
      <Footer />
    </>
  );
};

export default ProjectsTerapias;
