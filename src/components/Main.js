import Collapsable from "./Collapsable";
import RenderMainText from "./RenderMainText";

const Main = (props) => {
  return (
    <section id="aboutUs">
      <article className="article">
        <div className="article__entidad">
          <div className="article__entidad--small">
            <h5 className="">Nuestra entidad</h5>
          </div>
          <div className="article__title">
          <h4 className="article__title">Introdución a Afymos</h4>
          <p>
            Nuestra asociación de familiares y amigos de personas con alguna
            discapacidad es una asociación sin ánimo de lucro ubicada en la
            localidad de Socuéllamos (Ciudad Real). <br></br>
            AFYMOS fue fundada en el año 1991.
            </p>
          </div>

          <div className="article__entidad--btn">
            <Collapsable onClick={props.onClick} />
            <h4>
              leer más sobre los fines que perseguimos según nuestros estatutos;
            </h4>
          </div>

          <RenderMainText
            onClick={props.onClick}
            toggleStatusMain={props.toggleStatusMain}
          />
        </div>

        {/* <div className="containerBoxBtns">
            <nav className="containerBoxBtns__nav">
              <a className="containerBoxBtns__nav--btn" href="https://adalab.es/">
                Donaciones
              </a>
            </nav>
            <nav className="containerBoxBtns__nav">
              <a className="containerBoxBtns__nav--btn" href="https://adalab.es/">
                Sensibilización
              </a>
            </nav>
            <nav className="containerBoxBtns__nav">
              <a className="containerBoxBtns__nav--btn" href="https://adalab.es/">
                Testimonios
              </a>
            </nav>
          </div> */}
      </article>
    </section>
  );
};

export default Main;
