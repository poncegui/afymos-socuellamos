import ProfileChart from "./Chart/ProfileChart";
// //Media
import aese from "../logos/logo-aese.jpg";
import ayuntamiento from "../logos/logo-ayuntamiento.png";
import castillaLaMancha from "../logos/logo-castillaLaMancha.png";
import diputacion from "../logos/logo-diputacion.png";
import europa from "../logos/logo-europa.png";
import inclusion from "../logos/logo-inclusion.png";
import ministerio from "../logos/logo-ministerio.jpg";

import ReactCardFlip from "react-card-flip";
import logo from "../logos/logo-afymos.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Partners = () => {
  const handleBack = () => {
    window.history.back();
    console.log("vuelvo");
  };
  return (
    <>
      <div className="hero">
        <h1>
          colaboradores<span></span>
        </h1>
        <img
          className="header_superior__container--logo"
          src={logo}
          alt="Logo Afymos"
        />
      </div>
      <Link className="Link" to="/">
        <div className="btn">
          <button className="backBtn" onClick={handleBack}>
            <i className="fa-solid fa-circle-chevron-left"></i> volver
          </button>
        </div>
      </Link>

      <div className="containerChart">
        <ProfileChart
          src={ayuntamiento}
          href="https://socuellamos.es/"
          name="Lourdes Requena"
          profession="educadora social"
          position="Ayuntamiento de Socuellamos"
          target="_blank"
        />

        <ProfileChart
           src={diputacion}
           href="https://www.dipucr.es/"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="Diputación de Ciudad Real"
        />
          <ProfileChart
           src={castillaLaMancha}
           href="https://www.jccm.es/"
          name="Lourdes Requena"
          profession="Junta de Comunidades de Castilla-La Mancha"
          position="Junta de Comunidades de Castilla-La Mancha"
        />

        <ProfileChart
          src={aese}
          href="http://www.empleoconapoyo.org/aese/s/"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="Asociación Española de Empleo con Apoyo"
        />
  
    
      </div>
      <div className="containerChart">
        <ProfileChart
          src={ministerio}
          href="https://www.mites.gob.es/"
          name="Lourdes Requena"
          profession="educadora social"
          position="Ministerio de Empleo y Seguridad Social"
        />

        <ProfileChart
           src={inclusion}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="Plena Inclusión"
        />
          <ProfileChart
          src={europa}
          href="https://european-union.europa.eu/index_es/"
          name="Lourdes Requena"
          profession="Unión Europea"
          position="directora general afymos"
        />

    
      </div>

      <Footer />
    </>
  );
};

export default Partners;


