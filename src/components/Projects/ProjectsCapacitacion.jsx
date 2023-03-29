import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  capacitacionDataOne,
  capacitacionDataTwo,
} from "./services/capacitacionData";
import { ContentProjects } from "../Content/ContentProjects";
import Diversity from "../Diversity";
import PartnersList from "../main/PartnerList";

const ProjectsCapacitacion = () => {
  return (
    <>
      <NavBarTemplate title="Servicio de Capacitación" />
      <ContentProjects {...capacitacionDataOne} inverse />
      <ContentProjects {...capacitacionDataTwo} reverse />
      <Diversity />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCapacitacion;
