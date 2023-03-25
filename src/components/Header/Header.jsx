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
              alt="logo-afymos"
            />
            <h2 className="header_superior__container--title">Afymos</h2>

            <div className="header_superior__container--social"></div>
          </div>
        </div>

        <section className="slogan">
          <div className="slogan__container">
            <h3 className="slogan__container--phrase">
              "Dadme un punto de apoyo y moveré el mundo."
            </h3>
            <h5>Arquímedes Siracoussa</h5>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
