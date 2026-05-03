const sharp = require('sharp');
const fs = require('fs');

const input = 'src/views/Landing/assets/images-noticias/inclusion-laboral-comarca/inauguracion-1.jpg';
const basePath = 'src/views/Landing/assets/images-noticias/inclusion-laboral-comarca/';

const tasks = [
  { width: 600, quality: 82, file: `${basePath}inauguracion-1-600w.webp` },
  { width: 900, quality: 82, file: `${basePath}inauguracion-1-900w.webp` },
  { width: 1200, quality: 82, file: `${basePath}inauguracion-1-1200w.webp` }
];

async function run() {
  const stat = fs.statSync(input);
  console.log(`Original: ${(stat.size / 1024).toFixed(1)} KB\n`);

  for (const task of tasks) {
    await sharp(input)
      .resize(task.width, null, { withoutEnlargement: true, fit: 'inside' })
      .webp({ quality: task.quality })
      .toFile(task.file);
    
    const outStat = fs.statSync(task.file);
    console.log(`✅ ${task.file.split('/').pop()}: ${(outStat.size / 1024).toFixed(1)} KB`);
  }
}

run().catch(console.error);
