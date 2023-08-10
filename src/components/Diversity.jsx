import { Link } from "react-router-dom";
import SlidesShowDiversity from "./SlidesShowDiversity";
import centroAfymos from "../assets/pictogramas/centro-afymos.png";

const Diversity = () => {
  const links = document.querySelectorAll(".links");
  links.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      icon.classNameList.toggle("open");
    });
  });

  return (
    <>
      <section className="Diversity">
        <div className="mainContainerDiversity">
          <div className="mainContainerDiversity__wrapPhoto">
            <div className="mainContainerDiversity__wrapPhoto--photo">
              <SlidesShowDiversity />
            </div>
          </div>
          <div className="mainContainerDiversity__wrapText">
            <div className="mainContainerDiversity__wrapText--icon">
              <img
                src={centroAfymos}
                className="centro-afymos"
                alt="pictograma-centro"
              ></img>
              <Link to="/servicios-y-proyectos">
                <h4>nuestras instalaciones</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Diversity;
