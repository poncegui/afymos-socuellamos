import logo from "../logos/logo-afymos.png";
import arrow from "../icons/down.svg";
import menu from "../icons/ico-menu.svg";
import facebook from "../icons/facebook.svg";
import home from "../icons/home.svg";

const Header = () => {
  return (
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
      <div className="container__menu">
        <div className="menu">
          <nav className="menu">
            <ul>
              <li>
                <a href="#">Donaciones</a>
              </li>
              <li>
                <a href="#" id="selected">
                  <img className="homeIcon" src={home} alt="Home Afymos" />
                </a>
              </li>
              <li>
                <a href="#">Diversidad Funcional</a>
              </li>
              <li>
                <a href="#">Modelo de Intervención</a>
              </li>
              <li>
                <a href="#">Organigrama</a>
              </li>
              <li>
                <a href="#">Programas</a>
                <ul>
                  <li>
                    <a href="#">Empleo y Formación</a>
                  </li>
                  <li>
                    <a href="#">Fomento de la autonomía</a>
                  </li>
                  <li>
                    <a href="#">Integración Sociolaboral</a>
                  </li>
                  <li>
                    <a href="#">Apoyo Residencial</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Centro de Formación</a>
              </li>
              <li>
                <a href="#">Servicios y Proyectos</a>
                <ul>
                  <li>
                    <a href="#">Atención a familias</a>
                  </li>
                  <li>
                    <a href="#">Atención integral a la diversidad funcional </a>
                  </li>
                  <li>
                    <a href="#">Artesanía</a>
                  </li>
                  <li>
                    <a href="#">Ocio y Voluntariado</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <nav className="header__menu">
        <a
          className="header__burger"
          href="https://adalab.es/"
          target="_blank"
          title="Web Afymos"
        >
          <img src={menu} alt="main menu" />
        </a>
        <label htmlFor="btn-menu">✖️</label>
      </nav>

      <div className="slogan">
        <section className="slogan__text">
          <div className="header_superior__hidden">
            <div className="header_superior__container">
              <img
                className="header_superior__container--logo"
                src={logo}
                alt="logo-afymos.png"
              />
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
  );
};

export default Header;
