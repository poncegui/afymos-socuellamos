import Collapsable from "./Collapsable";

const HeadPartners = props => {
  return (
    <section>
      <div className="article__entidad">
        <h5 className="article__entidad--small">Nuestros colaboradores</h5>
        <Collapsable
        toggleStatus={props.toggleStatus}
        onClick={props.onClick} 
        onChange={props.onChange}
        />
      </div>
    </section>
  );
};

export default HeadPartners;
