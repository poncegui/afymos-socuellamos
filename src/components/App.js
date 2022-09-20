
//HOOKS
import React, { useEffect, useState } from "react";
import { useLocation, matchPath } from 'react-router';
import { Link, Route, Routes } from "react-router-dom";


//Styles
import styled from "styled-components";


// //Media
import aese from "../logos/logo-aese.jpg";
import ayuntamiento from "../logos/logo-ayuntamiento.png";
import castillaLaMancha from "../logos/logo-castillaLaMancha.png";
import diputacion from "../logos/logo-diputacion.png";
import europa from "../logos/logo-europa.png";
import inclusion from "../logos/logo-inclusion.png";
import ministerio from "../logos/logo-ministerio.jpg";



//COMPONENTs

import "../styles/main.scss";
import Header from "./Header";
import NavBar from "./NavBar";
import HeadPartners from "./HeadPartners";
import Partners from "./Partners";
import Main from "./Main";
import Donation from "./Donation";
import Projects from "./Projects";
import AboutUs from "./AboutUs";
import Diversity from "./Diversity";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Center from "./Center";

const App = () => {
  //States
  const [textIsOpenMain, setTextIsOpenMain] = useState(false);
  const [textIsOpenPartners, setTextIsOpenPartners] = useState(false);

  //Events
  const handleToggleMain = () => {
    setTextIsOpenMain(!textIsOpenMain);
  };
  const handleTogglePartners = () => {
    setTextIsOpenPartners(!textIsOpenPartners);
  };
  return (
  <> 

        <Routes>
                  <Route 
                  path="/contacto" 
                  element={<ContactUs />} />
                    {/* <Route 
                  path='*' element={<NotFoundPage />} 
                  /> */}

                  <Route
                  path="/centro-diversidad" 
                  element={<Center />} />

                  {/* <Route
                  path="/programas" 
                  element={<Programms />} /> */}

                  <Route
                  path="/servicios-y-proyectos" 
                  element={<Projects />} />
                

                  <Route 
                  path="/"
                  element={
                    <>
                          <NavBar />
                  
                          <Main 
                          onClick={handleToggleMain} 
                          toggleStatusMain={textIsOpenMain} 
                          />
                          <AboutUs/>
                          <Diversity/>
                          <HeadPartners
                            onClick={handleTogglePartners}
                            toggleStatus={textIsOpenPartners}
                          />
                          <div className="container__cards">
                            {/* <Donation/> */}
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Ayuntamiento de Socuellamos"
                      className="card"
                      src={ayuntamiento}
                      alt="Ayuntamiento de Socuéllamos"
                      href="https://socuellamos.es/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Diputación de Ciudad Real"
                      className="card"
                      src={diputacion}
                      alt="Diputación de Ciudad Real"
                      href="https://www.dipucr.es/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Junta de Comunidades de Castilla-La Mancha"
                      className="card"
                      src={castillaLaMancha}
                      alt="Junta de Comunidades de Castilla-La Mancha"
                      href="https://www.jccm.es/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Asociación Española de Empleo con Apoyo"
                      className="card"
                      src={aese}
                      alt="Asociación Española de Empleo con Apoyo"
                      href="http://www.empleoconapoyo.org/aese/s/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Ministerio de Empleo y Seguridad Social"
                      className="card"
                      src={ministerio}
                      alt="Ministerio de Empleo y Seguridad Social"
                      href="https://www.mites.gob.es/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Plena Inclusión"
                      className="card"
                      src={inclusion}
                      alt="Plena Inclusión"
                      href="https://www.plenainclusion.org/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Unión Europea"
                      className="card"
                      src={europa}
                      alt="Unión Europea"
                      href="https://european-union.europa.eu/index_es/"
                      target="_blank"
                    />
                          </div>


                          {/* <GliderShow/> */}
                          <Footer />

                        
                          
                    </>
                  } />
                 
        </Routes>

</>
  );
};

export default App;
