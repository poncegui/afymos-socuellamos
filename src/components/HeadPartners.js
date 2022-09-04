import OpenBtn from "./OpenBtn";

const HeadPartners = (props) => {
  return (
    <section>
      <div className="article__entidad">
        <h5 className="article__entidad--small">Nuestros colaboradores</h5>
        <OpenBtn 
        onClick={props.onClick} 
        />
      </div>
    </section>
  );
};

export default HeadPartners;
