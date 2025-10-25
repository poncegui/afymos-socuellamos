import logo from './logos/logo-afymos.png';
import styled from 'styled-components';

const Navbar = props => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <NavContainer id={props.id}>
        {/* Back button — use history.back without overriding Link behaviour */}
        <BackButton type="button" onClick={handleBack} aria-label="Volver">
          <NavContainerPrincipal>
            <i className="fa-solid fa-angles-left" aria-hidden="true"></i>
            <h2>
              volver a <span>Principal</span>
            </h2>
          </NavContainerPrincipal>
        </BackButton>
        <RightMenu>
          <h1>{props.title}</h1>
          <img
            className="header_superior__container--logo"
            src={logo}
            alt={props.alt}
          />
        </RightMenu>
      </NavContainer>
    </>
  );
};

const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #c6b1c9;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0.4rem;

  h2 {
    margin: 0;
    color: #c6b1c9;
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
    border-radius: 6px;
  }
`;

export default Navbar;

const NavContainer = styled.nav`
  background-color: #071c2f;
  height: 80px;
  width: 100%;
  position: sticky;
  align-items: center;
  top: 0;
  z-index: 50;

  .containerPrincipal {
    display: flex;
    flex-direction: row;
  }

  .fa-angles-left {
    margin-left: 50px;
    font-size: 1.5rem;
    color: #c6b1c9;

    @media (max-width: 768px) {
      margin-left: 40px;
    }
  }

  h2 {
    margin-left: 10px;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #c6b1c9;
    text-decoration: none;
    margin-right: 1.5rem;
  }
`;
NavContainer.displayName = 'NavContainer';

const NavContainerPrincipal = styled.div`
  display: flex;
  align-items: center;
`;

const RightMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;

  h1 {
    text-align: center;
    color: #c6b1c9;
    font-weight: bold;
    text-transform: lowercase;
    font-size: 2.5rem;
  }
  img {
    width: 10%;
  }
  span {
    color: white;
  }

  h1:first-letter {
    font-size: 120%;
  }

  @media (max-width: 768px) {
    min-height: 15vh;
    h1 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 440px) {
    display: flex;
    flex-direction: end;
    img {
      width: 20%;
    }
    min-height: 10vh;
    h1 {
      display: none;
    }
  }
`;
