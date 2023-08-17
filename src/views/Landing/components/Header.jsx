import background from "../assets/images-background/background-1.jpg";
import logo from "./assets/logos/logo-afymos.png";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <HeaderTitle>
            <img src={logo} alt="logo-afymos" />
            <h1>Afymos</h1>
          </HeaderTitle>
          <HeaderSubtitle>
            <h2>"Dadme un punto de apoyo y moveré el mundo" </h2>
            <i>Arquímedes Siracoussa.</i>
          </HeaderSubtitle>
        </HeaderContainer>

        <HeaderImgBackground
          style={{
            backgroundImage: `url(${background})`,
            WebkitBackgroundSize: "cover",
            backgroundPositionY: "center",
            backgroundPositionX: "center",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        />
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
  background-color: #ffc0bc;
  width: 100%;
  gap: 1.5rem;
  margin: 1.5rem auto;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  img {
    display: block;
    height: 8rem;
  }

  h1 {
    font-size: 8rem;
    text-transform: uppercase;
    color: #071c2f;
  }

  @media (max-width: 440px) {
    h1 {
      font-size: 5rem;
    }

    img {
      height: 4rem;
    }
  }
`;

const HeaderSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  gap: 1rem;

  h2 {
    font-size: 2rem;
    color: #071c2f;
  }

  i {
    font-size: 1.5rem;
    color: #071c2f;
  }
  @media (max-width: 440px) {
    h2 {
      font-size: 1.4rem;
    }

    i {
      font-size: 0.8rem;
    }
  }
`;

const HeaderImgBackground = styled.section``;
