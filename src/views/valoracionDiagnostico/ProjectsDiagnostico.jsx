import {
  diagnosticoDataOne,
  diagnosticoDataThree,
  diagnosticoDataTwo,
} from "./services/diagnosticoData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";

const ProjectsDiagnostico = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Valoración y diagnostico" />
      <ContentProjects {...diagnosticoDataOne} inverse />
      <ContentProjects {...diagnosticoDataTwo} reverse />
      <ContentProjects {...diagnosticoDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsDiagnostico;
