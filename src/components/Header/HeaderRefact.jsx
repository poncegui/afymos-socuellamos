import logo from "../../assets/logos/logo-afymos.png";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <img
            className="header_superior__container--logo"
            src={logo}
            alt="logo-afymos"
          />
          <h2 className="header_superior__container--title">Afymos</h2>
          <div className="header_superior__container--social"></div>
        </HeaderContainer>

        <SectionSlogan>
          <SloganContainer>
            <h3 className="slogan__container--phrase">
              "Dadme un punto de apoyo y moveré el mundo."
            </h3>
            <h5>Arquímedes Siracoussa</h5>
          </SloganContainer>
        </SectionSlogan>
      </HeaderSection>
    </>
  );
};
export default Header;

const HeaderSection = styled.header`
  background-color: #ffc0bc;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  img {
    display: none;
  }
  h2 {
    font-size: 40px;
    text-transform: uppercase;
  }
  h2:first-letter {
    font-size: 120%;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    visibility: visible;
    height: 20%;

    img {
      display: block;
      height: 80px;
    }

    h2 {
      display: flex;
      justify-content: center;
      font-size: 80px;
      text-transform: uppercase;
      color: #071c2f;
      margin-top: 0px;
    }
  }
  @media (min-width: 1090px) {
    align-items: center;
    margin: 0 5%;
    visibility: visible;
    justify-content: space-between;
    height: 20vh;

    img {
      display: block;
      height: 80px;
    }

    h2 {
      display: flex;
      font-size: 80px;
      text-transform: uppercase;
      color: #071c2f;
      margin-top: 0px;
    }
  }
`;

const SectionSlogan = styled.section`
  display: grid;
  place-items: center top;
  width: 100%;
  height: 90vh;
  background-image: url(../../assets/images/foto4.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffc0bc;
  text-align: center;
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 1090px) {
    gap: 2rem;
  }

  h2 {
    margin-top: 80px;
    padding: 0 20px;
    font-size: 20px;

    @media (min-width: 768px) {
      padding: 0 50px;
      font-size: 32px;
    }
    @media (min-width: 1090px) {
      font-size: 36px;
    }
  }
`;
