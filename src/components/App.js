import { Link, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// //Media
import aese from "../logos/logo-aese.jpg";
import ayuntamiento from "../logos/logo-ayuntamiento.png";
import castillaLaMancha from "../logos/logo-castillaLaMancha.png";
import diputacion from "../logos/logo-diputacion.png";
import europa from "../logos/logo-europa.png";
import inclusion from "../logos/logo-inclusion.png";
import ministerio from "../logos/logo-ministerio.jpg";

//COMPONENTS


//*--Sliders & Gliders--*
import GliderShow from "./GliderShow";

import "../styles/main.scss";
import Header from "./Header";
import NavBar from "./NavBar";
import HeadPartners from "./HeadPartners";
import Partners from "./Partners";
import Main from "./Main";

import AboutUs from "./AboutUs";
import Diversity from "./Diversity";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

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
                  path="/"
                  element={
                    <>
                          <NavBar />
                          <Header />
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
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Ayuntamiento de Socuellamos"
                      class="card"
                      src={ayuntamiento}
                      alt="Ayuntamiento de Socuéllamos"
                      href="https://socuellamos.es/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Diputación de Ciudad Real"
                      class="card"
                      src={diputacion}
                      alt="Diputación de Ciudad Real"
                      href="https://www.dipucr.es/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Junta de Comunidades de Castilla-La Mancha"
                      class="card"
                      src={castillaLaMancha}
                      alt="Junta de Comunidades de Castilla-La Mancha"
                      href="https://www.jccm.es/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Asociación Española de Empleo con Apoyo"
                      class="card"
                      src={aese}
                      alt="Asociación Española de Empleo con Apoyo"
                      href="http://www.empleoconapoyo.org/aese/s/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Ministerio de Empleo y Seguridad Social"
                      class="card"
                      src={ministerio}
                      alt="Ministerio de Empleo y Seguridad Social"
                      href="https://www.mites.gob.es/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Plena Inclusión"
                      class="card"
                      src={inclusion}
                      alt="Plena Inclusión"
                      href="https://www.plenainclusion.org/"
                      target="_blank"
                    />
                    <Partners
                      toggleStatus={textIsOpenPartners}
                      text="Unión Europea"
                      class="card"
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
