import CarouselNews from './carouselNoticias/CarouselNews';
import logo from './assets/logos/logo-afymos.png';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <HeaderTitle>
            <img loading="lazy" src={logo} alt="logo-afymos" />
            <h1 className="brand-title">Afymos</h1>
          </HeaderTitle>
          <HeaderSubtitle>
            <h2>"Dadme un punto de apoyo y moveré el mundo" </h2>
            <i>Arquímedes Siracoussa.</i>
          </HeaderSubtitle>
        </HeaderContainer>

        <CarouselNews />
      </HeaderSection>
    </>
  );
};
export default Header;

const HeaderSection = styled.header`
  margin: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c6b1c9;
  width: 100%;
  gap: clamp(1rem, 3vw, 1.5rem);
  margin: clamp(1rem, 3vw, 1.5rem) auto;
  padding: clamp(1rem, 2vw, 2rem) clamp(0.5rem, 2vw, 1rem);
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 3vw, 1.5rem);

  img {
    display: block;
    height: clamp(4rem, 10vw, 8rem);
    width: auto;
    object-fit: contain;
  }

  h1 {
    font-size: calc(clamp(3rem, 12vw, 8rem) * var(--fs, 1));
    text-transform: uppercase;
    color: #071c2f;
    font-weight: 700;
    margin: 0;
    line-height: 1.1;
  }

  @media (max-width: 768px) {
    gap: clamp(0.75rem, 2vw, 1rem);

    h1 {
      font-size: calc(clamp(2.5rem, 10vw, 6rem) * var(--fs, 1));
    }

    img {
      height: clamp(3rem, 8vw, 6rem);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: clamp(0.5rem, 1.5vw, 0.75rem);

    h1 {
      font-size: calc(clamp(2rem, 8vw, 5rem) * var(--fs, 1));
    }

    img {
      height: clamp(2.5rem, 6vw, 4rem);
    }
  }
`;

const HeaderSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(0.5rem, 1.5vw, 1rem);
  text-align: center;
  max-width: 800px;

  h2 {
    font-size: calc(clamp(1.2rem, 4vw, 2rem) * var(--fs, 1));
    color: #071c2f;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
    font-style: italic;
  }

  i {
    font-size: calc(clamp(0.9rem, 3vw, 1.5rem) * var(--fs, 1));
    color: #071c2f;
    font-weight: 400;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    gap: clamp(0.4rem, 1vw, 0.75rem);

    h2 {
      font-size: calc(clamp(1.1rem, 3.5vw, 1.8rem) * var(--fs, 1));
    }

    i {
      font-size: calc(clamp(0.85rem, 2.5vw, 1.3rem) * var(--fs, 1));
    }
  }

  @media (max-width: 480px) {
    gap: clamp(0.3rem, 0.8vw, 0.5rem);

    h2 {
      font-size: calc(clamp(1rem, 3vw, 1.4rem) * var(--fs, 1));
    }

    i {
      font-size: calc(clamp(0.8rem, 2vw, 0.8rem) * var(--fs, 1));
    }
  }
`;
