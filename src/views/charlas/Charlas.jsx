import { charlasDataOne, charlasDataTwo } from "./services/charlasData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const Charlas = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="charlas" />
      <TitleSection title="Charlas Profesionales" size />
      <ContentProjects {...charlasDataOne} inverse />
      <ContentProjects {...charlasDataTwo} />
      <PartnersList />
      <Footer />
    </>
  );
};

export default Charlas;
