import OpenBtn from "./OpenBtn";
import RenderMainText from "./RenderMainText";

const Main = (props) => {
  return (
    <main>
      <article className="article">
        <div className="article__entidad">
          <h5 className="article__entidad--small">NUESTRA ENTIDAD</h5>
          <OpenBtn onClick={props.onClick} />
          <h4 className="article__title">
            AFYMOS fue fundada en el año 1991 y los fines que perseguimos según
            nuestros estatutos son:
          </h4>
          <RenderMainText
            onClick={props.onClick}
            toggleStatus={props.toggleStatus}
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
