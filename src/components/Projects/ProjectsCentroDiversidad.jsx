import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  centroDiversidadDataOne,
  centroDiversidadDataTwo,
  centroDiversidadDataThree,
} from "./services/centroDiversidadData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";
import Diversity from "../Diversity";

const ProjectsCentroDiversidad = () => {
  return (
    <>
      <NavBarTemplate title="Centro de Formación" />
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
