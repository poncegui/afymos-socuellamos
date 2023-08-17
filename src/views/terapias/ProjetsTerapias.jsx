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

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
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
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsTerapias;
