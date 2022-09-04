import React, { useEffect, useState } from "react";
//import { Route, Switch, useRouteMatch } from "react-router-dom";


//Media
import aese from "../logos/logo-aese.jpg";
import ayuntamiento from "../logos/logo-ayuntamiento.png";
import castillaLaMancha from "../logos/logo-castillaLaMancha.png";
import diputacion from "../logos/logo-diputacion.png";
import europa from "../logos/logo-europa.png";
import inclusion from "../logos/logo-inclusion.png";
import ministerio from "../logos/logo-ministerio.jpg";

//Components
import "../styles/main.scss";
import Header from "./Header";
import HeadPartners from "./HeadPartners";
import Partners from "./Partners";
import Main from "./Main";
import Footer from "./Footer";




function App() {
  //States
  const [textIsOpen, setTextIsOpen] = useState(true);
  console.log(textIsOpen);
  //Events
  const handleToggle = () => {
    setTextIsOpen(!textIsOpen);

  };

  //Render helpers

  return (
    <div>
      <Header />
      
      <Main 
      onClick={handleToggle} 
      toggleStatus={textIsOpen}
      />

      <HeadPartners onClick={handleToggle}/>

      <div className="container__cards">
      <Partners text="Ayuntamiento de Socuellamos"  class="card" src={ayuntamiento} alt="Ayuntamiento de Socuéllamos" href="https://socuellamos.es/" target="_blank"/>
      <Partners text="Diputación de Ciudad Real" class="card" src={diputacion} alt="Diputación de Ciudad Real" href="https://www.dipucr.es/" target="_blank"/>
      <Partners text="Junta de Comunidades de Castilla-La Mancha"  class="card" src={castillaLaMancha} alt="Junta de Comunidades de Castilla-La Mancha" href="https://www.jccm.es/" target="_blank"/>
      <Partners text="Asociación Española de Empleo con Apoyo"  class="card" src={aese} alt="Asociación Española de Empleo con Apoyo" href="http://www.empleoconapoyo.org/aese/s/" target="_blank"/>
      <Partners text="Ministerio de Empleo y Seguridad Social"  class="card" src={ministerio} alt="Ministerio de Empleo y Seguridad Social" href="https://www.mites.gob.es/" target="_blank"/>
      <Partners text="Plena Inclusión" class="card" src={inclusion} alt="Plena Inclusión" href="https://www.plenainclusion.org/" target="_blank"/>
      <Partners text="Unión Europea"  class="card" src={europa} alt="Unión Europea" href="https://european-union.europa.eu/index_es/" target="_blank"/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
