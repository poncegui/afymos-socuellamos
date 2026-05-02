import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AccessibilityControls from '../Accessibility/AccessibilityControls';

const STORAGE_KEY = 'afymos_fontScale';

export const Content = ({
  alt,
  buttonLabel,
  description,
  headline,
  href,
  img,
  inverse,
  reverse,
  topLine,
}) => {
  const [scale, setScale] = useState(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v ? Number(v) : 1;
    } catch {
      return 1;
    }
  });

  useEffect(() => {
    try {
      document.documentElement.style.setProperty('--fs', String(scale));
    } catch {}
    const onStorage = e => {
      if (e.key === STORAGE_KEY) {
        try {
          const v = e.newValue ? Number(e.newValue) : 1;
          setScale(v);
          document.documentElement.style.setProperty('--fs', String(v));
        } catch {}
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [scale]);

  const changeScale = next => {
    try {
      localStorage.setItem(STORAGE_KEY, String(next));
      document.documentElement.style.setProperty('--fs', String(next));
      setScale(next);
    } catch {}
  };

  /* Determina si href es ruta interna o URL externa */
  const isExternal =
    typeof href === 'string' &&
    (href.startsWith('http'));

  return (
    <Wrapper $inverse={inverse}>
      <Inner $reverse={reverse}>
        {/* ── Columna texto ── */}
        <TextCol>
          {topLine?.text && (
            <Label $inverse={inverse} aria-hidden="true">
              {topLine.text}
            </Label>
          )}

          {headline && <Headline $inverse={inverse}>{headline}</Headline>}

          {description && <Body $inverse={inverse}>{description}</Body>}

          {href &&
            buttonLabel &&
            (isExternal ? (
              <CtaLink
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={buttonLabel}
                $inverse={inverse}
              >
                {buttonLabel}
              </CtaLink>
            ) : (
              <CtaRouter to={href} aria-label={buttonLabel} $inverse={inverse}>
                {buttonLabel}
              </CtaRouter>
            ))}

          <AccessibilityControls text={description} inverse={inverse} />
        </TextCol>

        {/* ── Columna imagen ── */}
        {img && (
          <ImgCol>
            <ImgFrame>
              <img src={img} alt={alt || ''} loading="lazy" />
            </ImgFrame>
          </ImgCol>
        )}
      </Inner>
    </Wrapper>
  );
};

export default Content;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Wrapper = styled.section`
  background: ${({ $inverse }) => ($inverse ? '#f9f8fb' : '#071c2f')};
  padding: 4rem clamp(1.25rem, 5%, 5rem);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};

  /* Swap columns when reverse */
  ${({ $reverse }) =>
    $reverse &&
    `
    & > *:first-child { order: 2; }
    & > *:last-child  { order: 1; }
  `}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    & > *:first-child {
      order: 2;
    }
    & > *:last-child {
      order: 1;
    }
  }
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Label = styled.span`
  display: inline-block;
  font-size: calc(0.75rem * var(--fs, 1));
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  /* Mejorado contraste para WCAG AA */
  color: ${({ $inverse }) => ($inverse ? '#1a3349' : '#c6b1c9')};
  border-left: 3px solid ${({ $inverse }) => ($inverse ? '#c6b1c9' : '#c6b1c9')};
  padding-left: 0.6rem;
`;

const Headline = styled.h2`
  font-size: calc(clamp(1.4rem, 3vw, 2rem) * var(--fs, 1));
  font-weight: 700;
  line-height: 1.2;
  color: ${({ $inverse }) => ($inverse ? '#071c2f' : '#ffffff')};
  margin: 0;
`;

const Body = styled.p`
  font-size: calc(0.975rem * var(--fs, 1));
  line-height: 1.8;
  /* Mejorado de #444 a #333 para cumplir WCAG AA (contraste 4.5:1) */
  color: ${({ $inverse }) => ($inverse ? '#333' : 'rgba(255,255,255,0.95)')};
  margin: 0;
`;

const ctaBase = `
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 0.65rem 1.5rem;
  border-radius: 999px;
  font-size: calc(0.9rem * var(--fs, 1));
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }
`;

const CtaLink = styled.a`
  ${ctaBase}
  background: ${({ $inverse }) => ($inverse ? '#224464' : '#c6b1c9')};
  color: ${({ $inverse }) => ($inverse ? '#fff' : '#071c2f')};

  &:hover {
    background: ${({ $inverse }) => ($inverse ? '#071c2f' : '#d9c8dc')};
    transform: translateY(-2px);
  }
`;

const CtaRouter = styled(Link)`
  ${ctaBase}
  background: ${({ $inverse }) => ($inverse ? '#224464' : '#c6b1c9')};
  color: ${({ $inverse }) => ($inverse ? '#fff' : '#071c2f')};

  &:hover {
    background: ${({ $inverse }) => ($inverse ? '#071c2f' : '#d9c8dc')};
    transform: translateY(-2px);
  }
`;

const ImgCol = styled.div`
  width: 100%;
`;

const ImgFrame = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);

  img {
    width: 100%;
    height: auto;
    max-height: 480px;
    object-fit: cover;
    display: block;
  }
`;
