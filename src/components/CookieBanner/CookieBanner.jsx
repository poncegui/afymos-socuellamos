import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const STORAGE_KEY = "afymos_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const acceptBtnRef = useRef(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  /* Mover el foco al botón principal cuando el banner aparece */
  useEffect(() => {
    if (visible && acceptBtnRef.current) {
      acceptBtnRef.current.focus();
    }
  }, [visible]);

  const saveConsent = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Overlay role="dialog" aria-modal="true" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
      <Banner>
        <IconWrap aria-hidden="true">🍪</IconWrap>

        <Content>
          <Title id="cookie-title">Usamos cookies</Title>
          <Desc id="cookie-desc">
            Utilizamos cookies propias para mejorar tu experiencia de navegación y
            analizar el tráfico de forma anónima. No compartimos tus datos con
            terceros.{" "}
            <DetailsToggle
              type="button"
              aria-expanded={showDetails}
              onClick={() => setShowDetails((v) => !v)}
            >
              {showDetails ? "Ocultar detalles" : "Ver detalles"}
            </DetailsToggle>
          </Desc>

          {showDetails && (
            <DetailsList aria-label="Tipos de cookies que usamos">
              <DetailItem>
                <DetailIcon aria-hidden="true">✅</DetailIcon>
                <div>
                  <strong>Cookies esenciales</strong>
                  <p>Necesarias para el funcionamiento básico de la web. No se pueden desactivar.</p>
                </div>
              </DetailItem>
              <DetailItem>
                <DetailIcon aria-hidden="true">📊</DetailIcon>
                <div>
                  <strong>Cookies analíticas</strong>
                  <p>Nos ayudan a entender cómo usas la web de forma anónima para mejorar el servicio.</p>
                </div>
              </DetailItem>
            </DetailsList>
          )}

          <PolicyLink>
            <Link to="/politica-privacidad">Política de privacidad</Link>
          </PolicyLink>
        </Content>

        <Actions>
          <BtnAccept
            ref={acceptBtnRef}
            onClick={() => saveConsent("accepted")}
          >
            Aceptar todas
          </BtnAccept>
          <BtnReject
            onClick={() => saveConsent("essential")}
          >
            Solo esenciales
          </BtnReject>
        </Actions>

        <CloseBtn
          aria-label="Cerrar aviso de cookies"
          onClick={() => saveConsent("essential")}
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </CloseBtn>
      </Banner>
    </Overlay>
  );
};

export default CookieBanner;

/* ── Styled Components ─────────────────────────────────────────────────── */

const Overlay = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: min(96vw, 680px);
  z-index: 9999;
  animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;

  @keyframes slideUp {
    from { opacity: 0; transform: translateX(-50%) translateY(24px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  @media (max-width: 480px) {
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    width: 100%;
    border-radius: 1.25rem 1.25rem 0 0;
  }
`;

const Banner = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(198, 177, 201, 0.35);
  border-radius: 1.25rem;
  box-shadow:
    0 8px 32px rgba(7, 28, 47, 0.14),
    0 2px 8px rgba(7, 28, 47, 0.08);
  padding: 1.5rem 1.75rem 1.5rem 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1.25rem 1.25rem 1.5rem;
    border-radius: 1.25rem 1.25rem 0 0;
  }
`;

const IconWrap = styled.span`
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.1rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #071c2f;
  margin: 0 0 0.375rem 0;
  line-height: 1.3;
`;

const Desc = styled.p`
  font-size: 0.875rem;
  color: #4a5568;
  margin: 0 0 0.5rem 0;
  line-height: 1.55;
`;

const DetailsToggle = styled.button`
  background: none;
  border: none;
  color: #0b4a6f;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  font-family: inherit;

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  background: #f7f5f8;
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
`;

const DetailItem = styled.li`
  display: flex;
  gap: 0.625rem;
  align-items: flex-start;
  font-size: 0.8125rem;
  color: #4a5568;
  line-height: 1.5;

  strong {
    display: block;
    color: #071c2f;
    font-weight: 600;
    margin-bottom: 0.125rem;
  }

  p {
    margin: 0;
    font-size: 0.8125rem;
  }
`;

const DetailIcon = styled.span`
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
`;

const PolicyLink = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;

  a {
    color: #6b6f76;
    text-decoration: underline;

    &:hover { color: #071c2f; }
    &:focus-visible {
      outline: 3px solid #ffbf47;
      outline-offset: 2px;
      border-radius: 2px;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-shrink: 0;
  justify-content: center;
  align-self: center;

  @media (max-width: 600px) {
    flex-direction: row;
    width: 100%;
    align-self: auto;
  }
`;

const BtnBase = styled.button`
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  padding: 0.6rem 1.25rem;
  font-family: inherit;
  transition: transform 140ms ease, box-shadow 140ms ease, background 140ms ease;
  min-width: 9rem;

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    flex: 1;
    min-width: 0;
    text-align: center;
  }
`;

const BtnAccept = styled(BtnBase)`
  background: #071c2f;
  color: #ffffff;
  border: 2px solid #071c2f;
  box-shadow: 0 4px 14px rgba(7, 28, 47, 0.18);

  &:hover {
    background: #0f2f4f;
    box-shadow: 0 6px 18px rgba(7, 28, 47, 0.25);
  }
`;

const BtnReject = styled(BtnBase)`
  background: transparent;
  color: #071c2f;
  border: 2px solid rgba(7, 28, 47, 0.25);

  &:hover {
    border-color: #071c2f;
    background: rgba(7, 28, 47, 0.04);
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0.875rem;
  right: 0.875rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b6f76;
  padding: 0.375rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 140ms ease, color 140ms ease;

  &:hover {
    background: rgba(7, 28, 47, 0.07);
    color: #071c2f;
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
`;
