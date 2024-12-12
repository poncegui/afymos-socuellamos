import { colaboradoresData, partnersData } from "../../components/Partners/services/partnersListData";
import { familyDataOne, familyDataTwo } from "./services/familiasData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ProjectsFamilias = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Servicio de atención a familias" />
      <TitleSection title="Apoyo a familiares" size />
      <ContentProjects {...familyDataOne} inverse />
      <ContentProjects {...familyDataTwo} reverse />
      <PartnersList size  marginBottom data={colaboradoresData} title='Socios Colaboradores' />
      <PartnersList size inverse marginBottom data={partnersData} title='Cofinanciaciones'/>
      <Footer />
    </>
  );
};

export default ProjectsFamilias;
