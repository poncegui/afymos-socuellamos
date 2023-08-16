import {
  nosotrosDataOne,
  nosotrosDataThree,
  nosotrosDataTwo,
} from "./services/ApiNosotros";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import UnDiaEnAfymos from "../VideosFeaatures/UndiaEnAfymosVideo";

const Nosotros = () => {
  return (
    <>
      <NavBarTemplate title="Nosotros" />
      <ContentProjects {...nosotrosDataOne} inverse />
      <ContentProjects {...nosotrosDataTwo} reverse />
      <ContentProjects {...nosotrosDataThree} inverse />
      <UnDiaEnAfymos />
      <PartnersList />
      <Footer />
    </>
  );
};

export default Nosotros;
