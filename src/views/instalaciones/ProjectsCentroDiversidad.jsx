import {
  centroDiversidadDataOne,
  centroDiversidadDataThree,
  centroDiversidadDataTwo,
} from "./services/centroDiversidadData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ProjectsCentroDiversidad = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Nuestro Centro" />
      <TitleSection title="Centro de atención a la Diversidad Funcional" size />
      <ContentProjects {...centroDiversidadDataOne} inverse />
      <ContentProjects {...centroDiversidadDataTwo} reverse />
      <ContentProjects {...centroDiversidadDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCentroDiversidad;
