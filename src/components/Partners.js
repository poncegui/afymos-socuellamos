import aese from "../images/logo-aese.jpg";
import ayuntamiento from "../images/logo-ayuntamiento.png";
import castillaLaMancha from "../images/logo-castillaLaMancha.png";
import diputacion from "../images/logo-diputacion.png";
import europa from "../images/logo-europa.png";
import inclusion from "../images/logo-inclusion.png";
import ministerio from "../images/logo-ministerio.jpg";
import open from "../images/open.svg";

const Partners = () => {
    return (

      <section>
    <div className="article__entidad">
        <h5 className="article__entidad--small">Nuestros colaboradores</h5>
        <button className="article__entidad--icon">
        <img
              className="article__entidad--icon"
              src={open}
              alt="ver texto articulos entidad"
            />
        </button>
        </div>

      <div className="container__cards">

      <div className="card">
          <div className="cover">
              <img src={ayuntamiento} alt="Ayuntamiento de Socuéllamos" target="_blank"/>
              <div className="img__back"></div>
          </div>
          <div className="description">
              <h2>Ayuntamiento de Socuéllamos</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
             
          </div>
      </div>

      <div className="card">
          <div className="cover">
              <img src={diputacion} alt="Diputacion de Ciudad Real" target="_blank"/>
              <div className="img__back"></div>
          </div>
          <div className="description">
              <h2>Diputación de Ciudad Real</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
          
          </div>
      </div>

      <div className="card">
          <div className="cover">
          <a classNameName="partners" href="https://www.jccm.es/" target="_blank"/>
              <img src={castillaLaMancha} alt="Junta de Comunidades de Castilla-La Mancha" target="_blank"/>
              <div className="img__back"></div>
          </div>
          <div className="description">
              <h2>Junta de Comunidades de Castilla-La Mancha</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
     
          </div>
      </div>
      <div className="card">
          <div className="cover">
              <img src={aese} alt="Asociacion Española de Empleo con Apoyo" target="_blank"/>
              <div className="img__back"></div>
          </div>
          <div className="description">
              <h2>Asociación Española de Empleo con Apoyo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
        
          </div>
      </div>

      <div className="card">
          <div className="cover">
              <img src={ministerio} alt="Ministerio de Empleo y Seguridad Social" target="_blank"/>
              <div className="img__back"></div>
          </div>
          <div className="description">
              <h2>Ministerio de Empleo y Seguridad Social</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
         
          </div>
      </div>

      <div className="card">
          <div className="cover">
              <img src={inclusion} alt="Plena Inclusión Castilla-La Mancha" target="_blank" />
              <div className="img__back"></div>
          </div>
          <div className="description">
              <h2>Plena Inclusión</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
          
          </div>
      </div>

      <div className="card">
          <div className="cover">
              <img src={europa} alt="Unión Europea" target="_blank"/>
              <div className="img__back"></div>
          </div>

          <div className="description">
              <h2>Unión Europea</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laboriosam.</p>
        
          </div>
      </div>

  </div>
  </section>



    );
};

export default Partners;


{/* <section classNameNameName="partners" id="partners">
  <h2 classNameName="partners__title">Colaboradores</h2>

  <article classNameName="partners__diputacion">
    <a classNameName="partners" href="https://www.dipucr.es/" target="_blank">
      <img
        classNameName="partners__diputacion"
        src={diputacion}
        alt="logo-Diputacion"
    /></a>
  </article>

  <article classNameName="partners__aese">
    <a
      classNameName="partners"
      href="http://www.empleoconapoyo.org/aese/"
      target="_blank"
      alt="web Asociacion Española de empleo con apoyo"
      
    >
      <img
        classNameName="partners__aese"
        src={aese}
        alt="web Asociación"
    /></a>
  </article>

  <article classNameName="partners__plenaInclusion">
    <a classNameName="partners" href="https://www.plenainclusion.org/" 
    target="_blank">
      <img
        classNameName="partners__aese"
        src={inclusion}
        alt="web Plena Inclusión"
    /></a>
  </article>

  <article classNameName="partners__castillaLaMancha">
    <a classNameName="partners" href="https://www.jccm.es/" target="_blank">
      <img
        classNameName="partners__aese"
        src={castillaLaMancha}
        alt="web Junta de Castilla La Mancha"
    /></a>
  </article>

  <article classNameName="partners__ministerio">
    <a classNameName="partners" href="https://www.mites.gob.es/" target="_blank">
      <img
        classNameName="partners__aese"
        src={ministerio}
        alt="web Ministerio de Empleo y Seguridad Social"
    /></a>
  </article>

  <article classNameName="partners__europa">
    <a classNameName="partners" href="https://european-union.europa.eu/index_es/" target="_blank">
      <img
        classNameName="partners__aese"
        src={europa}
        alt="logo-europa"
    /></a>
  </article>

  
</section> */}