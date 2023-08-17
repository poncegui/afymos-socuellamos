import {
  voluntariadoFive,
  voluntariadoFour,
  voluntariadoOne,
  voluntariadoSix,
  voluntariadoThree,
  voluntariadoTwo,
} from "./services/voluntariadoData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarTemplate from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";

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
