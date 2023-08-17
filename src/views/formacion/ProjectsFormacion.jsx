import {
  formacionDataFour,
  formacionDataOne,
  formacionDataThree,
  formacionDataTwo,
} from "./services/formacionData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";

const ProjectsFormacion = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Centro de Formación" id="/formacion" />
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
