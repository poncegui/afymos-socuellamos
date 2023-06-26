import React, { useEffect, useRef } from "react";

import cocina from "../images-center/cocina.png";
import fisioterapia from "../images-center/sala-fisioterapia.png";
import formacion from "../images-center/sala-formacion.png";
import informatica from "../images-center/informatica.png";
import left from "../assets/icons/left.svg";
import ocupacional from "../images-center/sala-ocupacional.png";
import right from "../assets/icons/right.svg";

const SlidesShow = () => {
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
      {/* contenedorPrincipal */}
      <div className="mainContainer">
        {/* contenedorSlidesShow */}

        <div
          className="mainContainer__moveContainer slideTransition"
          ref={slideShow}
        >
          {/* Slides */}

          <div className="mainContainer__moveContainer--slide ">
            <a href="https://www.falconmaters.com">
              <img src={fisioterapia} alt="" />
            </a>

            <div className="mainContainer__moveContainer--textBottom">
              <p>sala de fisioterapia</p>
            </div>
          </div>
          <div className="mainContainer__moveContainer--slide">
            <a href="https://www.falconmaters.com">
              <img src={cocina} alt="" />
            </a>

            <div className="mainContainer__moveContainer--textBottom">
              <p>cocina</p>
            </div>
          </div>
          <div className="mainContainer__moveContainer--slide">
            <a href="https://www.falconmaters.com">
              <img src={informatica} alt="" />
            </a>

            <div className="mainContainer__moveContainer--textBottom">
              <p>sala de informática</p>
            </div>
          </div>
          <div className="mainContainer__moveContainer--slide">
            <a href="https://www.falconmaters.com">
              <img src={formacion} alt="" />
            </a>

            <div className="mainContainer__moveContainer--textBottom">
              <p>sala de formación para empleo</p>
            </div>
          </div>
          <div className="mainContainer__moveContainer--slide">
            <a href="https://www.falconmaters.com">
              <img src={ocupacional} alt="" />
            </a>

            <div className="mainContainer__moveContainer--textBottom">
              <p>sala de terapia ocupacional</p>
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
