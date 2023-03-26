import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../logos/logo-afymos.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = (props) => {
  const handleBack = () => {
    window.history.back();
    console.log("vuelvo");
  };

  useEffect(() => {
    AOS.init({ duration: 10000 });
  }, []);

  return (
    <>
      <Hero>
        <h1>{props.title}</h1>
        <img
          className="header_superior__container--logo"
          src={logo}
          alt={props.alt}
        />
      </Hero>
      <NavContainer id="menu-principal">
        <Link to="/" onClick={handleBack}>
          <div className="containerPrincipal">
            <i class="fa-solid fa-angles-left"></i>
            <h3>
              volver a <span>Principal</span>
            </h3>
          </div>
        </Link>
      </NavContainer>
    </>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  background-color: #071c2f;
  height: 100px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 50;

  .containerPrincipal {
    display: flex;
    flex-direction: row;
  }

  .fa-angles-left {
    margin-left: 50px;
    font-size: 25px;
    color: pink;

    @media (max-width: 768px) {
      margin-left: 40px;
    }
  }

  h3 {
    color: pink;
    font-weight: 400;
    margin-left: 20px;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: pink;
    text-decoration: none;
    margin-right: 1.5rem;
  }
`;

const Hero = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 20vh;
  text-transform: uppercase;
  width: 100%;
  z-index: 20;
  background-color: pink;

  h1 {
    text-align: center;
    color: #071c2f;
    font-weight: bold;
    text-transform: lowercase;
    font-size: 70px;
  }
  img {
  }
  span {
    color: white;
  }

  h1:first-letter {
    font-size: 150%;
  }

  @media (max-width: 768px) {
    min-height: 15vh;
    h1 {
      font-size: 30px;
    }
    img {
      display: none;
    }
  }
`;
