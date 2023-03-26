import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  voluntariadoOne,
  voluntariadoTwo,
  voluntariadoThree,
  voluntariadoFour,
  voluntariadoFive,
  voluntariadoSix,
} from "./services/voluntariadoData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const ProjectsVoluntariado = () => {
  return (
    <>
      <NavBarTemplate title="Servicio de Ocio y Voluntariado" />
      <ContentProjects {...voluntariadoOne} inverse />
      <ContentProjects {...voluntariadoTwo} reverse />
      <ContentProjects {...voluntariadoThree} inverse />
      <ContentProjects {...voluntariadoFour} reverse />
      <ContentProjects {...voluntariadoFive} inverse />
      <ContentProjects {...voluntariadoSix} reverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsVoluntariado;
