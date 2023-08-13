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
import SliderNosotros from "../main/SliderNosotros";

const ProjectsCentroDiversidad = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Nuestro Centro" />
      <ContentProjects {...centroDiversidadDataOne} inverse />
      <ContentProjects {...centroDiversidadDataTwo} reverse />
      <ContentProjects {...centroDiversidadDataThree} inverse />
      <SliderNosotros />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCentroDiversidad;
