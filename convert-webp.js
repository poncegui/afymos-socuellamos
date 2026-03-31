const webp = require("webp-converter");
const fs = require("fs");
const path = require("path");

const inputFolder = "./src/assets/images-cover";
const outputFolder = "./public/images";

// Crea carpeta destino si no existe
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Convierte imágenes válidas
fs.readdirSync(inputFolder).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const valid = [".jpg", ".jpeg", ".png"];
  if (valid.includes(ext)) {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, file.replace(ext, ".webp"));

    webp.cwebp(inputPath, outputPath, "-q 80", (status, error) => {
      if (status === "100") {
        console.log(`✅ Convertido: ${file}`);
      } else {
        console.error(`❌ Error con ${file}: ${error}`);
      }
    });
  }
});
