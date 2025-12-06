import React from "react";
import styled from "styled-components";

const FacebookReel = ({
  url,
  showText = false,
  title = "Vídeo de Facebook",
  aspectRatio = 56.25,
  maxWidth = 980,
}) => {
  if (!url) return null;
  const href = encodeURIComponent(url);
  const src = `https://www.facebook.com/plugins/video.php?href=${href}&show_text=${
    showText ? "1" : "0"
  }&width=560`;

  return (
    <ReelContainer style={{ maxWidth }} aria-label="Vídeo de Facebook">
      <IframeWrap style={{ paddingBottom: `${aspectRatio}%` }}>
        <StyledIframe
          title={title}
          src={src}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-read; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </IframeWrap>

      <Fallback>
        <p>Si no puedes ver el vídeo aquí, ábrelo en Facebook:</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Abrir en Facebook
        </a>
      </Fallback>
    </ReelContainer>
  );
};

export default FacebookReel;

const ReelContainer = styled.div`
  margin: 1.5rem auto;
  width: 100%;
`;

const IframeWrap = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const Fallback = styled.div`
  margin-top: 0.75rem;
  font-size: 0.95rem;
  color: #333;

  a {
    color: #071c2f;
    text-decoration: underline;
    font-weight: 700;
    margin-left: 0.5rem;
  }
`;
