/**
 * Exportación centralizada de iconos de FontAwesome
 * Solo importa los iconos que realmente se usan en la aplicación
 * Esto reduce el tamaño del bundle de ~23 KiB a ~3-5 KiB
 */

export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Iconos de free-solid-svg-icons que se usan en la app
export {
  faHeart,
  faPlus,
  faMinus,
  faVolumeUp,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faUpRightFromSquare,
  faAnglesLeft,
  faSquare,
  faQuoteLeft,
  faArrowRight,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
