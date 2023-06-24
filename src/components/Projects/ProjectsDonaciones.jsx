import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import { donacionDataOne } from "./services/donacionesData";
import { Content } from "../Content/Content";
import PartnersList from "../main/PartnerList";

const ProjectsDonaciones = () => {
  return (
    <>
      <NavBarTemplate title="Donaciones" />
      <Content {...donacionDataOne} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsDonaciones;
