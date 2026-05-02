import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-text: #071c2f;
    --color-muted: #6b6f76;
    --color-bg: #ffffff;
    --max-width: 1300px;
    --gap: 1rem;
    --fs-base: 14px;
  }

  *,*::before,*::after{
    box-sizing: border-box;
  }

  html{
    font-size: 87.5%; /* 14px */
    -webkit-text-size-adjust: 100%;
  }

  body{
    margin: 0;
    padding: 0;
    /* Use a highly legible system font stack for body text. Keep decorative font for the brand title only. */
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: var(--color-text);
    background: var(--color-bg);
    line-height: 1.5;
    font-size: 1rem; /* 16px */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Headings: accessible scale */
  h1{ font-size: clamp(1.8rem, 3.8vw, 3.6rem); line-height: 1.08; margin: 0 0 0.5rem 0; }
  h2{ font-size: clamp(1.6rem, 3.2vw, 2.4rem); line-height: 1.15; margin: 0 0 0.5rem 0; }
  h3{ font-size: clamp(1.25rem, 2.6vw, 1.6rem); line-height: 1.25; margin: 0 0 0.5rem 0; }
  /* Subtítulos: fijados a 16px para mejor legibilidad */
  h4{ font-size: 16px; line-height: 1.3; }
  h5,h6{ font-size: 0.95rem; line-height: 1.3; }

  p,ul,ol,dl,blockquote{ font-size: 1rem; color: var(--color-text); margin: 0 0 1rem 0; }

  a{ 
    color: #0b4a6f; 
    text-decoration: underline; 
    transition: color 0.2s ease;
  }
  a:hover {
    color: #071c2f;
  }
  a:focus-visible{ 
    outline: 3px solid #ffbf47; 
    outline-offset: 3px; 
    border-radius: 2px; 
  }

  img{ 
    max-width: 100%; 
    height: auto; 
    display: block; 
  }
  
  /* Alt-text must be visible for all images (for accessibility debugging) */
  img:hover::after {
    /* Placeholder for potential tooltip */
  }

  /* Accessible focus for interactive elements */
  button, 
  [role="button"], 
  input, 
  select, 
  textarea {
    font-family: inherit;
    font-size: 1rem;
  }
  
  button:focus-visible,
  [role="button"]:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
    border-radius: 2px;
  }

  /* Utility to hide content visually but keep for screen readers */
  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  /* Skip link: visible solo al recibir foco (teclado / lectores de pantalla) */
  .skip-link {
    position: fixed;
    top: -100%;
    left: 1rem;
    z-index: 99999;
    background: #071c2f;
    color: #ffffff;
    font-size: 0.9375rem;
    font-weight: 700;
    padding: 0.75rem 1.25rem;
    border-radius: 0 0 0.5rem 0.5rem;
    text-decoration: none;
    transition: top 0.15s ease;

    &:focus {
      top: 0;
      outline: 3px solid #ffbf47;
      outline-offset: 3px;
    }
  }

  /* Reduce motion para usuarios con preferencia del sistema */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: more) {
    a {
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
    button, [role="button"] {
      border: 2px solid;
    }
  }

  /* Brand title: Montserrat Alternates para el logotipo Afymos */
  .brand-title {
    font-family: 'Montserrat Alternates', 'Montserrat', sans-serif;
    font-weight: 300;
    letter-spacing: 2px;
  }

`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin-right: auto;
  margin-left: auto;
  padding: 0 3rem;

  @media (max-width: 960px) {
    padding: 0 1.5rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: clamp(1.25rem, 2.6vw, 1.6rem);
  letter-spacing: 1px;
`;

export const MainHeading = styled.h1`
  font-size: clamp(2rem, 5.5vw, 3.6rem);
  margin-bottom: 1.5rem;
  color: ${({ inverse }) => (inverse ? "#071c2f" : "#6b4275")};
  width: 100%;
  letter-spacing: 2px;
  text-align: center;
`;

export const Heading = styled.h3`
  font-size: clamp(1.125rem, 2.4vw, 1.6rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "#071c2f" : "#6b4275")};
  letter-spacing: 0.4px;
  line-height: 1.25;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;
export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "inherit")};
  font-size: ${({ size }) => (size ? size : "1rem")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "0")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;
export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "60px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "#d4b8d9" : "#071c2f")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};

  @media (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;

export const SectionProjects = styled.section`
  padding: ${({ padding }) => (padding ? padding : "60px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "white" : "#071c2f")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};

  @media (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "50px 0")};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  border-radius: 6px;
  background: #071c2f;
  color: #fff;
  white-space: nowrap;
  padding: 10px 1.25rem;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(7, 28, 47, 0.12);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }
`;

export default GlobalStyle;
