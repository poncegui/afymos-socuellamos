import React, { useRef, useEffect } from "react";

import foto1 from "../images/foto1.jpg";
import foto2 from "../images/foto2.jpg";
import foto7 from "../images/foto7.jpg";
import foto8 from "../images/foto8.jpg";
import foto5 from "../images/foto5.jpg";
import foto6 from "../images/foto6.jpg";
import right from "../icons/right.svg";
import left from "../icons/left.svg";

const SlidesShow = props => {
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


///AUTOPLAY  (si no queremos autoplay, comentar este código)
  useEffect(() => {
    intervalSlides.current = setInterval(() => {
      next();
    }, 5000);

    //Eliminar intervalos cuando pasamos el cursor
    slideShow.current.addEventListener("mouseenter", () => {
      clearInterval(intervalSlides.current);
    });

    //Eliminar intervalos cuando pasamos el cursor
    slideShow.current.addEventListener("mouseleave", () => {
      intervalSlides.current = setInterval(() => {
        next();
      }, 8000);
    });
  }, []);

  return (
    <>
      <h2>Nuestros programas</h2>

      {/* contenedorPrincipal */}
      <div className="mainContainer">
        {/* contenedorSlidesShow */}
        <div className="mainContainer__moveContainer" ref={slideShow}>
          {/* Slides */}
          <div className="mainContainer__moveContainer--slide slideTransition">
            <a href="https://www.falconmaters.com">
              <img src={foto1} alt="" />
            </a>

            <div className="mainContainer__moveContainer--text">
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="mainContainer__moveContainer--slide">
            <a href="https://www.falconmaters.com">
              <img src={foto2} alt="" />
            </a>

            <div className="mainContainer__moveContainer--text">
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="mainContainer__moveContainer--slide">
            <a href="https://www.falconmaters.com">
              <img src={foto6} alt="" />
            </a>

            <div className="mainContainer__moveContainer--text">
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="mainContainer__moveContainer--slide">
            <a href="https://www.falconmaters.com">
              <img src={foto7} alt="" />
            </a>

            <div className="mainContainer__moveContainer--text">
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="mainContainer__moveContainer--slide">
            <a href="https://www.falconmaters.com">
              <img src={foto8} alt="" />
            </a>

            <div className="mainContainer__moveContainer--text">
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="mainContainer__moveContainer--slide">
            <a href="https://www.falconmaters.com">
              <img src={foto5} alt="" />
            </a>

            <div className="mainContainer__moveContainer--text">
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>

        <div className="mainContainer__containerBtns">
          <button
            className="mainContainer__containerBtns--left"
            onClick={before}
          >
            <img src={left} alt="" />
          </button>
          <button
            className="mainContainer__containerBtns--right"
            onClick={next}
          >
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SlidesShow;
