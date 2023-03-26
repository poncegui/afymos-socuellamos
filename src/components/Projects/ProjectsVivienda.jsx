import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  viviendasDataOne,
  viviendasDataTwo,
  viviendasDataThree,
} from "./services/viviendasData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const ProjectsViviendas = () => {
  return (
    <>
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
