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
              <a href="https://www.falconmaters.com">
                <h4>centro de atención</h4>
                <h3>a la diversidad funcional</h3>
              </a>
            </div>

            <div className="mainContainerDiversity__wrapText--icon">
              <i className="fa-solid fa-house-user"></i>
              <a href="https://www.falconmaters.com">
                <h4>tenemos 803,16 m2 cargados de ilusión</h4>
              </a>
            </div>

            <div className="mainContainerDiversity__wrapText--icon">
            <i className="fa-solid fa-graduation-cap"></i>
              <a href="https://www.falconmaters.com">
                <h4>nuestros certificados</h4>
              </a>
            </div>

            {/* CÓDIGO COMENTADO PARA INSERTAR MÁS IMAGENES */}
            {/* <div className="mainContainerDiversity__wrapText--icon">
                            <i className="fa-solid fa-sitemap"></i>
                            <a href="https://www.falconmaters.com">
                            <h4>organigrama</h4>
                            </a>
                            </div>

                            <div className="mainContainerDiversity__wrapText--icon">
                            <i className="fa-solid fa-eye"></i>
                            <a href="https://www.falconmaters.com">
                            <h4>transparencia</h4>
                            </a>
                            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Diversity;
