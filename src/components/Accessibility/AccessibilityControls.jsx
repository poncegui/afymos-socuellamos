import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const STORAGE_KEY = 'afymos_fontScale';

// Generador de IDs únicos para accesibilidad
let idCounter = 0;
const generateUniqueId = (prefix) => {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
};

const AccessibilityControls = ({
  text = '',
  min = 0.8,
  max = 2,
  inverse = false,
}) => {
  // Generar IDs únicos para esta instancia del componente
  const uniqueIds = useMemo(() => ({
    fontLabel: generateUniqueId('font-label'),
    fontHelp: generateUniqueId('font-scale-help'),
  }), []);

  const [scale, setScale] = useState(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v ? Number(v) : 1;
    } catch (e) {
      return 1;
    }
  });

  const [speakActive, setSpeakActive] = useState(false);

  const updateScale = newScale => {
    try {
      localStorage.setItem(STORAGE_KEY, String(newScale));
      document.documentElement.style.setProperty('--fs', String(newScale));
      setScale(newScale);
    } catch (e) {
      // ignore
    }
  };

  const increase = () => {
    const newScale = Math.min(max, Number((scale + 0.1).toFixed(2)));
    updateScale(newScale);
  };

  const decrease = () => {
    const newScale = Math.max(min, Number((scale - 0.1).toFixed(2)));
    updateScale(newScale);
  };

  const reset = () => updateScale(1);

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (speakActive) {
        window.speechSynthesis.cancel();
        setSpeakActive(false);
      } else {
        // Prioridad: usar el texto específico pasado como prop
        let textToSpeak = text;

        // Si no hay texto específico, buscar la sección/artículo más cercano
        if (!textToSpeak) {
          // Buscar el contenedor principal (section, article, o main)
          const article = document.querySelector('article');
          const section = document.querySelector('section[role="region"]');
          const main = document.querySelector('main');
          const content = article || section || main;

          if (content) {
            textToSpeak = content.innerText;
          }
        }

        // Si hay texto para leer, proceder
        if (textToSpeak && textToSpeak.trim()) {
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          utterance.lang = 'es-ES';
          utterance.rate = 0.9;
          utterance.onstart = () => setSpeakActive(true);
          utterance.onend = () => setSpeakActive(false);
          window.speechSynthesis.speak(utterance);
        }
      }
    }
  };

  return (
    <Container role="region" aria-label="Controles de accesibilidad">
      <ControlsGroup>
        <Label $inverse={inverse} id={uniqueIds.fontLabel}>
          Tamaño de fuente:
        </Label>
        <ButtonGroup
          role="group"
          aria-labelledby={uniqueIds.fontLabel}
        >
          <ControlBtn
            onClick={decrease}
            disabled={scale <= min}
            aria-label="Reducir tamaño de letra"
            aria-describedby={uniqueIds.fontHelp}
            $inverse={inverse}
          >
            <FontAwesomeIcon icon={faMinus} aria-hidden="true" /> A
          </ControlBtn>
          <ControlBtn
            onClick={reset}
            aria-label="Tamaño de letra por defecto"
            $inverse={inverse}
          >
            A
          </ControlBtn>
          <ControlBtn
            onClick={increase}
            disabled={scale >= max}
            aria-label="Aumentar tamaño de letra"
            aria-describedby={uniqueIds.fontHelp}
            $inverse={inverse}
          >
            <FontAwesomeIcon icon={faPlus} aria-hidden="true" /> A
          </ControlBtn>
        </ButtonGroup>
        <span id={uniqueIds.fontHelp} className="sr-only">
          Escala actual: {Math.round(scale * 100)}%
        </span>
      </ControlsGroup>

      <SpeakBtn
        onClick={handleSpeak}
        $active={speakActive}
        aria-label={
          speakActive
            ? 'Detener lectura en voz alta'
            : 'Leer contenido en voz alta'
        }
        aria-pressed={speakActive}
        $inverse={inverse}
      >
        <FontAwesomeIcon icon={faVolumeUp} aria-hidden="true" />
        <span>{speakActive ? ' Pausar' : ' Leer'}</span>
      </SpeakBtn>
    </Container>
  );
};

export default AccessibilityControls;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  background: ${props =>
    props.$inverse ? 'rgba(198, 177, 201, 0.1)' : 'rgba(198, 177, 201, 0.05)'};
  border-radius: 8px;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
  }
`;

const ControlsGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Label = styled.span`
  font-size: calc(0.9rem * var(--fs, 1));
  font-weight: 600;
  color: ${props => (props.$inverse ? '#071c2f' : 'rgba(255, 255, 255, 0.9)')};
  margin-bottom: 0;
  white-space: nowrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
`;

const ControlBtn = styled.button`
  background: ${props =>
    props.$inverse ? 'rgba(198, 177, 201, 0.2)' : 'rgba(198, 177, 201, 0.15)'};
  border: 1px solid
    ${props =>
      props.$inverse ? 'rgba(198, 177, 201, 0.4)' : 'rgba(198, 177, 201, 0.3)'};
  color: ${props => (props.$inverse ? '#224464' : '#c6b1c9')};
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  font-size: calc(0.85rem * var(--fs, 1));
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props =>
      props.$inverse
        ? 'rgba(198, 177, 201, 0.35)'
        : 'rgba(198, 177, 201, 0.25)'};
    transform: translateY(-1px);
  }

  &:not(:disabled):active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
`;

const SpeakBtn = styled.button`
  background: ${props => (props.$active ? '#81b71a' : '#c6b1c9')};
  border: none;
  color: ${props => (props.$active ? '#ffffff' : '#071c2f')};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  font-size: calc(0.9rem * var(--fs, 1));
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
