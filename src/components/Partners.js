import aese from "../images/logo-aese.jpg";
//import ayuntamiento from "../images/logo-ayuntamiento.png";
import castillaLaMancha from "../images/logo-castillaLaMancha.png";
import diputacion from "../images/logo-diputacion.png";
import europa from "../images/logo-europa.png";
import inclusion from "../images/logo-inclusion.png";
import ministerio from "../images/logo-ministerio.jpg";

const Partners = () => {
    return (

<section className="partners" id="partners">
  <h2 className="partners__title">Colaboradores</h2>

  <article className="partners__diputacion">
    <a className="partners" href="https://www.dipucr.es/" target="_blank">
      <img
        className="partners__diputacion"
        src={diputacion}
        alt="logo-Diputacion"
    /></a>
  </article>

  <article className="partners__aese">
    <a
      className="partners"
      href="http://www.empleoconapoyo.org/aese/"
      target="_blank"
      alt="web Asociacion Española de empleo con apoyo"
      
    >
      <img
        className="partners__aese"
        src={aese}
        alt="web Asociación"
    /></a>
  </article>

  <article className="partners__plenaInclusion">
    <a className="partners" href="https://www.plenainclusion.org/" 
    target="_blank">
      <img
        className="partners__aese"
        src={inclusion}
        alt="web Plena Inclusión"
    /></a>
  </article>

  <article className="partners__castillaLaMancha">
    <a className="partners" href="https://www.jccm.es/" target="_blank">
      <img
        className="partners__aese"
        src={castillaLaMancha}
        alt="web Junta de Castilla La Mancha"
    /></a>
  </article>

  <article className="partners__ministerio">
    <a className="partners" href="https://www.mites.gob.es/" target="_blank">
      <img
        className="partners__aese"
        src={ministerio}
        alt="web Ministerio de Empleo y Seguridad Social"
    /></a>
  </article>

  <article className="partners__europa">
    <a className="partners" href="https://european-union.europa.eu/index_es/" target="_blank">
      <img
        className="partners__aese"
        src={europa}
        alt="logo-europa"
    /></a>
  </article>

  
</section>

    );
};

export default Partners;