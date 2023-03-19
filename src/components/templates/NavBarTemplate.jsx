import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BurguerBtn from "./BurguerBtn";
import logo from "../../logos/logo-afymos.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

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
      <NavContainer id="menu-principal" data-aos="fade-right">
        <Link className="Link" to="/" onClick={handleBack}>
          <div className="containerPrincipal">
            <i class="fa-solid fa-angles-left"></i>
            <h3>
              volver a <span>Principal</span>
            </h3>
          </div>
        </Link>

        <div className={`links ${clicked ? "active" : ""}`}>
          <Link onClick={handleClick} to="#aboutUs" data-aos="fade-left">
            nosotros
          </Link>
          <Link
            onClick={handleClick}
            to="/centro-diversidad"
            data-aos="fade-left"
          >
            centro diversidad
          </Link>
          <Link onClick={handleClick} to="/programas" data-aos="fade-left">
            programas
          </Link>
          <Link onClick={handleClick} to="/donaciones" data-aos="fade-left">
            donaciones
          </Link>
          <Link onClick={handleClick} to="/contacto" data-aos="fade-left">
            contacto
          </Link>
        </div>
        <div className="burguer">
          <BurguerBtn clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  background-color: black;
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
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;

    text-align: center;
    transition: all 0.5s ease;
    a {
      color: pink;
      font-size: 1.2rem;
      display: block;
    }

    @media (min-width: 1090px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1.8rem;
        margin-left: 30px;
        color: white;
        display: inline;

        &:hover {
          transition: all 0.5s ease-out;
          text-decoration: underline;
        }
      }
      display: block;
    }
  }
  .links.active {
    @media (max-width: 1090px) {
      background-color: black;
      border-radius: 0 0 90% 0;
      height: 300px;
      width: 100%;
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 90px;
      left: 0;
      right: 0;
      text-align: center;

      a {
        font-size: 1.6rem;
        margin-top: 0.8rem;
        color: pink;
        cursor: pointer;

        &:hover {
          color: gray;
          font-weight: bold;
          transition: all 0.5s ease-out;
        }
      }
    }

    @media (max-width: 768px) {
    }
  }
  .burguer {
    @media (min-width: 1090px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  color: pink;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    background-color: black;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    color: black;
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
      //   margin: 100px 0px 80px 0;
      font-size: 30px;
    }
    img {
      display: none;
    }
  }
`;
