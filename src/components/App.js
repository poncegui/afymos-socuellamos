//HOOKS
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { heroOne, heroTwo, heroThree } from "./Hero/HeroData";
import "../styles/main.scss";

//COMPONENTS
import { Content } from "./../components/Content/Content";
import Carousel from "./Carousel/Carousel";
import Chart from "./Chart/Chart";
import ContactUs from "./ContactUs";
import Features from "./Features/Features";
import Footer from "./Footer";
import Main from "./main/Main";
import NavBar from "./Header/NavBar";
import OtherInformation from "./main/OthersList";
import PartnertList from "./main/PartnerList";
import ProjectsCentroDia from "./Projects/ProjecsCentroDia";
import ProjectsCentroDiversidad from "./Projects/ProjectsCentroDiversidad";
import ProjectsDiagnostico from "./Projects/ProjectsDiagnostico";
import ProjectsFamilias from "./Projects/ProjectsFamilias";
import ProjectsFormacion from "./Projects/ProjectsFormacion";
import ProjectsSocioLaboral from "./Projects/ProjectsSocioLaboral";
import ProjectsTerapias from "./Projects/ProjetsTerapias";
import ProjectsVivienda from "./Projects/ProjectsVivienda";
import ProjectsVoluntariado from "./Projects/ProjectsVoluntariado";

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
        <Route path="/contacto" element={<ContactUs />} />
        {/* <Route
                  path='*' element={<NotFoundPage />}
                  /> */}

        <Route path="/terapias" element={<ProjectsTerapias />} />

        <Route path="/apoyo-familias" element={<ProjectsFamilias />} />

        <Route path="/ocio-y-voluntariado" element={<ProjectsVoluntariado />} />

        <Route path="/viviendas-con-apoyo" element={<ProjectsVivienda />} />

        <Route path="/centro-de-dia" element={<ProjectsCentroDia />} />

        <Route
          path="/servicio-capacitacion"
          element={<ProjectsSocioLaboral />}
        />

        <Route
          path="/instalaciones-centro-diversidad"
          element={<ProjectsCentroDiversidad />}
        />

        <Route
          path="/valoracion-y-diagnostico"
          element={<ProjectsDiagnostico />}
        />

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
              {/* <AboutUs /> */}
              {/* <Job /> */}
              {/* <Slider /> */}
              <Content {...heroOne} />
              <Content {...heroTwo} />
              <Content {...heroThree} />
              <OtherInformation />
              <Carousel />
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
