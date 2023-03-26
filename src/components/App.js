//HOOKS
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { heroOne, heroTwo, heroThree } from "./Hero/HeroData";

//COMPONENTS

import "../styles/main.scss";
import AboutUs from "./AboutUs";
import Center from "./Center";
import Chart from "./Chart/Chart";
import ContactUs from "./ContactUs";
import Diversity from "./Diversity";
import Donation from "./Donation";
import Footer from "./Footer";
import Header from "./Header/Header";
import Job from "./Job";
import Main from "./main/Main";
import NavBar from "./Header/NavBar";
import PartnertList from "./main/PartnerList";
import Programs from "./Programs";
import ProjectsFamilias from "./Projects/ProjectsFamilias";
import Slider from "./Carousel/Slider";
import Carousel from "./Carousel/Carousel";
import { Content } from "./../components/Content/Content";
import Features from "./Features/Features";
import OtherInformation from "./main/OthersList";
import ProjectsTerapias from "./Projects/ProjetsTerapias";
import ProjectsVoluntariado from "./Projects/ProjectsVoluntariado";
import ProjectsVivienda from "./Projects/ProjectsVivienda";
import ProjectsSocioLaboral from "./Projects/ProjectsSocioLaboral";
import ProjectsCentroDia from "./Projects/ProjecsCentroDia";
import ProjectsCentroDiversidad from "./Projects/ProjectsCentroDiversidad";
import ProjectsFormacion from "./Projects/ProjectsFormacion";
import ProjectsDiagnostico from "./Projects/ProjectsDiagnostico";

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

        <Route path="/organigrama" element={<Chart />} />

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
