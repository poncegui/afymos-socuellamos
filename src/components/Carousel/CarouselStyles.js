import styled from "styled-components";
import { Row } from "../../globalStyles";
import Slider from "react-slick";

export const CarouselImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
`;

export const ImageWrapper = styled.div`
  width: 20%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  outline: none;
  height: 100px;

  @media (min-width: 440px) {
    border: 1px solid #bebebe;
    height: 80px;
    width: 90%;
  }
`;

export const ButtonContainer = styled(Row)`
  margin-top: 2rem;
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const CardButton = styled.button`
  background-color: #0c4577;
  font-size: 1.1rem;
  padding: 5px 10px;
  color: pink;
  cursor: pointer;
  width: 100%;
  font-weight: 400;
  margin: auto 0 0 0;
  border: none;
  border-radius: 0 0 10px 10px;

  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
