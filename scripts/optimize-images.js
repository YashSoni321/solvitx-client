const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  try {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .resize(1200, null, { // Max width 1200px, maintain aspect ratio
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFile(outputPath);
        
        console.log(`Optimized: ${file}`);
      }
    }
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 