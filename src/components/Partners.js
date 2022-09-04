
const Partners = (props) => {
  return (
    <section>
      <div className={`${props.classContainer}`}>
        <div className={`${props.class}`}>
          <div className="cover">
            <a className="partners" href={props.href} target={props.target}>
              <img src={props.src} alt={props.alt} />{" "}
            </a>
            <div className="img__back"></div>
          </div>
          <div className="description">
            <h2>{props.text}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;


