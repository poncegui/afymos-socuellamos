import { React, useState } from "react";

import logo from "../logos/logo-afymos.png";
import familias from "../images-services/fomento-autonomia1.jpg";
import artesania from "../images-services/artesania1.jpg";
import ocio from "../images-services/voluntariado1.jpg";

//COMPONENTS
import NavBarTemplate from "./templates/NavBarTemplate";
import Footer from "./Footer";
import {
  projectsDataOne,
  projectsDataTwo,
  projectsDataThree,
} from "./Content/services/ProjectsData";
import { ContentProjects } from "./Content/ContentProjects";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <NavBarTemplate title="Servicio de atención a familias" alt="" />
      <ContentProjects {...projectsDataOne} inverse />
      <ContentProjects {...projectsDataTwo} reverse />
      <ContentProjects {...projectsDataThree} inverse />
      <Footer />
    </>
  );
};

export default Projects;
