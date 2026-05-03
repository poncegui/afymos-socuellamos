const fs = require('fs');

// Read the list of unused images
const unusedFile = 'unused-images.txt';

if (!fs.existsSync(unusedFile)) {
  console.error('❌ Error: Primero ejecuta "node find-unused-images.js"');
  process.exit(1);
}

const unusedImages = fs.readFileSync(unusedFile, 'utf-8')
  .split('\n')
  .filter(line => line.trim());

console.log('🗑️  Eliminando imágenes sin usar...\n');

let deletedCount = 0;
let deletedSize = 0;
let errors = 0;

unusedImages.forEach(imagePath => {
  try {
    if (fs.existsSync(imagePath)) {
      const size = fs.statSync(imagePath).size;
      fs.unlinkSync(imagePath);
      deletedCount++;
      deletedSize += size;

      if (deletedCount % 20 === 0) {
        console.log(`✅ Eliminadas: ${deletedCount}/${unusedImages.length}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error eliminando ${imagePath}: ${error.message}`);
    errors++;
  }
});

console.log('\n═══════════════════════════════════════════════════════');
console.log('📊 RESULTADO');
console.log('═══════════════════════════════════════════════════════\n');
console.log(`✅ Imágenes eliminadas: ${deletedCount}`);
console.log(`💾 Espacio liberado: ${(deletedSize / 1024 / 1024).toFixed(2)} MB`);
if (errors > 0) {
  console.log(`⚠️  Errores: ${errors}`);
}
console.log('\n✅ ¡Limpieza completada!\n');
