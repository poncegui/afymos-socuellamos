import {
  centroDiaDataOne,
  centroDiaDataThree,
  centroDiaDataTwo,
} from "./services/centroDiaData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ProjectsCentroDia = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Centro de Día" />
      <TitleSection title="Nuestro Centro de día" size />
      <ContentProjects {...centroDiaDataOne} inverse />
      <ContentProjects {...centroDiaDataTwo} reverse />
      <ContentProjects {...centroDiaDataThree} inverse />
      <PartnersList size inverse marginBottom />
      <Footer />
    </>
  );
};
export default ProjectsCentroDia;
