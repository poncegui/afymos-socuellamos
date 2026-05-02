import { useEffect, useState, useRef } from 'react';

/**
 * Hook para lazy loading de imágenes y componentes
 * Usa Intersection Observer API para detectar visibilidad
 * Optimiza el rendimiento cargando solo elementos visibles
 *
 * @param {Object} options - Opciones de Intersection Observer
 * @returns {Array} - [ref, isIntersecting]
 */
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Configuración por defecto
    const defaultOptions = {
      root: null,
      rootMargin: '50px', // Cargar un poco antes de que sea visible
      threshold: 0.01, // Trigger cuando 1% es visible
      ...options,
    };

    // Crear observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Una vez visible, dejar de observar (para imágenes que solo se cargan una vez)
          observer.disconnect();
        }
      });
    }, defaultOptions);

    observer.observe(element);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver;
