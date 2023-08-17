import {
  familyDataOne,
  familyDataThree,
  familyDataTwo,
} from "./services/familiasData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";

const ProjectsFamilias = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Servicio de atención a familias" />
      <ContentProjects {...familyDataOne} inverse />
      <ContentProjects {...familyDataTwo} reverse />
      <ContentProjects {...familyDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsFamilias;
