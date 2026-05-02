import React, { useEffect, useState } from 'react';

import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return null;
};

export default ScrollToTop;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  z-index: 1;
  cursor: pointer;
  color: grey;
  right: 2%;
  background: none;
  border-radius: 50px;
  padding: 0px;
  border: none;
  opacity: 0.7;
  font-size: calc(4rem * var(--fs, 1));
  margin-right: 1.5rem;

  @media (max-width: 440px) {
    font-size: calc(3rem * var(--fs, 1));
  }
`;
