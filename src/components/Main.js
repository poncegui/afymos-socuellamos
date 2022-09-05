import Collapsable from "./Collapsable";
import RenderMainText from "./RenderMainText";

const Main = props => {
  return (
    <main>
      <article className="article">
        <div className="article__entidad">
          <div className="article__entidad--small">
          <h5 className="">Nuestra entidad</h5>
          </div>
          <h4 className="article__title">
            AFYMOS fue fundada en el año 1991. <br></br>
            Ver los fines que perseguimos según
            nuestros estatutos:
          </h4>

          <Collapsable onClick={props.onClick} />
    
          <RenderMainText
            onClick={props.onClick}
            toggleStatusMain={props.toggleStatusMain}
          />
        </div>

        <div className="boxBtns">
            <nav className="article__link">
              <a className="article__link--btn" href="https://adalab.es/">
                Donaciones
              </a>
            </nav>
            <nav className="article__link">
              <a className="article__link--btn" href="https://adalab.es/">
                Sensibilización
              </a>
            </nav>
            <nav className="article__link">
              <a className="article__link--btn" href="https://adalab.es/">
                Testimonios
              </a>
            </nav>
          </div>
      </article>
    </main>
  );
};

export default Main;
