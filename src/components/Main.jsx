import Collapsable from "./templates/Collapsable";
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
            Asociación sin ánimo de lucro de familiares y amigos de personas con alguna
            discapacidad. <span>&#160;</span>
            </p>
          </div>

          <div className="article__entidad--btn">
            <Collapsable onClick={props.onClick} />
            <h4>
              leer más...
            </h4>
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
