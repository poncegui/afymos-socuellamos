import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScrollStepper = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (currentScrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detectar dirección del scroll
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StepperContainer
      style={{ opacity: isVisible ? 1 : 0 }}
      role="status"
      aria-label={`Progreso de scroll: ${Math.round(scrollProgress)}%`}
      aria-live="polite"
    >
      <ProgressCircle
        progress={scrollProgress}
        onClick={handleScrollToTop}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleScrollToTop();
          }
        }}
        aria-label="Volver al inicio de la página"
        title="Volver al inicio"
      >
        <ProgressText>{Math.round(scrollProgress)}%</ProgressText>
        <ArrowIcon direction={scrollDirection}>
          {scrollDirection === 'down' ? '↓' : '↑'}
        </ArrowIcon>
      </ProgressCircle>
    </StepperContainer>
  );
};

export default ScrollStepper;

const StepperContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 2%;
  z-index: 999;
  transition: opacity 0.3s ease;
  pointer-events: ${props => (props.style.opacity === '1' ? 'auto' : 'none')};
  margin-right: 1.5rem;

  @media (max-width: 640px) {
    bottom: 30px;
    right: 3%;
  }
`;

const ProgressCircle = styled.button`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: conic-gradient(
    #c6b1c9 0deg,
    #c6b1c9 ${props => props.progress * 3.6}deg,
    #e8dced ${props => props.progress * 3.6}deg,
    #e8dced 360deg
  );
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(198, 177, 201, 0.3);
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(198, 177, 201, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid #224464;
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    width: 60px;
    height: 60px;
  }
`;

const ProgressText = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  color: #224464;
  text-align: center;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const ArrowIcon = styled.span`
  position: absolute;
  font-size: 20px;
  color: #224464;
  bottom: 8px;
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 640px) {
    font-size: 16px;
    bottom: 6px;
  }
`;
