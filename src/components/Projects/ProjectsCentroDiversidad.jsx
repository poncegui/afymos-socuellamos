import {
  centroDiversidadDataOne,
  centroDiversidadDataThree,
  centroDiversidadDataTwo,
} from "./services/centroDiversidadData";

import { ContentProjects } from "../Content/ContentProjects";
import Diversity from "../Diversity";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import ScrollToTop from "../ScrollToUp";

const ProjectsCentroDiversidad = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Nuestro Centro" />
      <ContentProjects {...centroDiversidadDataOne} inverse />
      <ContentProjects {...centroDiversidadDataTwo} reverse />
      <ContentProjects {...centroDiversidadDataThree} inverse />
      <Diversity />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCentroDiversidad;
