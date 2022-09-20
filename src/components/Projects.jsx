import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


import logo from "../logos/logo-afymos.png";
import familias from "../images-talleres/centro-interior.jpg";
import autonomia from "../images-talleres/fomento-autonomia1.jpg";
import artesania from "../images-talleres/artesania1.jpg";
import ocio from "../images-talleres/voluntariado1.jpg";
import Footer from "./Footer";



const Activities = props => {

    const handleBack = () => {
    window.history.back();
    console.log("vuelvo")
    }

	useEffect(() => {
		AOS.init({duration: 2500});

	},[]);

  return (
    <>
   <div className="hero">
	
		<h1>servicios y <span>proyectos</span></h1>
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
	 
	<div class="containerServices">
		<div class="evento">
			<div class="foto" data-aos="fade-right">
				<img src={familias} alt=""/>
			</div>
			<h3 class="fecha">atención a las familias</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-left">
				<img src={autonomia} alt=""/>
			</div>
			<h3 class="fecha">fomento de la autonomía</h3>
		</div>
		
		<div class="evento">
			<div class="foto" data-aos="fade-right">
			<img src={artesania} alt=""/>
			</div>
			<h3 class="fecha">artesanía</h3>
		</div>
		<div class="evento">
			<div class="foto" data-aos="fade-left">
			<img src={ocio} alt=""/>
			</div>
			<h3 class="fecha">ocio y voluntariado</h3>
		</div>
	
	</div>
	<Footer/>
    </>
  );
};

export default Activities;
