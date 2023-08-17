import {
  capacitacionDataOne,
  capacitacionDataTwo,
} from "./services/capacitacionData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ProjectsCapacitacion = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Servicio de Capacitación" />
      <TitleSection title="Programa habilitación laboral" size />
      <ContentProjects {...capacitacionDataOne} inverse />
      <ContentProjects {...capacitacionDataTwo} reverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCapacitacion;
