import styled from "styled-components";

const AboutUs = () => {
  return (
    <SectionAboutUs>
      <AboutUsContainer>
        <AboutUsTitle>
          <h4>
            Afymos es nuestra<span>&#160;</span>
          </h4>
        </AboutUsTitle>

        <AboutUsText>
          <p>
            Asociación de familiares y amigos de personas con alguna
            discapacidad
          </p>
        </AboutUsText>
      </AboutUsContainer>
    </SectionAboutUs>
  );
};
export default AboutUs;

const SectionAboutUs = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: pink;
  width: 100%;
  text-align: justify;
`;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;
const AboutUsTitle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background: #071c2f;
  text-align: center;
  align-items: center;
  line-height: 20px;

  h4 {
    width: 100%;
    position: relative;
    float: left;
    color: pink;
    padding-left: 15px;
    font-size: 20px;
  }

  h4 span {
    position: absolute;
    right: 0;
    width: 0;
    font-size: 40px;
    background: #071c2f;
    border-left: 3px solid pink;
    line-height: 35px;
    animation: typing 5s steps(25) normal;
  }

  @media (min-width: 768px) {
    h4 {
      font-size: 36px;
      white-space: nowrap;
      line-height: 20px;
    }
  }

  @media (min-width: 1090px) {
    h4 {
      font-size: 40px;
      line-height: 10px;
      min-width: 800px;
    }
  }

  @keyframes typing {
    from {
      width: 75%;
    }
    to {
      width: 0%;
    }
  }

  @media (min-width: 360px) {
    @keyframes typing {
      from {
        width: 58%;
      }
      to {
        width: 5%;
      }
    }
  }

  @media (min-width: 320px) {
    @keyframes typing {
      from {
        width: 70%;
      }
      to {
        width: 5%;
      }
    }
  }

  @media (min-width: 768px) {
    @keyframes typing {
      from {
        width: 50%;
      }
      to {
        width: 20%;
      }
    }
  }

  @media (min-width: 1024px) {
    @keyframes typing {
      from {
        width: 55%;
      }
      to {
        width: 30%;
      }
    }
  }

  @media (min-width: 1300px) {
    @keyframes typing {
      from {
        width: 50%;
      }
      to {
        width: 30%;
      }
    }
  }

  h4:first-letter {
    font-size: 180%;
    font-weight: bold;
    color: gray;
    margin-bottom: 20px;
  }
`;

const AboutUsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: pink;

  p {
    color: #071c2f;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }

  p:first-letter {
    font-size: 200%;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    &__text {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 50px;
      background-color: pink;

      p {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
`;
