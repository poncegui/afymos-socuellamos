# Imágenes para la noticia: Inclusión Laboral Comarca

## ⚠️ IMPORTANTE: Subir las siguientes imágenes a este directorio

Para que la noticia tenga las imágenes correctas, necesitas:

### 📁 PASO 1: Subir las imágenes con estos nombres exactos

#### 1. cartel.png
- **Nombre del archivo:** `cartel.png`
- **Descripción:** Cartel del proyecto Nuevo CREA
- Esta será la imagen principal que aparece en el carrusel de noticias

#### 2. Fotos de inauguración
Renombra las fotos de inauguración que te enviaron con estos nombres:
- **inauguracion-1.jpg** - Primera foto de la inauguración
- **inauguracion-2.jpg** - Segunda foto de la inauguración
- **inauguracion-3.jpg** - Tercera foto de la inauguración

---

### 💻 PASO 2: Actualizar el código

Una vez subidas las imágenes, abre el archivo:
**`src/components/News/newsData.js`**

Y realiza estos cambios:

#### A. Descomentar las líneas 9-12 (imports de imágenes):
```javascript
// De esto:
// import cartelInclusionLaboral from "../../views/Landing/assets/images-noticias/inclusion-laboral-comarca/cartel.png";
// import inauguracion1 from "../../views/Landing/assets/images-noticias/inclusion-laboral-comarca/inauguracion-1.jpg";
// import inauguracion2 from "../../views/Landing/assets/images-noticias/inclusion-laboral-comarca/inauguracion-2.jpg";
// import inauguracion3 from "../../views/Landing/assets/images-noticias/inclusion-laboral-comarca/inauguracion-3.jpg";

// A esto (sin las //):
import cartelInclusionLaboral from "../../views/Landing/assets/images-noticias/inclusion-laboral-comarca/cartel.png";
import inauguracion1 from "../../views/Landing/assets/images-noticias/inclusion-laboral-comarca/inauguracion-1.jpg";
import inauguracion2 from "../../views/Landing/assets/images-noticias/inclusion-laboral-comarca/inauguracion-2.jpg";
import inauguracion3 from "../../views/Landing/assets/images-noticias/inclusion-laboral-comarca/inauguracion-3.jpg";
```

#### B. Cambiar las referencias en la noticia (busca el objeto con id "inclusion-laboral-comarca-2026"):
```javascript
// Cambiar esta línea:
image: heroImg, // TODO: Cambiar por cartelInclusionLaboral cuando se suban las imágenes

// Por esta:
image: cartelInclusionLaboral,

// Y cambiar esta línea:
images: [heroImg, heroImg, heroImg], // TODO: Cambiar por [inauguracion1, inauguracion2, inauguracion3]

// Por esta:
images: [inauguracion1, inauguracion2, inauguracion3],
```

---

## ✅ Verificación

Una vez completados los pasos, este directorio debería contener:
- ✓ cartel.png
- ✓ inauguracion-1.jpg
- ✓ inauguracion-2.jpg
- ✓ inauguracion-3.jpg
- ✓ README.md (este archivo)

Y la web debería compilar sin errores con las imágenes correctas.

---

## 📝 Notas adicionales
- Si tienes más fotos de inauguración, puedes añadirlas como inauguracion-4.jpg, inauguracion-5.jpg, etc.
- No olvides también agregarlas en el archivo `newsData.js` en el array `images`
