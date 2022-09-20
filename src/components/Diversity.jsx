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
                <h4>800 m2 llenos de ilusión</h4>
              </a>
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
