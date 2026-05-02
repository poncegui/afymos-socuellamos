import { useEffect, useState } from 'react';

/**
 * Hook optimizado para detectar cambios de tamaño de ventana
 * Usa requestAnimationFrame para evitar reflows forzados
 * Implementa debounce para reducir cálculos innecesarios
 *
 * @param {number} delay - Tiempo de debounce en ms (default: 150)
 * @returns {Object} - { width, height, isMobile, isTablet, isDesktop }
 */
const useOptimizedResize = (delay = 150) => {
  const [dimensions, setDimensions] = useState(() => {
    // Inicialización solo una vez, sin acceder al DOM múltiples veces
    const width = typeof window !== 'undefined' ? window.innerWidth : 0;
    const height = typeof window !== 'undefined' ? window.innerHeight : 0;

    return {
      width,
      height,
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId = null;
    let rafId = null;

    const handleResize = () => {
      // Cancelar RAF anterior si existe
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Cancelar timeout anterior si existe
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Usar requestAnimationFrame para sincronizar con el repaint del navegador
      rafId = requestAnimationFrame(() => {
        // Debounce: esperar a que el usuario termine de redimensionar
        timeoutId = setTimeout(() => {
          // Una sola lectura del DOM
          const width = window.innerWidth;
          const height = window.innerHeight;

          setDimensions({
            width,
            height,
            isMobile: width < 768,
            isTablet: width >= 768 && width < 1024,
            isDesktop: width >= 1024,
          });
        }, delay);
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [delay]);

  return dimensions;
};

export default useOptimizedResize;
