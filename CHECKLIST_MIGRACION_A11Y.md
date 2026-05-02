# ✅ Checklist de Migración de Accesibilidad

Lista de verificación para migrar componentes y corregir problemas de contraste.

---

## 🎯 Archivos Críticos (Orden de Prioridad)

### 1. ✅ globalStyles.js
- [x] MainHeading: `#c6b1c9` → `#6b4275`
- [x] Heading: `#c6b1c9` → `#6b4275`
- [x] Section: `#c6b1c9` → `#d4b8d9`
- [ ] Importar `a11yColors` para uso consistente
- [ ] Actualizar `TextWrapper` con colores accesibles

### 2. ✅ components/TitleSection.jsx
- [x] Importar `a11yColors`
- [x] Background: `#c6b1c9` → `a11yColors.purple.bgWithLightText`
- [x] Text color: `#c6b1c9` → `a11yColors.purple.lightOnDark`
- [ ] Testear visualmente

### 3. ⏳ components/Footer/styles/Footer.css
**Líneas problemáticas**: 25, 53, 61, 100, 119, 202, 227

- [ ] Línea 25: `color: #bbbbbb` → `#e5e5e5` (sobre fondo oscuro)
- [ ] Línea 53: `color: #c6b1c9` → `#e8d4eb` (sobre fondo oscuro)
- [ ] Línea 61: `color: #999` → `#e5e5e5`
- [ ] Línea 100: `color: #c6b1c9` → `#e8d4eb`
- [ ] Línea 119: `border-color: #c6b1c9` → `#8e6b9c`
- [ ] Línea 202: `color: #c6b1c9` → `#e8d4eb`
- [ ] Línea 227: `color: #777` → `#e5e5e5`
- [ ] Considerar migrar a styled-components

### 4. ⏳ components/Accessibility/AccessibilityControls.jsx
**Líneas problemáticas**: 153, 194, 197, 218

- [ ] Línea 153: `rgba(198, 177, 201, 0.05)` → aumentar a `0.6` mínimo
- [ ] Línea 194: `rgba(198, 177, 201, 0.15)` → aumentar a `0.6`
- [ ] Línea 197: `rgba(198, 177, 201, 0.25)` → aumentar a `0.6`
- [ ] Línea 218: `rgba(198, 177, 201, 0.4)` → aumentar a `0.6` o usar color sólido
- [ ] Reemplazar `#c6b1c9` con colores de `a11yColors`
- [ ] Testear con lector de pantalla

### 5. ⏳ components/Content/ContentProjects.js
**Líneas problemáticas**: 129, 130, 144, 151

- [ ] Línea 129: `color: #224464` OK / `#c6b1c9` → `#6b4275`
- [ ] Línea 130: `border-left: rgba(198,177,201,0.5)` → `rgba(107,66,117,0.8)`
- [ ] Línea 144: `color: #c6b1c9` → `#6b4275` o `#e8d4eb` según fondo
- [ ] Línea 151: `color: #555` → `#333333`
- [ ] Importar `a11yColors`
- [ ] Verificar contraste de bordes

### 6. ⏳ components/Content/ContentStyles.js
**Líneas problemáticas**: 88, 103, 122, 128, 134

- [ ] Línea 88: `color: #c6b1c9` → `#6b4275` o `#e8d4eb`
- [ ] Línea 103: `color: #c6b1c9` → `#6b4275` (verificar contexto)
- [ ] Línea 122: `color: #c6b1c9` → según fondo
- [ ] Línea 128: `border: 2px solid #c6b1c9` → `#8e6b9c`
- [ ] Línea 134: `background: #c6b1c9` → `#5a3762` o `#d4b8d9`
- [ ] Importar `a11yColors`

### 7. ⏳ components/Content/Content.jsx
**Líneas problemáticas**: 158, 159, 201, 212

- [ ] Línea 158: `color: #c6b1c9` → según fondo
- [ ] Línea 159: `border-left: #c6b1c9` → `#8e6b9c`
- [ ] Línea 201: `background: #c6b1c9` → `#5a3762` o `#d4b8d9`
- [ ] Línea 212: `background: #c6b1c9` → `#5a3762` o `#d4b8d9`

### 8. ⏳ components/News/NewsArticle.jsx
**Líneas problemáticas**: 319, 374, 380, 433, 463, 557, 614

- [ ] Línea 319: `border: #c6b1c9` → `#8e6b9c`
- [ ] Línea 374: `background: #c6b1c9` → `#5a3762`
- [ ] Línea 380: `color: #888` → `#4a4a4a`
- [ ] Línea 433: `gradient: #c6b1c9 0%, #8e6b9c 100%` → revisar contraste
- [ ] Línea 463: `outline: #c6b1c9` → `#6b4275`
- [ ] Línea 557: `outline: #c6b1c9` → `#6b4275`
- [ ] Línea 614: `background: #c6b1c9` → `#5a3762`

### 9. ⏳ components/News/FeaturedNewsClean.jsx
**Líneas problemáticas**: 323, 343, 345

- [ ] Línea 323: `color: #555` → `#333333`
- [ ] Línea 343: Verificar contexto
- [ ] Línea 345: Verificar contexto

### 10. ⏳ components/Carousel/CarouselDesktop.jsx
**Líneas problemáticas**: 206, 273

- [ ] Línea 206: `border-bottom: #c6b1c9` → `#8e6b9c`
- [ ] Línea 273: `background: $active ? "#224464" : "#c6b1c9"` → `"#5a3762"`

### 11. ⏳ components/Carousel/CarouselMobile.jsx
**Líneas problemáticas**: 124

- [ ] Línea 124: `border-bottom: #c6b1c9` → `#8e6b9c`

### 12. ⏳ components/Carousel/CarouselSwitcher.jsx
**Líneas problemáticas**: 104, 113, 116

- [ ] Línea 104: `gradient: #c6b1c9, #224464` → ajustar
- [ ] Línea 113: `rgba(198, 177, 201, 0.15)` → aumentar opacidad
- [ ] Línea 116: Verificar opacidad

### 13. ⏳ components/CookieBanner/CookieBanner.jsx
**Líneas problemáticas**: 121

- [ ] Línea 121: `rgba(7, 28, 47, 0.04)` → aumentar a `0.3` mínimo

### 14. ⏳ views/Landing/components/testimonials/Testimonials.jsx
**Líneas problemáticas**: 233, 273, 313

- [ ] Línea 233: Verificar color de texto
- [ ] Línea 273: `color: #888` → `#4a4a4a`
- [ ] Línea 313: `color: #c6b1c9` → según fondo

### 15. ⏳ views/Landing/components/CardsAboutUs.jsx
**Líneas problemáticas**: múltiples con `#c6b1c9`

- [ ] Reemplazar todos los `#c6b1c9` con colores de `a11yColors`
- [ ] Verificar contexto (fondo claro vs oscuro)

### 16. ⏳ views/Landing/components/tePuedeInteresar/Informacion.jsx
- [ ] Reemplazar `#c6b1c9` con colores accesibles

### 17. ⏳ views/Landing/components/tePuedeInteresar/PlanDeIgualdad.jsx
- [ ] Reemplazar `#c6b1c9` con colores accesibles

### 18. ⏳ views/Landing/components/SectionServiceFilter.jsx
- [ ] Icon color: `#c6b1c9` → `#6b4275`

---

## 🔍 Búsqueda de Problemas

### Comandos útiles:

```bash
# Buscar color problemático principal
grep -rn "#c6b1c9" ./src --include="*.jsx" --include="*.js" --include="*.css"

# Buscar grises pálidos
grep -rn "#555\|#777\|#888\|#999\|#bbb" ./src --include="*.jsx" --include="*.js" --include="*.css"

# Buscar opacidades bajas
grep -rn "rgba.*0\.[0-3]" ./src --include="*.jsx" --include="*.js" --include="*.css"

# Buscar estilos inline
grep -rn "style={{" ./src --include="*.jsx" --include="*.js"
```

---

## ✅ Proceso de Migración por Archivo

Para cada archivo:

1. **Leer el archivo**
   ```bash
   cat src/components/NombreArchivo.jsx
   ```

2. **Identificar colores problemáticos**
   - `#c6b1c9` → usar `a11yColors.purple.*`
   - `#555, #777, #888, #999` → usar `a11yColors.gray.*`
   - `rgba(..., 0.05-0.35)` → aumentar a `0.6+` o usar color sólido

3. **Importar sistema de colores**
   ```javascript
   import { a11yColors } from '../styles/a11yColors';
   ```

4. **Reemplazar colores**
   - Considerar el contexto (fondo claro vs oscuro)
   - Usar utilidades `getTextColor()` si es necesario

5. **Verificar contraste**
   ```javascript
   import { checkContrast } from '../utils/contrastChecker';
   checkContrast(nuevoColor, colorFondo);
   ```

6. **Testear visualmente**
   - Ver en navegador
   - Verificar en diferentes tamaños de pantalla
   - Usar WAVE o Lighthouse

7. **Commit**
   ```bash
   git add src/components/NombreArchivo.jsx
   git commit -m "fix(a11y): mejorar contraste en NombreArchivo
   
   - Reemplazar #c6b1c9 con colores accesibles
   - Contraste mejorado de 1.88:1 a 7.02:1
   - Cumple WCAG AA
   
   Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
   ```

---

## 🧪 Testing por Archivo

Después de cada migración:

- [ ] **Visual**: Ver el componente en el navegador
- [ ] **Contraste**: Verificar con `contrastChecker.js`
- [ ] **WAVE**: Escanear con WAVE Extension
- [ ] **Lighthouse**: Audit de accesibilidad (Chrome DevTools)
- [ ] **Teclado**: Navegar solo con teclado (Tab, Enter, Esc)
- [ ] **Responsive**: Verificar en móvil y tablet

---

## 📊 Progreso General

### Archivos Completados: 2/18 (11%)

- [x] globalStyles.js
- [x] components/TitleSection.jsx
- [ ] components/Footer/styles/Footer.css
- [ ] components/Accessibility/AccessibilityControls.jsx
- [ ] components/Content/ContentProjects.js
- [ ] components/Content/ContentStyles.js
- [ ] components/Content/Content.jsx
- [ ] components/News/NewsArticle.jsx
- [ ] components/News/FeaturedNewsClean.jsx
- [ ] components/Carousel/CarouselDesktop.jsx
- [ ] components/Carousel/CarouselMobile.jsx
- [ ] components/Carousel/CarouselSwitcher.jsx
- [ ] components/CookieBanner/CookieBanner.jsx
- [ ] views/Landing/components/testimonials/Testimonials.jsx
- [ ] views/Landing/components/CardsAboutUs.jsx
- [ ] views/Landing/components/tePuedeInteresar/Informacion.jsx
- [ ] views/Landing/components/tePuedeInteresar/PlanDeIgualdad.jsx
- [ ] views/Landing/components/SectionServiceFilter.jsx

---

## 🎯 Meta

### Objetivo Final:
- ✅ 100% de componentes con contraste WCAG AA
- ✅ 0 errores de accesibilidad en WAVE
- ✅ 95+ score en Lighthouse Accessibility
- ✅ Uso consistente del sistema `a11yColors`

### Tiempo Estimado:
- Por archivo: 10-15 minutos
- Total: ~3-5 horas de trabajo

---

## 📝 Notas

### Reglas Generales:

1. **Sobre fondo CLARO** (#fff, #f9f9f9):
   - Texto: `a11yColors.purple.darkOnLight` (#6b4275)
   - Gris: `a11yColors.gray.darkOnLight` (#333333)

2. **Sobre fondo OSCURO** (#071c2f):
   - Texto: `a11yColors.purple.lightOnDark` (#e8d4eb)
   - Gris: `a11yColors.gray.lightOnDark` (#e5e5e5)

3. **Fondos con texto oscuro**:
   - Usar: `a11yColors.purple.bgWithDarkText` (#d4b8d9)

4. **Fondos con texto claro**:
   - Usar: `a11yColors.purple.bgWithLightText` (#5a3762)

5. **Opacidades mínimas**:
   - Texto: 0.87
   - Fondos: 0.6
   - Bordes: 0.3

---

## 🚀 Quick Start

```bash
# 1. Ver archivos pendientes
grep -l "#c6b1c9" ./src/components/**/*.{jsx,js,css}

# 2. Elegir archivo más crítico
# 3. Seguir el proceso de migración
# 4. Testear
# 5. Commit
# 6. Siguiente archivo
```

---

**Última actualización**: Mayo 2, 2026  
**Completado**: 11%  
**Siguiente**: Footer.css (impacto alto)
