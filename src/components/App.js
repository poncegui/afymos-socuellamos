import "../styles/main.scss";

//HOOKS
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { heroOne, heroThree, heroTwo } from "./Hero/HeroData";

import Carousel from "./Carousel/Carousel";
import Chart from "./Chart/Chart";
import ContactForm from "./main/ContactForm";
//COMPONENTS
import { Content } from "./../components/Content/Content";
import Features from "./Features/Features";
import Footer from "./Footer";
import Main from "./main/Main";
import NavBar from "./Header/NavBar";
import Nosotros from "./main/Nosotros";
import OtherInformation from "./main/OthersList";
import PartnertList from "./main/PartnerList";
import ProjectsCapacitacion from "./Projects/ProjectsCapacitacion";
import ProjectsCentroDia from "./Projects/ProjectsCentroDia";
import ProjectsCentroDiversidad from "./Projects/ProjectsCentroDiversidad";
import ProjectsCrea from "./Projects/ProjecsCrea";
import ProjectsDiagnostico from "./Projects/ProjectsDiagnostico";
import ProjectsDonaciones from "./Projects/ProjectsDonaciones";
import ProjectsFamilias from "./Projects/ProjectsFamilias";
import ProjectsFormacion from "./Projects/ProjectsFormacion";
import ProjectsTerapias from "./Projects/ProjetsTerapias";
import ProjectsVivienda from "./Projects/ProjectsVivienda";
import ProjectsVoluntariado from "./Projects/ProjectsVoluntariado";
import VisorPdf20 from "./main/pdf/VisorPdf2020";
import VisorPdf21 from "./main/pdf/VisorPdf2021";
import VisorPdfOrganigrama from "./main/pdf/VisorPdfOrganigrama";

const App = () => {
  //States
  const [textIsOpenMain, setTextIsOpenMain] = useState(false);

  //Events
  const handleToggleMain = () => {
    setTextIsOpenMain(!textIsOpenMain);
  };

  return (
    <>
      <Routes>
        <Route path="/terapias" element={<ProjectsTerapias />} />

        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/apoyo-familias" element={<ProjectsFamilias />} />

        <Route path="/ocio-y-voluntariado" element={<ProjectsVoluntariado />} />

        <Route path="/viviendas-con-apoyo" element={<ProjectsVivienda />} />

        <Route path="/centro-de-dia" element={<ProjectsCentroDia />} />

        <Route path="/proyecto-crea" element={<ProjectsCrea />} />

        <Route
          path="/valoracion-y-diagnostico"
          element={<ProjectsDiagnostico />}
        />

        <Route path="/donaciones" element={<ProjectsDonaciones />} />

        <Route
          path="/servicio-capacitacion"
          element={<ProjectsCapacitacion />}
        />

        <Route
          path="/instalaciones-centro-diversidad"
          element={<ProjectsCentroDiversidad />}
        />

        <Route
          path="/valoracion-y-diagnostico"
          element={<ProjectsDiagnostico />}
        />
        <Route path="/organigrama" element={<VisorPdfOrganigrama />} />
        <Route path="/pdf-cuentas-20" element={<VisorPdf20 />} />
        <Route path="/pdf-cuentas-21" element={<VisorPdf21 />} />

        <Route path="/formacion" element={<ProjectsFormacion />} />

        <Route path="/junta-directiva" element={<Chart />} />
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Main
                onClick={handleToggleMain}
                toggleStatusMain={textIsOpenMain}
              />
              <Features />
              <Content {...heroOne} />
              <Content {...heroTwo} />
              <Content {...heroThree} />
              <OtherInformation />
              <Carousel />
              <ContactForm id="#contacto" />
              <PartnertList />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
