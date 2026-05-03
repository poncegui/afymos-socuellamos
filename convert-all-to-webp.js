const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

async function convertToWebP(inputPath) {
  try {
    const ext = path.extname(inputPath);
    const dir = path.dirname(inputPath);
    const basename = path.basename(inputPath, ext);
    const webpPath = path.join(dir, `${basename}.webp`);

    // Skip if WebP already exists
    if (fs.existsSync(webpPath)) {
      return null;
    }

    const originalSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;
    const saved = originalSize - webpSize;
    const percent = ((saved / originalSize) * 100).toFixed(1);

    return {
      file: path.relative(process.cwd(), inputPath),
      originalSize,
      webpSize,
      saved,
      percent
    };
  } catch (error) {
    console.error(`❌ Error: ${inputPath}: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 Iniciando conversión masiva a WebP...\n');

  // Find all JPG, JPEG, and PNG files
  const patterns = [
    'src/**/*.jpg',
    'src/**/*.jpeg',
    'src/**/*.png',
    'public/**/*.jpg',
    'public/**/*.jpeg',
    'public/**/*.png'
  ];

  let allFiles = [];
  for (const pattern of patterns) {
    const files = glob.sync(pattern, {
      ignore: ['**/node_modules/**', '**/build/**', '**/docs/**']
    });
    allFiles = allFiles.concat(files);
  }

  console.log(`📊 Total de imágenes encontradas: ${allFiles.length}`);
  console.log(`🔍 Verificando cuáles necesitan conversión...\n`);

  const results = [];
  let converted = 0;
  let skipped = 0;

  for (const file of allFiles) {
    const result = await convertToWebP(file);
    if (result) {
      results.push(result);
      converted++;

      // Progress indicator
      if (converted % 10 === 0) {
        console.log(`✅ Convertidas: ${converted}/${allFiles.length - skipped}`);
      }
    } else {
      skipped++;
    }
  }

  console.log('\n═══════════════════════════════════════════════════════');
  console.log('📊 RESUMEN DE CONVERSIÓN');
  console.log('═══════════════════════════════════════════════════════\n');

  if (results.length === 0) {
    console.log('✅ Todas las imágenes ya tienen versión WebP');
    return;
  }

  // Sort by size saved
  results.sort((a, b) => b.saved - a.saved);

  // Show top 20 biggest savings
  console.log('🏆 Top 20 imágenes con mayor ahorro:\n');
  results.slice(0, 20).forEach((r, i) => {
    console.log(`${i + 1}. ${r.file}`);
    console.log(`   Original: ${(r.originalSize / 1024).toFixed(1)} KB → WebP: ${(r.webpSize / 1024).toFixed(1)} KB`);
    console.log(`   Ahorro: ${(r.saved / 1024).toFixed(1)} KB (${r.percent}%)\n`);
  });

  // Calculate totals
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalWebP = results.reduce((sum, r) => sum + r.webpSize, 0);
  const totalSaved = totalOriginal - totalWebP;
  const totalPercent = ((totalSaved / totalOriginal) * 100).toFixed(1);

  console.log('═══════════════════════════════════════════════════════');
  console.log('💾 TOTALES:');
  console.log(`   Imágenes convertidas: ${converted}`);
  console.log(`   Imágenes ya en WebP: ${skipped}`);
  console.log(`   Tamaño original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Tamaño WebP: ${(totalWebP / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Ahorro total: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${totalPercent}%)`);
  console.log('═══════════════════════════════════════════════════════\n');

  console.log('✅ Conversión completada!');
  console.log('💡 Próximos pasos:');
  console.log('   1. Actualizar componentes para usar <picture> con WebP');
  console.log('   2. Mantener archivos originales como fallback');
  console.log('   3. Ejecutar npm run build');
}

main().catch(console.error);
