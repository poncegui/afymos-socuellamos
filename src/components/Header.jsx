import logo from "../logos/logo-afymos.png";
import facebook from "../icons/facebook.svg";


const Header = props => {
  return (
    <>
  
    <header className="header" id="header">
     
      <div className="header_superior">
        <div className="header_superior__container">
          <img
            className="header_superior__container--logo"
            src={logo}
            alt="Logo Afymos"
          />
          <h2 className="header_superior__container--title">Afymos</h2>
          <a
            className=""
            href="https://es-es.facebook.com/pages/category/Nonprofit-organization/Afymos-Asociaci%C3%B3n-878470228866846/"
            target="_blank"
            title="facebook Afymos"
          >
            <img
              className="header_superior__container--facebook"
              src={facebook}
              alt="facebook Afymos"
            />{" "}
          </a>
        </div>
      </div>
      <div className="slogan">
        <section className="slogan__text">
          <div className="header_superior__hidden">
            <div className="header_superior__container">
              {/* <img
                className="header_superior__container--logo"
                src={logo}
                alt="logo-afymos.png"
              /> */}
            </div>
          </div>
          <h3 className="slogan__text--phrase">
            "Dadme un punto de apoyo y moveré el mundo."
          </h3>
          <h1 className="slogan__text--author"> Arquímedes de Siracusa</h1>

        </section>
      </div>
      {/* Menú lateral v. mobile */}
    </header>
    </>
  );
};

export default Header;
