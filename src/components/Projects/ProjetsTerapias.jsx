import { React } from "react";

import {
  introduccionData,
  logopediaData,
  fisioterapiaData,
  terapiaOcupacionalData,
  psicoPedagogíaData,
  neuroPsicologiaData,
  auditivaPsicologiaData,
  visualPedagogíaData,
  psicologiaPsicologiaData,
} from "./services/terapiasData";
import { ContentProjects } from "../Content/ContentProjects";
import ProjectsIntro from "./ProjectsIntro";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import Footer from "../Footer";

const ProjectsTerapias = () => {
  return (
    <>
      <NavBarTemplate title="Servicio de Terapia" />
      <ProjectsIntro />
      <ContentProjects {...introduccionData} reverse />
      <ContentProjects {...logopediaData} inverse />
      <ContentProjects {...fisioterapiaData} reverse />
      <ContentProjects {...terapiaOcupacionalData} inverse />
      <ContentProjects {...psicoPedagogíaData} reverse />
      <ContentProjects {...neuroPsicologiaData} inverse />
      <ContentProjects {...auditivaPsicologiaData} reverse />
      <ContentProjects {...visualPedagogíaData} inverse />
      <ContentProjects {...psicologiaPsicologiaData} reverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsTerapias;
