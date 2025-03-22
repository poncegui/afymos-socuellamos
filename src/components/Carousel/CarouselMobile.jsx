import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const CarouselMobile = ({ items, withoutHeader }) => {
  return (
    <MobileCarouselContainer role="region" aria-label="Carrusel móvil de noticias">
      {!withoutHeader && (
        <Header>
          <CircleIcon />
          Noticias
        </Header>
      )}
      <ScrollArea>
        {items.map((item, index) => (
          <Card key={index}>
            <img src={item.image} alt={item.alt || item.title} loading="lazy" />
            <CardContent>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link && <StyledLink to={item.link}>Leer más</StyledLink>}
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </MobileCarouselContainer>
  );
};

export default CarouselMobile;

const MobileCarouselContainer = styled.section`
  background: #f5f2f6;
  padding: 2rem 1rem;
`;

const Header = styled.h2`
  font-size: 2rem;
  color: #071c2f;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  text-transform: uppercase;
`;

const CircleIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #224464;
`;

const ScrollArea = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 1rem;
`;

const Card = styled.div`
  flex: 0 0 85%;
  scroll-snap-align: start;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled(Link)`
  align-self: flex-start;
  background-color: #071c2f;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background-color: #0c2a4e;
  }
`;

