import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  nosotrosDataOne,
  nosotrosDataTwo,
  nosotrosDataThree,
} from "./services/ApiNosotros";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const Nosotros = () => {
  return (
    <>
      <NavBarTemplate title="Nosotros" />
      <ContentProjects {...nosotrosDataOne} inverse />
      <ContentProjects {...nosotrosDataTwo} reverse />
      <ContentProjects {...nosotrosDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default Nosotros;
