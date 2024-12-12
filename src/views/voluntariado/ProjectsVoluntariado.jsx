import { colaboradoresData, partnersData } from "../../components/Partners/services/partnersListData";
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
import PartnertList from "../../components/Partners/PartnerList";
import { React } from "react";
import TitleSection from "../../components/TitleSection";

const ProjectsVoluntariado = () => {
  return (
    <>
      <NavBarTemplate title="Servicio de Ocio y Voluntariado" />
      <TitleSection title="Nuestro programa de voluntariado" size />
      <ContentProjects {...voluntariadoOne} inverse />
      <ContentProjects {...voluntariadoTwo} reverse />
      <ContentProjects {...voluntariadoThree} inverse />
      <ContentProjects {...voluntariadoFour} reverse />
      <ContentProjects {...voluntariadoFive} inverse />
      <ContentProjects {...voluntariadoSix} reverse />
      <PartnertList size  marginBottom data={colaboradoresData} title='Socios Colaboradores' />
      <PartnertList size inverse marginBottom data={partnersData} title='Cofinanciaciones'/>
      <Footer />
    </>
  );
};

export default ProjectsVoluntariado;
