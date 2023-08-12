import {
  capacitacionDataOne,
  capacitacionDataTwo,
} from "./services/capacitacionData";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import ScrollToTop from "../ScrollToUp";

const ProjectsCapacitacion = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Servicio de Capacitación" />
      <ContentProjects {...capacitacionDataOne} inverse />
      <ContentProjects {...capacitacionDataTwo} reverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCapacitacion;
