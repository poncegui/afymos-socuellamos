
import RenderMainText from "./RenderMainText";

const Main = (props) => {
  return (
    <section id="aboutUs">
      <article className="article">
        <div className="article__entidad">
            <h4>Afymos</h4>
            <div className="article__title">
            <p>
              Asociación de familiares y amigos de personas con alguna
              discapacidad.
            </p>
          </div>
          <RenderMainText
            onClick={props.onClick}
            toggleStatusMain={props.toggleStatusMain}
          />
        </div>
      </article>
    </section>
  );
};

export default Main;
