import SlidesShowDiversity from "./SlidesShowDiversity";

const Diversity = (props) => {
  const links = document.querySelectorAll(".links");
  links.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      icon.classList.toggle("open");
    });
  });

  return (
    <>
      <section class="Diversity">
        <div className="mainContainerDiversity">
          <div className="mainContainerDiversity__wrapPhoto">
            <div className="mainContainerDiversity__wrapPhoto--photo">
              <SlidesShowDiversity />
            </div>
          </div>

          <div className="mainContainerDiversity__wrapText">
            <div className="mainContainerDiversity__wrapText--icon title">
              {/* <i class="fa-solid fa-house-user"></i> */}
              <a href="https://www.falconmaters.com">
                <h4>centro de atención a la diversidad funcional</h4>
              </a>
            </div>

            <div className="mainContainerDiversity__wrapText--icon">
              <i class="fa-solid fa-house-user"></i>
              <a href="https://www.falconmaters.com">
                <h4>un espacio de 803,16 m2 lleno de ilusiones</h4>
              </a>
            </div>

            <div className="mainContainerDiversity__wrapText--icon">
              <i class="fa-solid fa-magnifying-glass"></i>
              <a href="https://www.falconmaters.com">
                <h4>saber más...</h4>
              </a>
            </div>

            {/* CÓDIGO COMENTADO PARA INSERTAR MÁS IMAGENES */}
            {/* <div className="mainContainerDiversity__wrapText--icon">
                            <i class="fa-solid fa-sitemap"></i>
                            <a href="https://www.falconmaters.com">
                            <h4>organigrama</h4>
                            </a>
                            </div>

                            <div className="mainContainerDiversity__wrapText--icon">
                            <i class="fa-solid fa-eye"></i>
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
