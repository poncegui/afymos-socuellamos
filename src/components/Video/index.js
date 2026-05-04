/**
 * Exportaciones centralizadas de componentes y utilidades de video
 * Facilita la importación y mantiene el código organizado
 */

export { default as VideoPlayer } from './VideoPlayer';
export { default as LazyYouTube } from '../LazyYouTube';

export {
  VideoThumbnail,
  VideoPlayOverlay,
  VideoPlayButton,
  VideoContainer,
  VideoIFrame,
  useVideoPlayer
} from './VideoStyles';
