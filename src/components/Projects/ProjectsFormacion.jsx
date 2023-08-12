import {
  formacionDataFour,
  formacionDataOne,
  formacionDataThree,
  formacionDataTwo,
} from "./services/formacionData";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import ScrollToTop from "../ScrollToUp";

const ProjectsFormacion = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Centro de Formación" id="/formacion" />
      <ContentProjects {...formacionDataOne} inverse />
      <ContentProjects {...formacionDataTwo} reverse />
      <ContentProjects {...formacionDataThree} inverse />
      <ContentProjects {...formacionDataFour} reverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsFormacion;
