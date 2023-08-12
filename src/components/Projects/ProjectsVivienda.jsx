import {
  viviendasDataOne,
  viviendasDataThree,
  viviendasDataTwo,
} from "./services/viviendasData";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import ScrollToTop from "../ScrollToUp";

const ProjectsViviendas = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Servicio de atención a Viviendas" />
      <ContentProjects {...viviendasDataOne} inverse />
      <ContentProjects {...viviendasDataTwo} reverse />
      <ContentProjects {...viviendasDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsViviendas;
