import { colaboradoresData, partnersData } from "../../components/Partners/services/partnersListData";
import {
  formacionDataOne,
  formacionDataThree,
  formacionDataTwo,
} from "./services/formacionData";

import { Content } from "../../components/Content/Content";
import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnertList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ProjectsFormacion = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Centro de Formación" id="/formacion" />
      <TitleSection title="Fomentamos la formación" size />
      <ContentProjects {...formacionDataOne} inverse />
      <Content {...formacionDataTwo} reverse />
      <ContentProjects {...formacionDataThree} inverse />
      <PartnertList size  marginBottom data={colaboradoresData} title='Socios Colaboradores' />
      <PartnertList size inverse marginBottom data={partnersData} title='Cofinanciaciones'/>
      <Footer />
    </>
  );
};
export default ProjectsFormacion;
