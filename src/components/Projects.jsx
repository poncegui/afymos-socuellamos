import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import AOS from "aos";
import ReactCardFlip from "react-card-flip";
import "aos/dist/aos.css";

import logo from "../logos/logo-afymos.png";
import familias from "../images-talleres/centro-interior.jpg";
import autonomia from "../images-talleres/fomento-autonomia1.jpg";
import artesania from "../images-talleres/artesania1.jpg";
import ocio from "../images-talleres/voluntariado1.jpg";
import Footer from "./Footer";

const Activities = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipped = (event) => {
    event.preventDefault();

    setIsFlipped(!isFlipped);
    console.log("click");
  };

  const handleBack = () => {
    window.history.back();
    console.log("vuelvo");
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="hero">
        <h1>
          servicios y <span>proyectos</span>
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

      <div className="containerServices">
        <div className="evento">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="foto" data-aos="fade-right" name="familias">
              <img src={familias} alt="" onClick={handleFlipped} />
            </div>

            <div className="foto" data-aos="fade-right" name="familias">
              <img src={familias} alt="" onClick={handleFlipped} />
            </div>
          </ReactCardFlip>

          <h3 className="fecha">atención a las familias</h3>
        </div>
		<div className="evento">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="foto" data-aos="fade-left" name="familias">
              <img src={ocio} alt="" onClick={handleFlipped} />
            </div>

            <div className="foto" data-aos="fade-leftt" name="familias">
              <img src={ocio} alt="" onClick={handleFlipped} />
            </div>
          </ReactCardFlip>

          <h3 className="fecha">ocio y voluntariado</h3>
        </div>

		<div className="evento">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="foto" data-aos="fade-right" name="familias">
              <img src={familias} alt="" onClick={handleFlipped} />
            </div>

            <div className="foto" data-aos="fade-right" name="familias">
              <img src={familias} alt="" onClick={handleFlipped} />
            </div>
          </ReactCardFlip>

          <h3 className="fecha">fomento de la autonomía</h3>
        </div>

		<div className="evento">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="foto" data-aos="fade-left" name="familias">
              <img src={artesania} alt="" onClick={handleFlipped} />
            </div>

            <div className="foto" data-aos="fade-left" name="familias">
              <img src={artesania} alt="" onClick={handleFlipped} />
            </div>
          </ReactCardFlip>

          <h3 className="fecha">taller artesanía</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Activities;
