import React, { useState } from 'react';
import styled from 'styled-components';
import { a11yColors } from '../../styles/a11yColors';

/**
 * Componente de video de YouTube accesible
 *
 * Cumple con WCAG 2.1:
 * - 1.2.2 Captions (Prerecorded) - Informa sobre subtítulos
 * - 2.4.4 Link Purpose - Título descriptivo
 * - 4.1.2 Name, Role, Value - Semántica correcta
 *
 * @param {Object} props
 * @param {string} props.videoId - ID del video de YouTube
 * @param {string} props.title - Título descriptivo del video
 * @param {boolean} props.hasCaptions - Si el video tiene subtítulos (default: true)
 * @param {boolean} props.hasTranscript - Si hay transcripción disponible (default: false)
 * @param {string} props.transcriptUrl - URL de la transcripción (opcional)
 * @param {string} props.lang - Idioma de los subtítulos (default: 'es')
 * @param {string} props.aspectRatio - Ratio de aspecto (default: '16/9')
 */
const AccessibleYouTubeVideo = ({
  videoId,
  title,
  hasCaptions = true,
  hasTranscript = false,
  transcriptUrl,
  lang = 'es',
  aspectRatio = '16/9',
  ...props
}) => {
  const [showTranscript, setShowTranscript] = useState(false);
  const [play, setPlay] = useState(false);

  // Construir URL con parámetros de accesibilidad
  const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${new URLSearchParams({
    autoplay: play ? '1' : '0',
    cc_load_policy: hasCaptions ? '1' : '0', // Activar subtítulos por defecto
    cc_lang_pref: lang, // Idioma preferido de subtítulos
    modestbranding: '1', // Menos branding de YouTube
    rel: '0', // No mostrar videos relacionados
    hl: lang, // Idioma de la interfaz
  }).toString()}`;

  return (
    <VideoContainer>
      {/* Información de accesibilidad */}
      <VideoInfo role="status" aria-live="polite">
        {hasCaptions && (
          <CaptionInfo aria-label="Este video incluye subtítulos">
            <CaptionIcon aria-hidden="true">CC</CaptionIcon>
            <span>Subtítulos disponibles en español</span>
          </CaptionInfo>
        )}
        {!hasCaptions && (
          <WarningInfo aria-label="Advertencia: Este video no tiene subtítulos">
            <WarningIcon aria-hidden="true">⚠</WarningIcon>
            <span>Este video no incluye subtítulos</span>
          </WarningInfo>
        )}
      </VideoInfo>

      {/* Video */}
      <VideoWrapper $aspectRatio={aspectRatio}>
        {!play ? (
          <Thumbnail
            role="button"
            tabIndex={0}
            aria-label={`Reproducir vídeo: ${title}`}
            onClick={() => setPlay(true)}
            onKeyDown={e => e.key === 'Enter' && setPlay(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`Miniatura: ${title}`}
              loading="lazy"
            />
            <PlayButton aria-hidden="true">
              <PlayButtonInner />
            </PlayButton>
          </Thumbnail>
        ) : (
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            {...props}
          />
        )}
      </VideoWrapper>

      {/* Transcripción (opcional) */}
      {hasTranscript && (
        <TranscriptSection>
          <TranscriptButton
            onClick={() => setShowTranscript(!showTranscript)}
            aria-expanded={showTranscript}
            aria-controls="video-transcript"
          >
            <TranscriptIcon aria-hidden="true">📄</TranscriptIcon>
            {showTranscript ? 'Ocultar' : 'Ver'} transcripción del video
          </TranscriptButton>

          {showTranscript && (
            <TranscriptContent id="video-transcript" role="region" aria-label="Transcripción del video">
              {transcriptUrl ? (
                <TranscriptLink
                  href={transcriptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir transcripción en nueva pestaña"
                >
                  Ver transcripción completa →
                </TranscriptLink>
              ) : (
                <TranscriptText>
                  Para acceder a la transcripción completa, visite el video en YouTube y active la opción "Mostrar transcripción".
                </TranscriptText>
              )}
            </TranscriptContent>
          )}
        </TranscriptSection>
      )}

      {/* Enlace alternativo */}
      <AlternativeLink
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver ${title} en YouTube (se abre en nueva pestaña)`}
      >
        Ver en YouTube →
      </AlternativeLink>
    </VideoContainer>
  );
};

export default AccessibleYouTubeVideo;

/* Estilos */

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const VideoInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: calc(0.9rem * var(--fs, 1));
  font-weight: 600;
`;

const CaptionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${a11yColors.state.success.text};
  background: ${a11yColors.state.success.bg};
  border: 1px solid ${a11yColors.state.success.border};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  width: 100%;
`;

const CaptionIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  background: ${a11yColors.state.success.text};
  color: ${a11yColors.background.white};
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: monospace;
`;

const WarningInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${a11yColors.state.warning.text};
  background: ${a11yColors.state.warning.bg};
  border: 1px solid ${a11yColors.state.warning.border};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  width: 100%;
`;

const WarningIcon = styled.span`
  font-size: 1.25rem;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  &:focus-within {
    outline: 3px solid ${a11yColors.focus};
    outline-offset: 3px;
  }
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 3px solid ${a11yColors.focus};
    outline-offset: 3px;
  }
`;

const PlayButton = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;

  ${Thumbnail}:hover & {
    background: rgba(0, 0, 0, 0.45);
  }
`;

const PlayButtonInner = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 14px 0 14px 24px;
    border-color: transparent transparent transparent ${a11yColors.purple.darkOnLight};
    margin-left: 6px;
  }

  ${Thumbnail}:hover & {
    transform: scale(1.1);
    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.4);
  }
`;

const TranscriptSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TranscriptButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: ${a11yColors.background.white};
  border: 2px solid ${a11yColors.purple.darkOnLight};
  border-radius: 6px;
  color: ${a11yColors.purple.darkOnLight};
  font-size: calc(0.9rem * var(--fs, 1));
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover {
    background: ${a11yColors.purple.darkOnLight};
    color: ${a11yColors.background.white};
  }

  &:focus-visible {
    outline: 3px solid ${a11yColors.focus};
    outline-offset: 3px;
  }
`;

const TranscriptIcon = styled.span`
  font-size: 1.1rem;
`;

const TranscriptContent = styled.div`
  padding: 1rem;
  background: ${a11yColors.background.offWhite};
  border-radius: 6px;
  border: 1px solid ${a11yColors.gray.border};
`;

const TranscriptLink = styled.a`
  color: ${a11yColors.link.default};
  text-decoration: underline;
  font-weight: 600;

  &:hover {
    color: ${a11yColors.link.hover};
  }

  &:focus-visible {
    outline: 3px solid ${a11yColors.focus};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const TranscriptText = styled.p`
  margin: 0;
  color: ${a11yColors.gray.darkOnLight};
  font-size: calc(0.9rem * var(--fs, 1));
  line-height: 1.6;
`;

const AlternativeLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.25rem;
  background: transparent;
  border: 2px solid ${a11yColors.gray.borderDark};
  border-radius: 6px;
  color: ${a11yColors.gray.darkOnLight};
  text-decoration: none;
  font-size: calc(0.85rem * var(--fs, 1));
  font-weight: 600;
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover {
    background: ${a11yColors.gray.darkOnLight};
    color: ${a11yColors.background.white};
    border-color: ${a11yColors.gray.darkOnLight};
  }

  &:focus-visible {
    outline: 3px solid ${a11yColors.focus};
    outline-offset: 3px;
  }
`;
