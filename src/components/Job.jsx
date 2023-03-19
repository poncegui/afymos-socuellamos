import { Link } from "react-router-dom";
import SlidesShowJob from "./SlidesShowDiversity";

const Job = (props) => {
  const links = document.querySelectorAll(".links");
  links.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      icon.classNameList.toggle("open");
    });
  });

  return (
    <>
      <section className="Job">
        <div className="mainContainerJob">
          <div className="mainContainerJob__wrapPhoto">
            <div className="mainContainerJob__wrapPhoto--photo">
              <SlidesShowJob />
            </div>
          </div>

          <div className="mainContainerJob__wrapText">
            {/* <div className="mainContainerJob__wrapText--icon title">
              <i className="fa-solid fa-house-user"></i>
              <Link to="/centro-diversidad" >
                <h4>centro diversidad</h4>
              </Link>
            </div> */}
            <div className="mainContainerJob__wrapText--icon">
              <i className="fa-solid fa-house-user"></i>
              <Link to="/servicios-y-proyectos">
                <h4>Trabajo y formación</h4>
                <h4>envía tu cv</h4>
              </Link>
            </div>
            {/* <div className="mainContainerJob__wrapText--icon">
            <i class="fa-solid fa-rectangle-list"></i>
              <Link to="/servicios-y-proyectos">
                <h4>programas</h4>
              </Link>
            </div>

            <div className="mainContainerJob__wrapText--icon">
              <i className="fa-solid fa-person-digging"></i>
              <Link to="/servicios-y-proyectos">
                <h4>servicios</h4>
              </Link>
            </div>

            <div className="mainContainerJob__wrapText--icon">
              <i className="fa-solid fa-graduation-cap"></i>
              <Link to="/certificados">
                <h4>nuestros certificados</h4>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Job;
