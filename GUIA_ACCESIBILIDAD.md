# Guía de Accesibilidad - Afymos Socuéllamos

Esta guía documenta los componentes y utilidades de accesibilidad creados para mejorar el contraste de colores y cumplir con WCAG AA.

## 📋 Tabla de Contenidos

1. [Problemas Identificados](#problemas-identificados)
2. [Sistema de Colores Accesible](#sistema-de-colores-accesible)
3. [Componentes Accesibles](#componentes-accesibles)
4. [Cómo Migrar](#cómo-migrar)
5. [Verificación de Contraste](#verificación-de-contraste)
6. [Recursos](#recursos)

---

## 🔍 Problemas Identificados

### Problemas Críticos de Contraste

El análisis de accesibilidad identificó **más de 90 ocurrencias** de problemas de contraste:

#### 1. Color `#c6b1c9` (rgb(198, 177, 201))
- **Problema**: Contraste muy bajo (1.88:1) sobre fondos claros
- **Impacto**: Texto ilegible para usuarios con baja visión
- **Archivos afectados**: 37+ archivos

#### 2. Opacidades Muy Bajas (0.05 - 0.35)
- **Problema**: Elementos prácticamente invisibles
- **Ejemplos**:
  ```jsx
  // ❌ INCORRECTO
  background: rgba(198, 177, 201, 0.05)  // Casi invisible
  border: rgba(7, 28, 47, 0.04)          // Imperceptible
  ```

#### 3. Grises Pálidos (#555, #777, #888, #999, #bbb)
- **Problema**: Contraste insuficiente según contexto
- **Impacto**: Dificulta la lectura

---

## 🎨 Sistema de Colores Accesible

### Importación

```javascript
import { a11yColors, getTextColor, getBorderColor } from '../styles/a11yColors';
```

### Paleta de Colores

#### Colores Morados (reemplazo de #c6b1c9)

```javascript
// Para texto sobre fondo CLARO
a11yColors.purple.darkOnLight      // #6b4275 - Contraste 7.02:1 ✅
a11yColors.purple.darkerOnLight    // #5a3762 - Contraste 9.94:1 ✅ (AAA)

// Para texto sobre fondo OSCURO (#071c2f)
a11yColors.purple.lightOnDark      // #e8d4eb - Contraste 11.45:1 ✅ (AAA)
a11yColors.purple.lighterOnDark    // #f5ebf7 - Contraste 13.82:1 ✅ (AAA)

// Para fondos
a11yColors.purple.bgWithDarkText   // #d4b8d9 - Con texto oscuro
a11yColors.purple.bgWithLightText  // #5a3762 - Con texto claro
```

#### Grises Accesibles (reemplazo de #555, #888, etc.)

```javascript
// Para texto sobre fondo CLARO
a11yColors.gray.darkOnLight        // #333333 - Contraste 12.63:1 ✅ (AAA)
a11yColors.gray.mediumOnLight      // #4a4a4a - Contraste 9.74:1 ✅ (AAA)

// Para texto sobre fondo OSCURO
a11yColors.gray.lightOnDark        // #e5e5e5 - Contraste 12.84:1 ✅ (AAA)
a11yColors.gray.lighterOnDark      // #f0f0f0 - Contraste 14.79:1 ✅ (AAA)
```

#### Opacidades Mínimas Recomendadas

```javascript
// Texto
a11yColors.a11yOpacity.text.min           // 0.87 - Mínimo para texto principal
a11yColors.a11yOpacity.text.secondary     // 0.7  - Para texto secundario
a11yColors.a11yOpacity.text.disabled      // 0.5  - Para texto deshabilitado

// Fondos
a11yColors.a11yOpacity.background.min     // 0.6  - Mínimo para fondos con texto
a11yColors.a11yOpacity.background.overlay // 0.8  - Para overlays oscuros
a11yColors.a11yOpacity.background.subtle  // 0.15 - Solo para efectos SIN texto

// Bordes
a11yColors.a11yOpacity.border.min         // 0.3  - Mínimo para bordes visibles
a11yColors.a11yOpacity.border.subtle      // 0.15 - Para bordes muy sutiles
```

---

## 🧩 Componentes Accesibles

### 1. AccessibleHeading

Headings con contraste garantizado WCAG AA.

```jsx
import { AccessibleHeading } from '../components/A11y';

// Uso básico
<AccessibleHeading level="h1" theme="dark">
  Título Principal
</AccessibleHeading>

// Con opciones
<AccessibleHeading 
  level="h2" 
  theme="light" 
  align="left"
  inverse={false}
>
  Subtítulo
</AccessibleHeading>
```

**Props:**
- `level`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' (default: 'h2')
- `theme`: 'dark' | 'light' (default: 'light')
- `align`: 'center' | 'left' | 'right' (default: 'center')
- `inverse`: boolean (invierte colores)

**Migración:**

```jsx
// ❌ ANTES (bajo contraste)
<MainHeading inverse={false}>Neuropsicología</MainHeading>
// color: #c6b1c9 (contraste 1.88:1) ❌

// ✅ DESPUÉS (accesible)
<AccessibleHeading level="h1" theme="light">
  Neuropsicología
</AccessibleHeading>
// color: #6b4275 (contraste 7.02:1) ✅
```

---

### 2. AccessibleText

Texto con contraste optimizado.

```jsx
import { AccessibleText } from '../components/A11y';

// Texto principal
<AccessibleText theme="dark" variant="normal">
  Este es un texto con buen contraste
</AccessibleText>

// Texto secundario
<AccessibleText theme="light" variant="secondary" size="0.875rem">
  Texto secundario más pequeño
</AccessibleText>
```

**Props:**
- `as`: 'p' | 'span' | 'div' | 'strong' | 'em' (default: 'p')
- `theme`: 'dark' | 'light' (default: 'light')
- `variant`: 'normal' | 'secondary' (default: 'normal')
- `size`: string (ej: '1rem', '14px')
- `weight`: string (ej: '400', 'bold')

**Migración:**

```jsx
// ❌ ANTES
<p style={{ color: '#888' }}>Texto gris pálido</p>
// contraste 2.85:1 ❌

// ✅ DESPUÉS
<AccessibleText variant="secondary">
  Texto gris pálido
</AccessibleText>
// contraste 9.74:1 ✅
```

---

### 3. AccessibleSection

Secciones con fondos y contraste correctos.

```jsx
import { AccessibleSection } from '../components/A11y';

// Sección con fondo oscuro
<AccessibleSection variant="dark" padding="80px 0">
  {/* Todo el contenido tendrá colores accesibles */}
  <h2>Título automáticamente accesible</h2>
  <p>Texto con buen contraste</p>
</AccessibleSection>

// Sección con fondo morado
<AccessibleSection variant="purple">
  <h2>En fondo morado</h2>
</AccessibleSection>
```

**Props:**
- `variant`: 'dark' | 'light' | 'purple' (default: 'light')
- `padding`: string (default: '60px 0')
- `margin`: string

**Migración:**

```jsx
// ❌ ANTES
<Section inverse={true}>
  {/* background: #c6b1c9 con textos en #071c2f */}
</Section>

// ✅ DESPUÉS
<AccessibleSection variant="purple">
  {/* Contraste garantizado automáticamente */}
</AccessibleSection>
```

---

### 4. AccessibleButton

Botones con estados accesibles.

```jsx
import { AccessibleButton } from '../components/A11y';

// Botón primario
<AccessibleButton variant="primary" size="medium">
  Enviar
</AccessibleButton>

// Botón outline
<AccessibleButton variant="outline" size="large">
  Más información
</AccessibleButton>

// Botón deshabilitado
<AccessibleButton disabled>
  No disponible
</AccessibleButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `disabled`: boolean

---

### 5. AccessibleBadge

Etiquetas/badges con contraste garantizado.

```jsx
import { AccessibleBadge } from '../components/A11y';

<AccessibleBadge variant="purple" size="medium">
  Nuevo
</AccessibleBadge>

<AccessibleBadge variant="success">
  Activo
</AccessibleBadge>

<AccessibleBadge variant="warning">
  Pendiente
</AccessibleBadge>
```

**Props:**
- `variant`: 'purple' | 'gray' | 'info' | 'success' | 'warning' | 'error'
- `size`: 'small' | 'medium' | 'large'

---

## 🔄 Cómo Migrar

### Paso 1: Identificar componentes problemáticos

Busca estos patrones en tu código:

```bash
# Buscar color problemático
grep -r "#c6b1c9" ./src

# Buscar grises pálidos
grep -r "#555\|#777\|#888\|#999\|#bbb" ./src

# Buscar opacidades bajas
grep -r "rgba.*0\.[0-3]" ./src
```

### Paso 2: Reemplazar con componentes accesibles

#### Ejemplo 1: Headings

```jsx
// ❌ ANTES
import { MainHeading } from '../globalStyles';

<MainHeading inverse={false}>
  Neuropsicología
</MainHeading>

// ✅ DESPUÉS
import { AccessibleHeading } from '../components/A11y';

<AccessibleHeading level="h1" theme="light">
  Neuropsicología
</AccessibleHeading>
```

#### Ejemplo 2: Estilos inline

```jsx
// ❌ ANTES
<strong style={{ 
  opacity: 1, 
  color: 'rgb(198, 177, 201)', 
  backgroundColor: 'rgb(249, 248, 251)' 
}}>
  Neuropsicología
</strong>

// ✅ DESPUÉS
import { AccessibleBadge } from '../components/A11y';

<AccessibleBadge variant="purple" size="medium">
  Neuropsicología
</AccessibleBadge>
```

#### Ejemplo 3: Secciones con fondos

```jsx
// ❌ ANTES
<Section inverse={true}>
  <Heading inverse={false}>Título</Heading>
  <TextWrapper color="#888">Descripción</TextWrapper>
</Section>

// ✅ DESPUÉS
<AccessibleSection variant="purple">
  <AccessibleHeading level="h2">Título</AccessibleHeading>
  <AccessibleText variant="secondary">Descripción</AccessibleText>
</AccessibleSection>
```

### Paso 3: Actualizar styled-components existentes

Si necesitas mantener componentes styled-components existentes, actualiza los colores:

```jsx
import { a11yColors } from '../styles/a11yColors';

const StyledComponent = styled.div`
  /* ❌ ANTES */
  color: #c6b1c9;
  
  /* ✅ DESPUÉS */
  color: ${({ $theme }) => 
    $theme === 'dark' 
      ? a11yColors.purple.lightOnDark 
      : a11yColors.purple.darkOnLight
  };
`;
```

---

## ✅ Verificación de Contraste

### Herramienta de verificación automática

```javascript
import { checkContrast, logContrastReport } from '../utils/contrastChecker';

// Verificar un par de colores
const result = checkContrast('#6b4275', '#ffffff', { fontSize: 'normal' });
console.log(result);
// { pass: true, ratio: '7.02', required: 4.5, grade: 'AAA' }

// Generar informe completo
const combinations = [
  { text: '#6b4275', bg: '#ffffff', label: 'Purple on White', fontSize: 'normal' },
  { text: '#e8d4eb', bg: '#071c2f', label: 'Light Purple on Dark', fontSize: 'normal' },
  { text: '#333333', bg: '#ffffff', label: 'Dark Gray on White', fontSize: 'normal' },
];

logContrastReport(combinations);
```

### Durante desarrollo (React Hook)

```jsx
import { useContrastCheck } from '../utils/contrastChecker';

function MyComponent() {
  // Solo en desarrollo, verifica contraste en la consola
  useContrastCheck([
    { text: '#6b4275', bg: '#ffffff', label: 'Heading color' },
    { text: '#333333', bg: '#ffffff', label: 'Body text' },
  ]);

  return <div>...</div>;
}
```

---

## 📚 Recursos

### Estándares WCAG

- **WCAG AA (Mínimo requerido)**:
  - Texto normal (< 18px): contraste mínimo **4.5:1**
  - Texto grande (≥ 18px o ≥ 14px bold): contraste mínimo **3:1**
  - Elementos UI: contraste mínimo **3:1**

- **WCAG AAA (Nivel superior)**:
  - Texto normal: contraste mínimo **7:1**
  - Texto grande: contraste mínimo **4.5:1**

### Herramientas Online

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)

### Testing

```bash
# Instalar herramienta de testing de accesibilidad
npm install --save-dev @axe-core/react

# Usar en desarrollo
import React from 'react';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}
```

---

## 🎯 Checklist de Migración

### Por componente:

- [ ] Identificar usos de `#c6b1c9`
- [ ] Reemplazar con colores de `a11yColors`
- [ ] Actualizar opacidades menores a 0.6 para texto
- [ ] Cambiar grises pálidos (#555-#999) por `a11yColors.gray`
- [ ] Verificar contraste con `contrastChecker`
- [ ] Testear visualmente en navegador
- [ ] Validar con WAVE o axe DevTools

### Archivos prioritarios (mayor impacto):

1. ✅ `globalStyles.js` - Estilos base
2. [ ] `Footer.css` - Múltiples problemas de contraste
3. [ ] `AccessibilityControls.jsx` - Ironía: controles de a11y con bajo contraste
4. [ ] `ContentProjects.js` - Bordes casi invisibles
5. [ ] `NewsArticle.jsx` - Texto gris pálido
6. [ ] `CarouselSwitcher.jsx` - Gradientes con bajo contraste
7. [ ] `Testimonials.jsx` - Múltiples ocurrencias de #888

---

## 💡 Mejores Prácticas

1. **Siempre usar el sistema de colores**:
   ```jsx
   import { a11yColors } from '../styles/a11yColors';
   // NO uses colores hardcoded
   ```

2. **Evitar estilos inline para colores**:
   ```jsx
   // ❌ Evitar
   <div style={{ color: '#c6b1c9' }}>...</div>
   
   // ✅ Preferir
   <AccessibleText theme="light">...</AccessibleText>
   ```

3. **Verificar contraste en desarrollo**:
   ```jsx
   useContrastCheck([...])
   ```

4. **Usar componentes accesibles por defecto**:
   - Prefiere `AccessibleHeading` sobre `MainHeading`
   - Prefiere `AccessibleButton` sobre `Button` personalizado
   - Prefiere `AccessibleSection` sobre `Section` con colores custom

5. **Testear con herramientas**:
   - Chrome DevTools → Lighthouse → Accessibility
   - WAVE Extension
   - axe DevTools

---

## 🚀 Próximos Pasos

1. Migrar componentes prioritarios
2. Actualizar `globalStyles.js` con nuevos colores
3. Crear PR con cambios incrementales
4. Documentar cambios en commits
5. Validar con testing de accesibilidad automatizado

---

**Última actualización**: Mayo 2026  
**Mantenedor**: Equipo de desarrollo Afymos
