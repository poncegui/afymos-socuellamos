import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  familyDataOne,
  familyDataTwo,
  familyDataThree,
} from "./services/familiasData";
import { ContentProjects } from "../Content/ContentProjects";
import Partners from "../main/Partners";

const ProjectsFamilias = () => {
  return (
    <>
      <NavBarTemplate title="Servicio de atención a familias" />
      <ContentProjects {...familyDataOne} inverse />
      <ContentProjects {...familyDataTwo} reverse />
      <ContentProjects {...familyDataThree} inverse />
      <Partners />
      <Footer />
    </>
  );
};

export default ProjectsFamilias;
