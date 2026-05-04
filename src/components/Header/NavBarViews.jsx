import logo from './logos/logo-afymos.png';
import styled from 'styled-components';
import { FontAwesomeIcon, faAnglesLeft } from '../../utils/icons';

const Navbar = props => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <NavContainer
      id={props.id}
      role="navigation"
      aria-label="Navegación de servicios"
    >
      {/* Back button — use history.back without overriding Link behaviour */}
      <BackButton
        type="button"
        onClick={handleBack}
        aria-label="Volver a la página anterior"
      >
        <NavContainerPrincipal>
          <FontAwesomeIcon icon={faAnglesLeft} aria-hidden="true" />
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
          alt={props.alt || 'Logo de Afymos'}
        />
      </RightMenu>
    </NavContainer>
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
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(198, 177, 201, 0.1);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
    border-radius: 6px;
  }

  h2 {
    margin: 0;
    color: #c6b1c9;
    font-size: calc(clamp(0.9rem, 2.5vw, 1.1rem) * var(--fs, 1));
    font-weight: 500;
    text-transform: lowercase;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    padding: 0.4rem;

    h2 {
      font-size: calc(0.9rem * var(--fs, 1));
    }
  }

  @media (max-width: 480px) {
    padding: 0.3rem;

    h2 {
      font-size: calc(0.85rem * var(--fs, 1));
    }
  }
`;

export default Navbar;

const NavContainer = styled.nav`
  background-color: #071c2f;
  height: clamp(70px, 8vh, 90px);
  width: 100%;
  position: sticky;
  align-items: center;
  top: 0;
  z-index: 50;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  svg {
    margin-left: clamp(0.75rem, 2vw, 1.5rem);
    font-size: calc(clamp(1rem, 2vw, 1.2rem) * var(--fs, 1));
    color: #c6b1c9;
    flex-shrink: 0;
  }

  h2 {
    margin-left: 0.5rem;
    font-size: calc(clamp(0.85rem, 2vw, 1rem) * var(--fs, 1));
    font-weight: 500;

    span {
      font-weight: 700;
    }
  }

  a {
    color: #c6b1c9;
    text-decoration: none;
    margin-right: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.75rem;
    height: clamp(65px, 7vh, 80px);

    svg {
      margin-left: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    height: clamp(60px, 6vh, 75px);
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
  justify-content: space-between;
  gap: 1rem;
  flex-shrink: 0;

  h1 {
    text-align: center;
    color: #c6b1c9;
    font-weight: 700;
    text-transform: lowercase;
    font-size: calc(clamp(1.5rem, 4vw, 2rem) * var(--fs, 1));
    margin: 0;
    line-height: 1.2;
    flex-shrink: 0;
  }

  img {
    width: auto;
    max-width: clamp(50px, 10vw, 80px);
    height: 100%;
    max-height: clamp(50px, 6vh, 70px);
    object-fit: contain;
    flex-shrink: 0;
  }

  span {
    color: white;
  }

  h1:first-letter {
    font-size: calc(120% * var(--fs, 1));
  }

  @media (max-width: 768px) {
    gap: 0.75rem;

    h1 {
      font-size: calc(clamp(1.5rem, 4vw, 2.2rem) * var(--fs, 1));
    }

    img {
      max-width: clamp(50px, 10vw, 100px);
      max-height: clamp(45px, 5vh, 65px);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;

    img {
      max-width: clamp(40px, 8vw, 80px);
      max-height: clamp(40px, 5vh, 60px);
    }

    h1 {
      display: none;
    }
  }
`;
