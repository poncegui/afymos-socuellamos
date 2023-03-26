import { React } from "react";

//COMPONENTS
import NavBarTemplate from "./templates/NavBarTemplate";
import Footer from "./Footer";
import {
  familyDataOne,
  familyDataTwo,
  familyDataThree,
} from "./Content/services/ProjectsData";
import { ContentProjects } from "./Content/ContentProjects";

const ProjectsFamilias = () => {
  return (
    <>
      <NavBarTemplate title="Servicio de atención a familias" alt="" />
      <ContentProjects {...familyDataOne} inverse />
      <ContentProjects {...familyDataTwo} reverse />
      <ContentProjects {...familyDataThree} inverse />
      <Footer />
    </>
  );
};

export default ProjectsFamilias;
