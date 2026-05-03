const sharp = require('sharp');
const fs = require('fs');

console.log('🎯 Optimizando imágenes pesadas...\n');

const tasks = [
  {
    name: 'portada-cuenca',
    input: 'src/views/Landing/assets/portada-cuenca.png',
    outputs: [
      { file: 'src/views/Landing/assets/portada-cuenca-400w.webp', width: 400, quality: 80 },
      { file: 'src/views/Landing/assets/portada-cuenca-600w.webp', width: 600, quality: 80 },
    ]
  },
  {
    name: 'logo-afymos',
    input: 'src/components/Header/logos/logo-afymos.png',
    outputs: [
      { file: 'src/components/Header/logos/logo-afymos.webp', quality: 85 }
    ]
  },
  {
    name: 'organigrama',
    input: 'src/views/transparencia/components/services/iconos/organigrama.png',
    outputs: [
      { file: 'src/views/transparencia/components/services/iconos/organigrama-60.webp', width: 60, quality: 85 },
      { file: 'src/views/transparencia/components/services/iconos/organigrama-120.webp', width: 120, quality: 85 }
    ]
  },
  {
    name: 'compromiso',
    input: 'src/views/Landing/components/tePuedeInteresar/assets/icons/compromiso.png',
    outputs: [
      { file: 'src/views/Landing/components/tePuedeInteresar/assets/icons/compromiso.webp', quality: 85 }
    ]
  },
  {
    name: 'afymos-show',
    input: 'src/views/Landing/components/tePuedeInteresar/assets/icons/afymos-show.jpg',
    outputs: [
      { file: 'src/views/Landing/components/tePuedeInteresar/assets/icons/afymos-show-100.webp', width: 100, quality: 80 },
      { file: 'src/views/Landing/components/tePuedeInteresar/assets/icons/afymos-show-200.webp', width: 200, quality: 80 }
    ]
  }
];

async function optimizeImages() {
  for (const task of tasks) {
    if (!fs.existsSync(task.input)) {
      console.log(`⚠️  Saltando ${task.name}: archivo no encontrado`);
      continue;
    }

    console.log(`\n📸 Procesando ${task.name}:`);
    const inputStat = fs.statSync(task.input);
    console.log(`   Original: ${(inputStat.size / 1024).toFixed(1)} KB`);

    for (const output of task.outputs) {
      let pipeline = sharp(task.input);

      if (output.width) {
        pipeline = pipeline.resize(output.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });
      }

      await pipeline
        .webp({ quality: output.quality || 85 })
        .toFile(output.file);

      const outputStat = fs.statSync(output.file);
      const saved = inputStat.size - outputStat.size;
      const percent = ((saved / inputStat.size) * 100).toFixed(1);

      console.log(`   ✅ ${output.file.split('/').pop()}: ${(outputStat.size / 1024).toFixed(1)} KB (ahorro: ${percent}%)`);
    }
  }

  console.log('\n✅ Optimización completada!\n');
}

optimizeImages().catch(console.error);
