const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuración de optimización basada en el reporte de Lighthouse
const optimizations = [
  // Iconos de servicios (512x512 → 100x100 para @2x retina = 50x50 display)
  { input: 'src/views/Landing/components/assets/pictogramas/familia.png', width: 100, height: 100 },
  { input: 'src/views/Landing/components/assets/pictogramas/proteger.png', width: 100, height: 100 },
  { input: 'src/views/Landing/components/assets/pictogramas/vivienda-social.png', width: 100, height: 100 },
  { input: 'src/views/Landing/components/assets/pictogramas/educacion.png', width: 100, height: 100 },
  { input: 'src/views/Landing/components/assets/pictogramas/promocion.png', width: 100, height: 100 },
  { input: 'src/views/Landing/components/assets/pictogramas/apoyo.png', width: 100, height: 100 },
  { input: 'src/views/Landing/components/assets/pictogramas/historial-medico.png', width: 100, height: 100 },
  { input: 'src/views/terapias/components/assets/pictogramas/terapia-fisica.png', width: 100, height: 100 },

  // Iconos grandes de donaciones (los más pesados)
  { input: 'src/views/Landing/assets/images-dontationInformation/80-removebg-preview.png', width: 226, height: 180 },
  { input: 'src/views/Landing/assets/images-dontationInformation/dinero-removebg-preview.png', width: 260, height: 180 },
  { input: 'src/views/Landing/assets/images-dontationInformation/grafico-2-removebg-preview.png', width: 186, height: 180 },

  // Logo
  { input: 'src/components/Header/logos/logo-afymos.png', width: 224, height: 224 },

  // Imágenes de cards de igualdad
  { input: 'src/views/Landing/components/tePuedeInteresar/assets/icons/compromiso.png', width: 200, height: 280 },
  { input: 'src/views/Landing/components/tePuedeInteresar/assets/icons/institutoDeLaMujer.png', width: 200, height: 110 },
];

// Imágenes del carrusel que necesitan múltiples tamaños (responsive)
const carouselImages = [
  { input: 'public/images/carusel/camiseta.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/cata-vinos.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/carlos-4.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/reforma.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/infanta.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/crea-2024.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/club-deportivo.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/charlas.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/semana-capacidad.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/somos-campeones.webp', sizes: [400, 800, 1200] },
  { input: 'public/images/carusel/familia-afymos.webp', sizes: [400, 800, 1200] },
];

// Imágenes que necesitan conversión a WebP
const toWebP = [
  'src/views/Landing/assets/images-noticias/inclusion-laboral-comarca/inauguracion-1.jpg',
  'src/views/Landing/assets/images-noticias/camiseta.jpg',
];

async function optimizeImage(config) {
  try {
    const inputPath = config.input;

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  No encontrado: ${inputPath}`);
      return;
    }

    const ext = path.extname(inputPath);
    const dir = path.dirname(inputPath);
    const basename = path.basename(inputPath, ext);

    // Crear versión optimizada PNG/JPG
    const outputPath = path.join(dir, `${basename}-optimized${ext}`);

    let pipeline = sharp(inputPath);

    if (config.width && config.height) {
      pipeline = pipeline.resize(config.width, config.height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      });
    }

    // Optimizar según el formato
    if (ext === '.png') {
      await pipeline.png({ quality: 90, compressionLevel: 9 }).toFile(outputPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality: 85, mozjpeg: true }).toFile(outputPath);
    } else if (ext === '.webp') {
      await pipeline.webp({ quality: 85 }).toFile(outputPath);
    }

    // Crear versión WebP
    const webpPath = path.join(dir, `${basename}.webp`);
    await sharp(inputPath)
      .resize(config.width, config.height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ quality: 85 })
      .toFile(webpPath);

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const saved = originalSize - Math.min(optimizedSize, webpSize);

    console.log(`✅ ${basename}${ext}:`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`   Optimizado: ${(optimizedSize / 1024).toFixed(1)} KB`);
    console.log(`   WebP: ${(webpSize / 1024).toFixed(1)} KB`);
    console.log(`   Ahorro: ${(saved / 1024).toFixed(1)} KB (${((saved / originalSize) * 100).toFixed(1)}%)`);

  } catch (error) {
    console.error(`❌ Error procesando ${config.input}:`, error.message);
  }
}

async function createResponsiveImages(config) {
  try {
    const inputPath = config.input;

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  No encontrado: ${inputPath}`);
      return;
    }

    const ext = path.extname(inputPath);
    const dir = path.dirname(inputPath);
    const basename = path.basename(inputPath, ext);

    console.log(`\n🖼️  Creando versiones responsivas de ${basename}${ext}:`);

    for (const width of config.sizes) {
      const outputPath = path.join(dir, `${basename}-${width}w.webp`);

      await sharp(inputPath)
        .resize(width, null, { fit: 'inside' })
        .webp({ quality: 85 })
        .toFile(outputPath);

      const size = fs.statSync(outputPath).size;
      console.log(`   ✅ ${width}w: ${(size / 1024).toFixed(1)} KB`);
    }

  } catch (error) {
    console.error(`❌ Error creando responsivas para ${config.input}:`, error.message);
  }
}

async function convertToWebP(inputPath) {
  try {
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  No encontrado: ${inputPath}`);
      return;
    }

    const ext = path.extname(inputPath);
    const dir = path.dirname(inputPath);
    const basename = path.basename(inputPath, ext);
    const webpPath = path.join(dir, `${basename}.webp`);

    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(webpPath);

    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const saved = originalSize - webpSize;

    console.log(`✅ ${basename}${ext} → WebP:`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`   WebP: ${(webpSize / 1024).toFixed(1)} KB`);
    console.log(`   Ahorro: ${(saved / 1024).toFixed(1)} KB (${((saved / originalSize) * 100).toFixed(1)}%)`);

  } catch (error) {
    console.error(`❌ Error convirtiendo ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  console.log('═══════════════════════════════════════════════════════');
  console.log('PASO 1: Redimensionando y optimizando imágenes');
  console.log('═══════════════════════════════════════════════════════\n');

  for (const config of optimizations) {
    await optimizeImage(config);
  }

  console.log('\n═══════════════════════════════════════════════════════');
  console.log('PASO 2: Creando versiones responsivas para carrusel');
  console.log('═══════════════════════════════════════════════════════');

  for (const config of carouselImages) {
    await createResponsiveImages(config);
  }

  console.log('\n═══════════════════════════════════════════════════════');
  console.log('PASO 3: Convirtiendo JPG a WebP');
  console.log('═══════════════════════════════════════════════════════\n');

  for (const imagePath of toWebP) {
    await convertToWebP(imagePath);
  }

  console.log('\n✅ ¡Optimización completada!');
  console.log('\n📝 Próximos pasos:');
  console.log('   1. Revisa las imágenes optimizadas');
  console.log('   2. Reemplaza las originales con las versiones -optimized');
  console.log('   3. Actualiza los componentes para usar srcSet');
  console.log('   4. Ejecuta npm run build y verifica el tamaño');
}

main().catch(console.error);
