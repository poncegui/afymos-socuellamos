import {
  auditivaPsicologiaData,
  fisioterapiaData,
  introduccionData,
  logopediaData,
  neuroPsicologiaData,
  psicoPedagogíaData,
  psicologiaPsicologiaData,
  terapiaOcupacionalData,
  visualPedagogíaData,
} from "./services/terapiasData";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import ProjectsIntro from "./ProjectsIntro";
import { React } from "react";

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
      <ContentProjects {...neuroPsicologiaData} inverse />j
      <ContentProjects {...auditivaPsicologiaData} reverse />
      <ContentProjects {...visualPedagogíaData} inverse />
      <ContentProjects {...psicologiaPsicologiaData} reverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsTerapias;
