import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import ReactCardFlip from "react-card-flip";
import "aos/dist/aos.css";

import logo from "../logos/logo-afymos.png";
import familias from "../images-services/fomento-autonomia1.jpg";
import artesania from "../images-services/artesania1.jpg";
import ocio from "../images-services/voluntariado1.jpg";

//COMPONENTS
import NavBarTemplate from "./templates/NavBarTemplate";
import Footer from "./Footer";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);

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
      <NavBarTemplate title="servicios y proyectos" alt="" />

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
          <Link
            className="service"
            to="/servicios-y-proyectos/atencion-familias"
          >
            <h3>atención a familias</h3>
            <i class="fa-solid fa-people-roof"></i>
          </Link>
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

          <Link
            className="service"
            to="/servicios-y-proyectos/atencion-familias"
          >
            <i class="fa-solid fa-hands-holding-child"></i>
            <h3>ocio y voluntariado</h3>
          </Link>
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

          <Link
            className="service"
            to="/servicios-y-proyectos/atencion-familias"
          >
            <h3>fomento de la autonomia</h3>
            <i class="fa-regular fa-face-smile-wink"></i>
          </Link>
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

          <Link
            className="service"
            to="/servicios-y-proyectos/atencion-familias"
          >
            <i class="fa-solid fa-paintbrush"></i>
            <h3>taller de artesanía</h3>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
