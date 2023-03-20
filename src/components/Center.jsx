import { Link } from "react-router-dom";

// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

import fachada from "../images-center/centro-gente.jpg";
import img2 from "../slidesImages/img2.png";
import img3 from "../slidesImages/img3.png";
import img4 from "../slidesImages/img4.png";
import img5 from "../slidesImages/img5.png";
import img6 from "../slidesImages/img6.png";
import img7 from "../slidesImages/img7.png";
import img8 from "../slidesImages/img8.png";
import img9 from "../slidesImages/img9.png";

const Center = (props) => {
  const handleBack = () => {
    window.history.back();
    console.log("vuelvo");
  };

  return (
    <>
      <div className="completeHtml backgroundCenter">
        <div className="container">
          <Link className="Link" to="/">
            <button className="backBtn" onClick={handleBack}>
              <i className="fa-solid fa-circle-chevron-left"></i> volver
            </button>
            <h1 className="title">
              centro de atención a la<span>diversidad funcional</span>
            </h1>
          </Link>
          <section className="main-container">
            <img
              src={fachada}
              alt="centro diversidad"
              className="main-container__image"
            />
            <div className="main-container__text">
              {/* <p className="contenido-principal__resumen">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              commodo orci. Nulla ipsum ante, auctor a odio id, bibendum
              accumsan mauris.
            </p> */}
              <p className="contenido-principal__resumen">
                Este espacio ofrece un conjunto de recursos especializados desde
                donde se ofrecen servicios y programas personalizados de
                capacitación y habilitación individual, de apoyo a la
                independencia de las personas con diversidad funcional en todos
                los ámbitos de la vida cotidiana, dando a cada persona las
                herramientas que precise para desarrollarse en todas las
                dimensiones del{" "}
                <a
                  className="link"
                  target="_blank"
                  href="https://www.plenainclusion.org/sites/default/files/224_articulos2.pdf"
                  rel="noreferrer"
                >
                  "Modelo de Calidad de Vida de Schalock y Verdugo"
                </a>
                , de manera que tome el control de su propia vida, favoreciendo
                así el empoderamiento de las personas con Discapacidad
                Intelectual/Diversidad Funcional/ Especificidad/Dependencia.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Center;
