const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all source files
const sourceFiles = glob.sync('src/**/*.{js,jsx,tsx,ts,css,html}', {
  ignore: ['**/node_modules/**', '**/build/**', '**/docs/**']
});

// Read all source code
let allSourceCode = '';
sourceFiles.forEach(file => {
  try {
    allSourceCode += fs.readFileSync(file, 'utf-8') + '\n';
  } catch (e) {
    // ignore
  }
});

// Find all images
const imagePatterns = [
  'src/**/*.jpg',
  'src/**/*.jpeg',
  'src/**/*.png',
  'src/**/*.webp',
  'public/**/*.jpg',
  'public/**/*.jpeg',
  'public/**/*.png',
  'public/**/*.webp'
];

let allImages = [];
imagePatterns.forEach(pattern => {
  const files = glob.sync(pattern, {
    ignore: ['**/node_modules/**', '**/build/**', '**/docs/**']
  });
  allImages = allImages.concat(files);
});

console.log(`🔍 Analizando ${allImages.length} imágenes...\n`);

const unused = [];
const used = [];

allImages.forEach(imagePath => {
  const basename = path.basename(imagePath);
  const basenameNoExt = basename.replace(/\.(jpg|jpeg|png|webp)$/i, '');

  // Check if the basename appears in any source file
  const isUsed =
    allSourceCode.includes(basename) ||
    allSourceCode.includes(basenameNoExt) ||
    allSourceCode.includes(imagePath.replace('src/', '')) ||
    allSourceCode.includes(imagePath.replace('public/', ''));

  if (isUsed) {
    used.push(imagePath);
  } else {
    unused.push(imagePath);
  }
});

console.log('═══════════════════════════════════════════════════════');
console.log('📊 REPORTE DE IMÁGENES');
console.log('═══════════════════════════════════════════════════════\n');

console.log(`✅ Imágenes en uso: ${used.length}`);
console.log(`❌ Imágenes sin usar: ${unused.length}\n`);

if (unused.length > 0) {
  console.log('═══════════════════════════════════════════════════════');
  console.log('🗑️  IMÁGENES SIN USAR:');
  console.log('═══════════════════════════════════════════════════════\n');

  // Group by directory
  const byDir = {};
  unused.forEach(img => {
    const dir = path.dirname(img);
    if (!byDir[dir]) byDir[dir] = [];
    byDir[dir].push(path.basename(img));
  });

  Object.keys(byDir).sort().forEach(dir => {
    console.log(`\n📁 ${dir}/`);
    byDir[dir].forEach(file => {
      const fullPath = path.join(dir, file);
      const size = fs.statSync(fullPath).size;
      console.log(`   - ${file} (${(size / 1024).toFixed(1)} KB)`);
    });
  });

  // Calculate total size
  const totalSize = unused.reduce((sum, img) => {
    try {
      return sum + fs.statSync(img).size;
    } catch {
      return sum;
    }
  }, 0);

  console.log('\n═══════════════════════════════════════════════════════');
  console.log(`💾 Espacio recuperable: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log('═══════════════════════════════════════════════════════\n');

  // Save list to file
  fs.writeFileSync(
    'unused-images.txt',
    unused.join('\n'),
    'utf-8'
  );

  console.log('✅ Lista guardada en: unused-images.txt');
  console.log('\n💡 Para eliminar las imágenes sin usar:');
  console.log('   node delete-unused-images.js\n');
} else {
  console.log('✅ ¡Todas las imágenes están siendo utilizadas!');
}
