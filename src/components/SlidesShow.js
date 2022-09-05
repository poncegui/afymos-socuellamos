import ministerio from "../logos/logo-ministerio.jpg";
import open from "../icons/open.svg";
import close from "../icons/close.svg";



const SlidesShow = props => {


    return (
    <>

        <h2>Productos Destacados</h2>
        <div className="mainContainer" controles={true}>
            <div className="mainContainer__slidesShow--slide">

                <a href="https://www.falconmaters.com">
                        <img src={ministerio} alt=""/>
                </a>

                <div className="mainContainer__slidesShow--text">
                    <p>15% descuento en productos Apple</p>
                </div>
            
            </div>

            <div className="mainContainer__containerBtns">
                <button className="mainContainer__containerBtns--left">
                <img src={close} alt=""/>
                </button>
                <button className="mainContainer__containerBtns--right">
                <img src={open} alt=""/>
                </button>
            </div>

        </div>

    
    </>
    );
};

export default SlidesShow;








