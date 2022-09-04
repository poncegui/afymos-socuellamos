import open from "../icons/open.svg";


const OpenBtn = props => {

  return (
    <>
      <button
        className="article__entidad--readMore_btn"
        id="article__entidad--readMore_btn"
        onClick={props.onClick}
      >
        <img
          className="article__entidad--icon"
          src={open}
          alt="ver texto articulos entidad"
        />
      </button>
    </>
  );
};

export default OpenBtn;
