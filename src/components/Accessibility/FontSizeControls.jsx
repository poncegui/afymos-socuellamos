import React, { useEffect, useState } from "react";

import styled from "styled-components";

const STORAGE_KEY = "afymos_fontScale";

const FontSizeControls = ({ min = 0.8, max = 2 }) => {
  const [scale, setScale] = useState(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v ? Number(v) : 1;
    } catch (e) {
      return 1;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(scale));
    } catch (e) {
      // ignore
    }
    try {
      document.documentElement.style.setProperty("--fs", String(scale));
    } catch (e) {
      // ignore
    }
  }, [scale]);

  const increase = () =>
    setScale((s) => Math.min(max, Number((s + 0.1).toFixed(2))));
  const decrease = () =>
    setScale((s) => Math.max(min, Number((s - 0.1).toFixed(2))));
  const reset = () => setScale(1);

  return (
    <Controls aria-label="Control de tamaño de letra">
      <Btn onClick={decrease} aria-label="Reducir tamaño de letra">
        A-
      </Btn>
      <Btn onClick={reset} aria-label="Tamaño de letra por defecto">
        A
      </Btn>
      <Btn onClick={increase} aria-label="Aumentar tamaño de letra">
        A+
      </Btn>
    </Controls>
  );
};

export default FontSizeControls;

const Controls = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const Btn = styled.button`
  background: transparent;
  border: 1px solid rgba(198, 177, 201, 0.6);
  color: #c6b1c9;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
`;
