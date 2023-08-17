import {
  nosotrosDataOne,
  nosotrosDataThree,
  nosotrosDataTwo,
} from "./services/ApiNosotros";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import TitleSection from "../../components/TitleSection";
import UnDiaEnAfymos from "./components/UndiaEnAfymosVideo";

const Nosotros = () => {
  return (
    <>
      <NavBarViews title="Nosotros" />
      <TitleSection title="Nuestra Entidad" size />
      <ContentProjects {...nosotrosDataOne} inverse />
      <ContentProjects {...nosotrosDataTwo} reverse />
      <ContentProjects {...nosotrosDataThree} inverse />
      <UnDiaEnAfymos wrapReverse />
      <PartnersList inverse />
      <Footer />
    </>
  );
};

export default Nosotros;
