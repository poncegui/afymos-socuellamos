import children from "../images-talleres/voluntariado2.jpg";
import SlidesShowAboutUs from "./SlidesShowAboutUs";

const AboutUs = (props) => {
  const links = document.querySelectorAll(".links");
  links.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      icon.classList.toggle("open");
    });
  });


  return (
<>  

<section class="aboutUs">
    <div className="mainContainerAboutUs">

        <div className="mainContainerAboutUs__wrapPhoto">
                        <div className="mainContainerAboutUs__wrapPhoto--photo">
                            {/* <img src={children} alt="foto niños afymos" /> */}
                            <SlidesShowAboutUs/>
                        </div>

                        {/* <div className="mainContainerAboutUs__wrapPhoto--title">
                            <h4 className="children">entidad</h4>
                        </div> */}
        </div>
    
           
        
        <div className="mainContainerAboutUs__wrapText">
                
                            <div className="mainContainerAboutUs__wrapText--icon">
                            <i class="fa-solid fa-person-digging"></i>
                            <a href="https://www.falconmaters.com">
                            <h4>servicios y proyectos</h4>
                            </a>
                            </div>
                            
                            <div className="mainContainerAboutUs__wrapText--icon">
                            <i class="fa-solid fa-hand-holding-heart"></i>
                            <a href="https://www.falconmaters.com">
                            <h4>diversidad funcional</h4>
                            </a>
                            </div>

                            <div className="mainContainerAboutUs__wrapText--icon">
                            <i class="fa-solid fa-hand-holding-hand"></i>
                            <a href="https://www.falconmaters.com">
                            <h4>colaboradores</h4>
                            </a>
                            </div>

                            <div className="mainContainerAboutUs__wrapText--icon">
                            <i class="fa-solid fa-sitemap"></i>
                            <a href="https://www.falconmaters.com">
                            <h4>organigrama</h4>
                            </a>
                            </div>

                            <div className="mainContainerAboutUs__wrapText--icon">
                            <i class="fa-solid fa-eye"></i>
                            <a href="https://www.falconmaters.com">
                            <h4>transparencia</h4>
                            </a>
                            </div>
        </div>

    </div>

    </section>
  
   
      </>
  );
};

export default AboutUs;
