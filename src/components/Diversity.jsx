import SlidesShowDiversity from "./SlidesShowDiversity";
import centroAfymos from "../assets/pictogramas/centro-afymos.png";
import styled from "styled-components";

const Diversity = () => {
  const links = document.querySelectorAll(".links");
  links.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classNameList.toggle("open");
    });
  });

  return (
    <>
      <DiversitySection>
        <DiversityContainer>
          <DiversityWrapPhoto>
            <DiversityPhoto>
              <SlidesShowDiversity />
            </DiversityPhoto>
          </DiversityWrapPhoto>
          <DiversityText>
            <DiversityIcon>
              <img
                src={centroAfymos}
                className="centro-afymos"
                alt="pictograma-centro"
              ></img>
              <h4>nuestras instalaciones</h4>
            </DiversityIcon>
          </DiversityText>
        </DiversityContainer>
      </DiversitySection>
    </>
  );
};
export default Diversity;

const DiversitySection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (min-width: 1090px) {
    margin: 100px;
  }
`;

const DiversityContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  width: 60%;
  height: 100%;
  flex-direction: column;
  background-color: #071c2f;
  border-radius: 5px;

  @media (min-width: 768px) {
    height: 50%;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (min-width: 1090px) {
    flex-direction: row-reverse;
  }
`;

const DiversityWrapPhoto = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
`;

const DiversityPhoto = styled.div``;

const DiversityText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  top: 0px;
  gap: 30px;
  padding: 45px 0;
  z-index: 20;
  height: 50%;

  img {
    width: 150px;
    height: 150px;
    border-radius: 10%;
  }
  h4 {
    font-size: 22px;
    text-decoration: none;
    color: #ffc0bc;
  }

  h4:first-letter {
    font-size: 150%;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    width: 60%;
    height: 100%;
    gap: 30px;
    flex-direction: column;

    i,
    h4 {
      font-size: 28px;
    }
  }

  @media (min-width: 1090px) {
  }
`;

const DiversityIcon = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-bottom: 10px;
  flex-direction: column;
  gap: 30px;
`;
