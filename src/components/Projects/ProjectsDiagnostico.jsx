import {
  diagnosticoDataOne,
  diagnosticoDataThree,
  diagnosticoDataTwo,
} from "./services/diagnosticoData";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import ScrollToTop from "../ScrollToUp";

const ProjectsDiagnostico = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Valoración y diagnostico" />
      <ContentProjects {...diagnosticoDataOne} inverse />
      <ContentProjects {...diagnosticoDataTwo} reverse />
      <ContentProjects {...diagnosticoDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsDiagnostico;
