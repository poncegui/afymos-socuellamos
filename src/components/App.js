//HOOKS
import React, { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router";
import { Link, Route, Routes } from "react-router-dom";

//Styles
import styled from "styled-components";

//COMPONENTs

import "../styles/main.scss";
import Header from "./Header/Header";
import NavBar from "./Header/NavBar";
import Partners from "./Partners";
import Main from "./Main";
import Donation from "./Donation";
import Projects from "./Projects";
import AboutUs from "./AboutUs";
import Slider from "./Carrousel/Slider";
import Diversity from "./Diversity";
import ContactUs from "./ContactUs";
import Programs from "./Programs";
import Chart from "./Chart";
import Footer from "./Footer";
import Center from "./Center";

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

        <Route path="/centro-diversidad" element={<Center />} />

        <Route path="/programas" element={<Programs />} />

        <Route path="/servicios-y-proyectos" element={<Projects />} />

        <Route path="/organigrama" element={<Chart />} />

        {/* <Route path="/colaboradores" element={<Partners />} /> */}

        <Route path="/colaboradores" element={<Slider />} />

        <Route
          path="/"
          element={
            <>
              <NavBar />

              <Main
                onClick={handleToggleMain}
                toggleStatusMain={textIsOpenMain}
              />
              <AboutUs />
              <Slider />
              <Diversity />
        
              <div className="container__cards"></div>

              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
