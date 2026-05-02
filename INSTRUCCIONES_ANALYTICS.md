# 📊 Instrucciones: Analytics y Contador de Visitas

## ✅ Implementado: Contador de Visitas Simple

### Qué es CountAPI
- Servicio **gratuito** sin necesidad de registro
- Cuenta visitas de forma persistente
- Sin cookies, respeta privacidad RGPD
- API pública y confiable

### Cómo funciona
El contador ya está integrado en el **footer** del sitio. Cada vez que alguien visita la página:
1. Se hace una llamada a la API de CountAPI
2. El contador se incrementa automáticamente
3. Se muestra el número total de visitas

### Ubicación
- **Componente**: `src/components/Analytics/VisitCounter.jsx`
- **Visible en**: Footer de todas las páginas
- **Namespace**: `afymos`
- **Key**: `visits`

### Ver estadísticas actuales
Puedes consultar las visitas en cualquier momento:
```
https://api.countapi.xyz/get/afymos/visits
```

### Resetear el contador (si es necesario)
Si quieres empezar de cero, crear uno nuevo con diferente `key`:
```jsx
<VisitCounter namespace="afymos" key="visits-2026" />
```

---

## 🚀 Opcional: Google Analytics 4 (Recomendado para análisis profundo)

### Por qué añadir Google Analytics
- Estadísticas detalladas de visitantes
- Origen del tráfico (Google, redes sociales, directos)
- Páginas más visitadas
- Tiempo de permanencia
- Dispositivos usados (móvil, desktop)
- Ubicación geográfica de visitantes

### Pasos para activar GA4

#### 1. Crear cuenta de Google Analytics
1. Ve a https://analytics.google.com/
2. Inicia sesión con cuenta de Gmail de Afymos
3. Clic en "Empezar a medir"
4. Completa los datos:
   - **Nombre de la cuenta**: Afymos
   - **Nombre de la propiedad**: Sitio Web Afymos
   - **Zona horaria**: España
   - **Moneda**: EUR

#### 2. Configurar flujo de datos web
1. Selecciona "Web"
2. Introduce:
   - **URL del sitio web**: `https://afymos.es` (o tu dominio)
   - **Nombre del flujo**: Web Afymos
3. Habilita "Medición mejorada"
4. Clic en "Crear flujo"

#### 3. Obtener ID de medición
Verás un ID tipo: `G-XXXXXXXXXX`
**¡Copia este ID!**

#### 4. Activar en el código
Edita el archivo:
```
src/components/Analytics/GoogleAnalytics.jsx
```

Reemplaza en la línea 15:
```javascript
const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // ⚠️ PEGA AQUÍ TU ID REAL
```

#### 5. Añadir al App.jsx
Edita `src/App.jsx` y añade:

```jsx
import GoogleAnalytics from './components/Analytics/GoogleAnalytics';

function App() {
  return (
    <>
      <GoogleAnalytics />
      {/* resto del código */}
    </>
  );
}
```

#### 6. Actualizar Política de Cookies
⚠️ **IMPORTANTE para RGPD**: Google Analytics usa cookies.

Debes actualizar la política de cookies en:
- `src/components/CookieBanner/CookieBanner.jsx`

Añadir información sobre cookies de Google Analytics.

---

## 📋 Comparación de Opciones

| Característica | CountAPI (Implementado) | Google Analytics 4 |
|----------------|-------------------------|---------------------|
| **Gratuito** | ✅ Sí | ✅ Sí |
| **Sin registro** | ✅ Sí | ❌ No |
| **Contador visible** | ✅ Sí | ❌ No (dashboard) |
| **Análisis detallado** | ❌ No | ✅ Sí |
| **Cumple RGPD sin banner** | ✅ Sí | ❌ No (necesita banner) |
| **Origen del tráfico** | ❌ No | ✅ Sí |
| **Páginas más vistas** | ❌ No | ✅ Sí |
| **Tiempo en el sitio** | ❌ No | ✅ Sí |

## 🎯 Recomendación

**Para Afymos**: Usar **ambos**
1. **CountAPI** (ya implementado) → Mostrar contador visible en footer
2. **Google Analytics** (opcional) → Dashboard privado con estadísticas detalladas

---

## 🔧 Mantenimiento

### CountAPI
- **No requiere mantenimiento**
- Funciona automáticamente
- Si el servicio cae, el contador simplemente no se muestra (sin errores)

### Google Analytics
- Revisar dashboard mensualmente
- Actualizar política de cookies si cambia legislación
- Verificar que el tracking code siga funcionando

---

## 📞 Soporte

- **CountAPI**: https://countapi.xyz/
- **Google Analytics**: https://support.google.com/analytics/

**Implementado**: Mayo 2, 2026
**Estado**: ✅ Contador funcionando
