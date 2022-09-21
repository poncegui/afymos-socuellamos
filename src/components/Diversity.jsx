import { Link } from "react-router-dom";
import SlidesShowDiversity from "./SlidesShowDiversity";

const Diversity = (props) => {
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
            <div className="mainContainerDiversity__wrapText--icon title">
              {/* <i className="fa-solid fa-house-user"></i> */}
              <Link to="/centro-diversidad" >
                <h4>centro diversidad</h4>
          
              </Link>
            </div>

            <div className="mainContainerDiversity__wrapText--icon">
            <i className="fa-solid fa-person-digging"></i>
              <Link to="/servicios-y-proyectos">
                <h4>servicios</h4>
              </Link>
            </div>

            <div className="mainContainerDiversity__wrapText--icon">
            <i className="fa-solid fa-graduation-cap"></i>
              <a href="https://www.falconmaters.com">
                <h4>nuestros certificados</h4>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Diversity;
