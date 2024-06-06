import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media (max-width: 900px) {
    grid-template-rows: repeat(auto-fill, minmax(250px, 2fr));
  }
`;


const CircularButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #007bff;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonGrid = () => {
  return (
    <Container>
      {[...Array(4)].map((_, index) => (
        <CircularButton key={index}>
          {`Button ${index + 1}`}
        </CircularButton>
      ))}
    </Container>
  );
};

export default ButtonGrid;

