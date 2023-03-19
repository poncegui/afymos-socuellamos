import { useRef, useEffect } from "react";

// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

import img1 from "../slidesImages/img1.png";
import img2 from "../slidesImages/img2.png";
import img3 from "../slidesImages/img3.png";
import img4 from "../slidesImages/img4.png";
import img5 from "../slidesImages/img5.png";
import img6 from "../slidesImages/img6.png";
import img7 from "../slidesImages/img7.png";
import img8 from "../slidesImages/img8.png";
import img9 from "../slidesImages/img9.png";

const GliderShow = (props) => {
  const slideShow = useRef(null);
  const intervalSlides = useRef(null);

  const next = () => {
    if (slideShow.current.children.length > 0) {
      //obtenemos primer elemento del display
      const firstElement = slideShow.current.children[0];
      //establecemos la transicion para el display
      slideShow.current.style.transition = `800ms ease-out all`;
      //calculamos el tamaño de la imagen para mover el display los px que ésta ocupe
      const sizeSlide = slideShow.current.children[0].offsetWidth;
      //movemos el display
      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

      const moveTransitionRigth = () => {
        //reiniciar posición display
        slideShow.current.style.transition = `none`;
        slideShow.current.style.transform = `translateX(0px)`;

        //Mandamos el primer elemento al final
        slideShow.current.appendChild(firstElement);

        //eliminamos el evento para que no se repita cada vez que hagamos transiciones
        slideShow.current.removeEventListener(
          `transitionend`,
          moveTransitionRigth
        );
      };
      //añadimos un listener para que se inicie cuando termina la animacion devuelve a su posicion a slice 1
      slideShow.current.addEventListener(`transitionend`, moveTransitionRigth);
    }
  };

  const before = () => {
    if (slideShow.current.children.length > 0) {
      //obtenemos último elemento del display
      const index = slideShow.current.children.length - 1;
      const lastElement = slideShow.current.children[index];
      //lo insertamos antes del primer elemento
      slideShow.current.insertBefore(lastElement, slideShow.current.firstChild);

      slideShow.current.style.transition = `none`;

      const sizeSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = `800ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  // /AUTOPLAY  (si no queremos autoplay, comentar este código)
  // useEffect(() => {
  //   intervalSlides.current = setInterval(() => {
  //     next();
  //   }, 5000);

  //   //Eliminar intervalos cuando pasamos el cursor
  //   slideShow.current.addEventListener("mouseenter", () => {
  //     clearInterval(intervalSlides.current);
  //   });

  //   //Eliminar intervalos cuando pasamos el cursor
  //   slideShow.current.addEventListener("mouseleave", () => {
  //     intervalSlides.current = setInterval(() => {
  //       next();
  //     }, 8000);
  //   });
  // }, []);

  return (
    <>
      <div className="contenedor">
        <main className="contenido-principal">
          <img
            src={img3}
            alt="Dome of the German Bundestag"
            className="contenido-principal__imagen"
          />
          <div className="contenido-principal__contenedor">
            <h1 className="contenido-principal__titulo">
              Dome of the German Bundestag
            </h1>
            <p className="contenido-principal__resumen">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              commodo orci. Nulla ipsum ante, auctor a odio id, bibendum
              accumsan mauris.
            </p>
            <p className="contenido-principal__resumen">
              Fusce malesuada mollis ante, at elementum mi maximus nec. Praesent
              volutpat, tortor sed condimentum sagittis, mi diam fringilla nibh.
            </p>
          </div>
        </main>

        <div className="carousel">
          <div className="carousel__contenedor">
            <button aria-label="Anterior" className="carousel__anterior">
              <i className="fa-solid fa-hand-holding-hand"></i>
            </button>

            <div className="carousel__lista" ref={slideShow}>
              <div className="carousel__elemento">
                <img src={img1} alt="Rock and Roll Hall of Fame" />
                <p>Rock and Roll Hall of Fame</p>
              </div>
              <div className="carousel__elemento">
                <img src={img2} alt="Rock and Roll Hall of Fame" />
                <p>Constitution Square - Tower I</p>
              </div>
              <div className="carousel__elemento">
                <img src={img3} alt="Rock and Roll Hall of Fame" />
                <p>Empire State Building</p>
              </div>
              {/* <div className="carousel__elemento">
          <img src={img1} alt="Rock and Roll Hall of Fame"/>
						<p>Harmony Tower</p>
					</div> */}

              {/* <div className="carousel__elemento">
					<img src={img1} alt="Rock and Roll Hall of Fame"/>
						<p>Empire State Building</p>
					</div>
					<div className="carousel__elemento">
          <img src={img1} alt="Rock and Roll Hall of Fame"/>
						<p>Harmony Tower</p>
					</div>
					<div className="carousel__elemento">
          <img src={img1} alt="Rock and Roll Hall of Fame"/>
						<p>Empire State Building</p>
					</div>
					<div className="carousel__elemento">
          <img src={img1} alt="Rock and Roll Hall of Fame"/>
						<p>Harmony Tower</p>
					</div> */}
            </div>

            <button aria-label="Siguiente" className="carousel__siguiente">
              <i className="fa-solid fa-hand-holding-hand"></i>
            </button>
          </div>

          <div role="tablist" className="carousel__indicadores"></div>
        </div>
      </div>
    </>
  );
};

export default GliderShow;
