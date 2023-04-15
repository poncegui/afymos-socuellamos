import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  formacionDataOne,
  formacionDataTwo,
  formacionDataThree,
  formacionDataFour,
} from "./services/formacionData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const ProjectsFormacion = () => {
  return (
    <>
      <NavBarTemplate title="Centro de Formación" />
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
