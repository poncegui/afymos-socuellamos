import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  voluntariadoDataOne,
  voluntariadoDataTwo,
  voluntariadoDataThree,
  voluntariadoDataFour,
  voluntariadoDataFive,
  voluntariadoDataSix,
  voluntariadoDataSeven,
} from "./services/voluntariadoData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const ProjectsVoluntariado = () => {
  return (
    <>
      <NavBarTemplate title="Servicio de Ocio y Voluntariado" />
      <ContentProjects {...voluntariadoDataOne} inverse />
      <ContentProjects {...voluntariadoDataTwo} reverse />
      <ContentProjects {...voluntariadoDataThree} inverse />
      <ContentProjects {...voluntariadoDataFour} reverse />
      <ContentProjects {...voluntariadoDataFive} inverse />
      <ContentProjects {...voluntariadoDataSix} reverse />
      <ContentProjects {...voluntariadoDataSeven} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsVoluntariado;
