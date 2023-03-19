
import SlidesShowAboutUs from "./SlidesShowAboutUs";


const AboutUs = (props) => {
  const links = document.querySelectorAll(".links");
  links.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      icon.classNameList.toggle("open");
    });
  });


  return (
<>  

<section className="aboutUs">
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
                            {/* <i className="fa-solid fa-hand-holding-heart"></i> */}
        
                            <h4>vida en comunidad:</h4>
                            <h5>"Integración, inclusión y otra"</h5>
                    
                            </div>

        </div>

    </div>

    </section>
  
   
      </>
  );
};

export default AboutUs;
