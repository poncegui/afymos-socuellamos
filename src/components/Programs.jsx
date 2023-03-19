import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import ReactCardFlip from "react-card-flip";
import "aos/dist/aos.css";

import logo from "../logos/logo-afymos.png";
import empleo from "../images-programs/integracion-laboral1.jpg";
import fomento from "../images-programs/proyectos.jpg";
import integral from "../images-programs/fomento.jpg";
import residencial from "../images-programs/fomento.jpg";
import NavBarTemplate from "./templates/NavBarTemplate";
import Footer from "./Footer";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlipped = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
    console.log("click");
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <NavBarTemplate title="programas" alt="" />

      <div className="containerServices">
        <div className="evento">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="foto" data-aos="fade-right" name="familias">
              <img src={empleo} alt="" onClick={handleFlipped} />
            </div>

            <div className="foto" data-aos="fade-right" name="familias">
              <img src={empleo} alt="" onClick={handleFlipped} />
            </div>
          </ReactCardFlip>
          <Link className="service" to="/programas/empleo-formacion">
            <h3>empleo y formación</h3>
          </Link>
        </div>
        <div className="evento">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="foto" data-aos="fade-left" name="familias">
              <img src={fomento} alt="" onClick={handleFlipped} />
            </div>

            <div className="foto" data-aos="fade-leftt" name="familias">
              <img src={fomento} alt="" onClick={handleFlipped} />
            </div>
          </ReactCardFlip>

          <Link className="service" to="/programas/fomento-autonomia">
            <h3>fomento de la autonomía</h3>
          </Link>
        </div>

        <div className="evento">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="foto" data-aos="fade-right" name="familias">
              <img src={residencial} alt="" onClick={handleFlipped} />
            </div>

            <div className="foto" data-aos="fade-right" name="familias">
              <img src={residencial} alt="" onClick={handleFlipped} />
            </div>
          </ReactCardFlip>

          <Link className="service" to="/programas/apoyo-residencial">
            <h3>apoyo residencial</h3>
          </Link>
        </div>

        <div className="evento">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="foto" data-aos="fade-left" name="familias">
              <img src={integral} alt="" onClick={handleFlipped} />
            </div>

            <div className="foto" data-aos="fade-left" name="familias">
              <img src={integral} alt="" onClick={handleFlipped} />
            </div>
          </ReactCardFlip>

          <Link
            className="service"
            to="/servicios-y-proyectos/atencion-familias"
          >
            <h3>atención integral a la diversidad funcional</h3>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
