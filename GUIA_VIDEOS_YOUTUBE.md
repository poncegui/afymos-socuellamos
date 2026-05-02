# Guía de Accesibilidad para Videos de YouTube

Esta guía documenta cómo hacer videos de YouTube accesibles según WCAG 2.1.

## 📋 Tabla de Contenidos

1. [Requisitos WCAG](#requisitos-wcag)
2. [Componente AccessibleYouTubeVideo](#componente-accessibleyoutubevideo)
3. [Cómo Añadir Subtítulos en YouTube](#cómo-añadir-subtítulos-en-youtube)
4. [Migración de Videos Existentes](#migración-de-videos-existentes)
5. [Checklist de Accesibilidad](#checklist-de-accesibilidad)

---

## 🎯 Requisitos WCAG

### Criterios de Conformidad

| Criterio | Nivel | Requisito |
|----------|-------|-----------|
| **1.2.1** Audio-only and Video-only | A | Alternativa para contenido solo audio/video |
| **1.2.2** Captions (Prerecorded) | A | Subtítulos para contenido grabado |
| **1.2.3** Audio Description or Media Alternative | A | Descripción de audio o alternativa |
| **1.2.5** Audio Description (Prerecorded) | AA | Descripción de audio para contenido grabado |

### ¿Por Qué Es Importante?

✅ **Usuarios sordos o con problemas auditivos**: Necesitan subtítulos  
✅ **Usuarios ciegos o con baja visión**: Necesitan descripción de audio  
✅ **Usuarios en entornos ruidosos**: Subtítulos ayudan a entender  
✅ **Usuarios que no hablan el idioma**: Subtítulos facilitan comprensión  
✅ **SEO**: Los subtítulos mejoran la indexación del contenido  

---

## 🎬 Componente AccessibleYouTubeVideo

### Características

✅ **Indicador visual de subtítulos**: Badge "CC" cuando están disponibles  
✅ **Advertencia de subtítulos faltantes**: Alerta cuando no hay  
✅ **Subtítulos activados por defecto**: Parámetro `cc_load_policy=1`  
✅ **Botón de transcripción**: Opcional, para texto completo  
✅ **Enlace alternativo a YouTube**: Para acceder a opciones completas  
✅ **YouTube-nocookie**: Privacidad mejorada  

### Uso Básico

```jsx
import { AccessibleYouTubeVideo } from '../components/A11y';

// Video con subtítulos
<AccessibleYouTubeVideo
  videoId="oUmMhYVsFZE"
  title="Proyecto NUEVO CREA - Formación y Empleo"
  hasCaptions={true}
  lang="es"
/>
```

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `videoId` | string | requerido | ID del video de YouTube |
| `title` | string | requerido | Título descriptivo del video |
| `hasCaptions` | boolean | `true` | Si el video tiene subtítulos |
| `hasTranscript` | boolean | `false` | Si hay transcripción disponible |
| `transcriptUrl` | string | opcional | URL de la transcripción |
| `lang` | string | `'es'` | Idioma de subtítulos ('es', 'en', etc.) |
| `aspectRatio` | string | `'16/9'` | Ratio de aspecto del video |

### Ejemplos de Uso

#### Ejemplo 1: Video con Subtítulos

```jsx
<AccessibleYouTubeVideo
  videoId="70xM5Dvf5Bk"
  title="Un día en Afymos"
  hasCaptions={true}
  lang="es"
/>
```

**Resultado**:
```
┌─────────────────────────────────────────┐
│ ✅ CC  Subtítulos disponibles en español │
├─────────────────────────────────────────┤
│                                         │
│           [VIDEO AQUÍ]                  │
│                                         │
├─────────────────────────────────────────┤
│ Ver en YouTube →                        │
└─────────────────────────────────────────┘
```

#### Ejemplo 2: Video SIN Subtítulos (advertencia)

```jsx
<AccessibleYouTubeVideo
  videoId="abc123"
  title="Video antiguo sin subtítulos"
  hasCaptions={false}
/>
```

**Resultado**:
```
┌─────────────────────────────────────────┐
│ ⚠  Este video no incluye subtítulos    │
├─────────────────────────────────────────┤
│                                         │
│           [VIDEO AQUÍ]                  │
│                                         │
└─────────────────────────────────────────┘
```

#### Ejemplo 3: Video con Transcripción

```jsx
<AccessibleYouTubeVideo
  videoId="oUmMhYVsFZE"
  title="Proyecto NUEVO CREA"
  hasCaptions={true}
  hasTranscript={true}
  transcriptUrl="/transcripts/proyecto-crea.pdf"
  lang="es"
/>
```

**Resultado incluye**:
- Badge de subtítulos disponibles
- Video embebido
- Botón "Ver transcripción del video"
- Enlace a YouTube

---

## 📝 Cómo Añadir Subtítulos en YouTube

### Método 1: Subir Archivo SRT

1. **Ir a YouTube Studio**
   - https://studio.youtube.com

2. **Seleccionar el video**
   - Content → Selecciona tu video

3. **Ir a Subtítulos**
   - Menú lateral → Subtitles

4. **Añadir subtítulos**
   - Click en "ADD LANGUAGE" → Español
   - Click en "ADD" bajo "Subtitles"

5. **Subir archivo**
   - "Upload file" → Selecciona tu archivo .srt
   - "WITH TIMING" si tiene marcas de tiempo
   - "PUBLISH"

### Método 2: Editar Auto-Generados

⚠️ **Importante**: Los subtítulos auto-generados NO son suficientes para WCAG.

1. **Ir a YouTube Studio**
2. **Seleccionar video → Subtitles**
3. **Duplicate and edit** los auto-generados
4. **Revisar TODO el texto**:
   - Corregir errores
   - Añadir puntuación
   - Identificar hablantes
   - Describir sonidos importantes: `[música]`, `[aplausos]`
5. **PUBLISH** cuando esté perfecto

### Formato SRT Ejemplo

```srt
1
00:00:00,000 --> 00:00:05,000
Bienvenidos a Afymos.
Somos una asociación dedicada a personas con discapacidad.

2
00:00:05,100 --> 00:00:10,000
[Música de fondo]
Nuestro objetivo es promover la inclusión social.

3
00:00:10,100 --> 00:00:15,000
Ofrecemos terapias, formación y empleo con apoyo.
```

---

## 🔄 Migración de Videos Existentes

### Videos Identificados

Total de videos de YouTube en el proyecto: **9**

| Archivo | Video ID | Estado Subtítulos | Acción |
|---------|----------|-------------------|---------|
| ProjectCreaVideo.jsx | oUmMhYVsFZE | ✅ Verificar | Migrar componente |
| VideoLanding.jsx | 70xM5Dvf5Bk | ❓ Verificar | Migrar componente |
| ProjectClubDeportivo.jsx | LSli3X2h_VA | ❓ Verificar | Migrar componente |
| PlanDeIgualdad.jsx | oPgPJpAv8yM | ❓ Verificar | Migrar componente |
| UndiaEnAfymosVideo.jsx | 70xM5Dvf5Bk | ❓ Verificar | Migrar componente |
| VideoCapacidad.jsx | KCKDmcgh2dk | ❓ Verificar | Migrar componente |
| VideoCapacidad.jsx | eQhdLRWSuZg | ❓ Verificar | Migrar componente |
| VideoCentroDia.jsx | OmiQWbtB2vM | ❓ Verificar | Migrar componente |

### Proceso de Migración

#### Paso 1: Verificar Subtítulos

Para cada video:
1. Abrir en YouTube: `https://www.youtube.com/watch?v={VIDEO_ID}`
2. Click en ⚙️ (configuración)
3. Verificar si "Subtitles/CC" está disponible
4. Si está, verificar calidad (¿auto-generados o editados?)

#### Paso 2: Añadir/Mejorar Subtítulos

Si no tiene o son de baja calidad:
1. Seguir guía de "Cómo Añadir Subtítulos"
2. Revisar y corregir todo el texto
3. Publicar

#### Paso 3: Actualizar Componente

**Antes**:
```jsx
<iframe
  src="https://www.youtube.com/embed/oUmMhYVsFZE"
  title="Proyecto NUEVO CREA"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

**Después**:
```jsx
<AccessibleYouTubeVideo
  videoId="oUmMhYVsFZE"
  title="Proyecto NUEVO CREA - Formación y Empleo para Personas con Discapacidad"
  hasCaptions={true}
  lang="es"
/>
```

---

## ✅ Checklist de Accesibilidad

### Para Cada Video

- [ ] **Subtítulos disponibles en español**
  - [ ] Revisados manualmente (no solo auto-generados)
  - [ ] Puntuación correcta
  - [ ] Identificación de hablantes
  - [ ] Descripción de sonidos importantes

- [ ] **Título descriptivo**
  - [ ] Describe el contenido del video
  - [ ] No solo "Video de Afymos"
  - [ ] Incluye contexto relevante

- [ ] **Componente AccessibleYouTubeVideo usado**
  - [ ] `hasCaptions={true}` si tiene subtítulos
  - [ ] `hasCaptions={false}` si NO tiene (mostrar advertencia)
  - [ ] `title` descriptivo y completo

- [ ] **Transcripción** (opcional pero recomendado)
  - [ ] Crear archivo de texto con transcripción completa
  - [ ] Enlazar con `transcriptUrl`
  - [ ] Incluir descripciones de contenido visual importante

- [ ] **Descripción del video en YouTube**
  - [ ] Incluye resumen del contenido
  - [ ] Enlaces a recursos mencionados
  - [ ] Información de contacto

---

## 📊 Verificación de Calidad

### Herramientas

1. **YouTube Studio**
   - Ver analytics de subtítulos
   - Revisar tasa de uso de subtítulos

2. **WAVE (Web Accessibility Evaluation Tool)**
   - Escanear página con video
   - Verificar alertas

3. **Lighthouse (Chrome DevTools)**
   - Audit → Accessibility
   - Verificar puntuación

### Criterios de Calidad de Subtítulos

✅ **Precisión**: 99%+ de palabras correctas  
✅ **Sincronización**: ±500ms del audio  
✅ **Identificación**: Hablantes identificados  
✅ **Sonidos**: `[música]`, `[aplausos]`, etc.  
✅ **Puntuación**: Correcta y completa  
✅ **Mayúsculas**: Uso apropiado  
✅ **Velocidad**: Legible (no más de 2 líneas a la vez)  

---

## 🚀 Mejores Prácticas

### Do's ✅

- ✅ Revisar SIEMPRE los subtítulos auto-generados
- ✅ Incluir descripción de sonidos: `[música suave de fondo]`
- ✅ Identificar hablantes: `SPEAKER 1:`, `MARÍA:`
- ✅ Usar mayúsculas correctamente (no TODO EN MAYÚSCULAS)
- ✅ Dividir líneas lógicamente (no por caracteres)
- ✅ Proporcionar transcripción completa cuando sea posible
- ✅ Actualizar subtítulos si el video se edita

### Don'ts ❌

- ❌ Confiar solo en subtítulos auto-generados
- ❌ Olvidar describir sonidos importantes
- ❌ Usar títulos genéricos: "Video 1", "Nuestro video"
- ❌ Subtítulos demasiado largos (más de 2 líneas)
- ❌ Subtítulos que permanecen mucho tiempo sin cambiar
- ❌ Obviar revisión de puntuación y ortografía

---

## 📱 Recursos Adicionales

### Herramientas de Subtítulos

- **Subtitle Edit**: https://nikse.dk/SubtitleEdit/
- **Aegisub**: http://www.aegisub.org/
- **oTranscribe**: https://otranscribe.com/

### Guías y Referencias

- WCAG 2.1 Understanding Captions: https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html
- YouTube Accessibility: https://support.google.com/youtube/topic/9257406
- WebAIM Captions, Transcripts, and Audio Descriptions: https://webaim.org/techniques/captions/

---

**Última actualización**: Mayo 2026  
**Mantenedor**: Equipo Afymos
