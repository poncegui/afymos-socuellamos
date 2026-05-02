import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente de Google Analytics 4
 *
 * Instrucciones de configuración:
 * 1. Crear cuenta en https://analytics.google.com/
 * 2. Obtener ID de medición (formato: G-XXXXXXXXXX)
 * 3. Reemplazar MEASUREMENT_ID abajo con tu ID real
 * 4. Añadir este componente en App.jsx
 */

const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // ⚠️ REEMPLAZAR con tu ID real

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Solo en producción
    if (process.env.NODE_ENV !== 'production') {
      console.log('[GA4] Analytics disabled in development');
      return;
    }

    // Cargar script de Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${MEASUREMENT_ID}', {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  // Rastrear cambios de ruta
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);

  return null; // Componente invisible
};

export default GoogleAnalytics;
