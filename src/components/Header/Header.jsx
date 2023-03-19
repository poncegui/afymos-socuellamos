import logo from "../../logos/logo-afymos.png";
import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
// import styled from "styled-components";

const Header = () => {
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

            <div className="header_superior__container--social">
              <a
                className=""
                href="https://es-es.facebook.com/pages/category/Nonprofit-organization/Afymos-Asociaci%C3%B3n-878470228866846/"
                target="_blank"
                title="facebook Afymos"
                rel="noreferrer"
              >
                <img
                  className="facebook"
                  src={facebook}
                  alt="facebook Afymos"
                />
              </a>
              <a
                href="https://www.instagram.com/afymos/?hl=es"
                alt="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="instagram"
                  src={instagram}
                  alt="instagram Afymos"
                />
              </a>
            </div>
          </div>
        </div>

        <section className="slogan">
          <h3 className="slogan__phrase">
            "Dadme un punto de apoyo y moveré el mundo."
            <br></br>
            Arquímedes Siracoussa
          </h3>
        </section>
      </header>
    </>
  );
};

export default Header;
