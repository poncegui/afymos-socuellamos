const fs = require('fs');
const path = require('path');

/**
 * Script post-build: Inline critical CSS
 *
 * Este script extrae el CSS crítico (main.css) y lo inyecta inline en el HTML
 * para eliminar la solicitud HTTP adicional y mejorar el LCP.
 */

const BUILD_DIR = path.join(__dirname, 'build');
const INDEX_HTML = path.join(BUILD_DIR, 'index.html');

function findMainCSS() {
  const cssDir = path.join(BUILD_DIR, 'static', 'css');

  if (!fs.existsSync(cssDir)) {
    console.error('❌ Directorio build/static/css no encontrado. Ejecuta npm run build primero.');
    process.exit(1);
  }

  const files = fs.readdirSync(cssDir);
  const mainCSSFile = files.find(file => file.startsWith('main.') && file.endsWith('.css'));

  if (!mainCSSFile) {
    console.error('❌ No se encontró el archivo main.css en build/static/css/');
    process.exit(1);
  }

  return path.join(cssDir, mainCSSFile);
}

function inlineCSS() {
  console.log('🚀 Iniciando inyección de CSS crítico inline...\n');

  // 1. Encontrar el archivo main.css
  const mainCSSPath = findMainCSS();
  console.log(`📄 CSS encontrado: ${path.basename(mainCSSPath)}`);

  // 2. Leer el contenido del CSS
  const cssContent = fs.readFileSync(mainCSSPath, 'utf-8');
  const cssSize = (cssContent.length / 1024).toFixed(2);
  console.log(`📊 Tamaño del CSS: ${cssSize} KB`);

  // 3. Leer el HTML
  let html = fs.readFileSync(INDEX_HTML, 'utf-8');

  // 4. Buscar si ya existe CSS inline
  if (html.includes('<style id="critical-css">')) {
    console.log('⚠️  CSS crítico ya está inline. Reemplazando...');
    html = html.replace(
      /<style id="critical-css">[\s\S]*?<\/style>/,
      `<style id="critical-css">${cssContent}</style>`
    );
  } else {
    // Inyectar el CSS inline justo antes del </head>
    const styleTag = `  <style id="critical-css">${cssContent}</style>\n</head>`;
    html = html.replace('</head>', styleTag);
    console.log('✅ CSS crítico inyectado inline en <head>');
  }

  // 5. Eliminar el <link> al CSS que ya está inline (si existe)
  const cssFileName = path.basename(mainCSSPath);
  const linkRegex = new RegExp(`<link[^>]*href="[^"]*${cssFileName}"[^>]*>`, 'g');

  if (linkRegex.test(html)) {
    html = html.replace(linkRegex, '<!-- CSS crítico inline arriba -->');
    console.log('✅ Referencia <link> al CSS removida');
  }

  // 6. Guardar el HTML modificado
  fs.writeFileSync(INDEX_HTML, html, 'utf-8');
  console.log(`\n✅ index.html actualizado con CSS inline`);

  // 7. Opcional: Eliminar el archivo CSS ya que está inline
  // Comentado por seguridad - descomenta si quieres eliminar el archivo
  // fs.unlinkSync(mainCSSPath);
  // console.log(`🗑️  ${cssFileName} eliminado (ya está inline)`);

  console.log('\n🎉 ¡Optimización completada!');
  console.log(`💡 Beneficio: Se eliminó 1 solicitud HTTP crítica (${cssSize} KB)`);
}

try {
  inlineCSS();
} catch (error) {
  console.error('\n❌ Error durante la inyección de CSS:', error.message);
  process.exit(1);
}
