const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  quality: {
    jpeg: 80,
    png: 90,
    webp: 85
  },
  sizes: {
    // Hero images - larger size but optimized
    hero: { width: 1920, height: 1080 },
    // Regular images
    regular: { width: 1200, height: 800 },
    // Client logos and smaller images
    small: { width: 600, height: 400 }
  }
};

// Create optimized directory if it doesn't exist
const createOptimizedDir = (dir) => {
  const optimizedDir = path.join(dir, 'optimized');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }
  return optimizedDir;
};

// Get appropriate size based on file path
const getSizeConfig = (filePath) => {
  const lowerPath = filePath.toLowerCase();
  if (lowerPath.includes('hero') || lowerPath.includes('landing')) {
    return config.sizes.hero;
  } else if (lowerPath.includes('client') || lowerPath.includes('logo')) {
    return config.sizes.small;
  }
  return config.sizes.regular;
};

// Optimize a single image
const optimizeImage = async (inputPath, outputDir) => {
  try {
    const filename = path.basename(inputPath, path.extname(inputPath));
    const sizeConfig = getSizeConfig(inputPath);
    
    // Get original file stats
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2); // MB
    
    console.log(`\nOptimizing: ${inputPath} (${originalSize}MB)`);
    
    // Create WebP version (best compression)
    const webpPath = path.join(outputDir, `${filename}.webp`);
    await sharp(inputPath)
      .resize(sizeConfig.width, sizeConfig.height, { 
        fit: 'cover',
        withoutEnlargement: true
      })
      .webp({ quality: config.quality.webp })
      .toFile(webpPath);
    
    // Create optimized JPEG version (fallback)
    const jpegPath = path.join(outputDir, `${filename}.jpg`);
    await sharp(inputPath)
      .resize(sizeConfig.width, sizeConfig.height, { 
        fit: 'cover',
        withoutEnlargement: true
      })
      .jpeg({ quality: config.quality.jpeg, progressive: true })
      .toFile(jpegPath);
    
    // Get optimized file sizes
    const webpStats = fs.statSync(webpPath);
    const jpegStats = fs.statSync(jpegPath);
    const webpSize = (webpStats.size / 1024 / 1024).toFixed(2);
    const jpegSize = (jpegStats.size / 1024 / 1024).toFixed(2);
    
    console.log(`  ✓ WebP: ${webpSize}MB (${((1 - webpStats.size / stats.size) * 100).toFixed(1)}% reduction)`);
    console.log(`  ✓ JPEG: ${jpegSize}MB (${((1 - jpegStats.size / stats.size) * 100).toFixed(1)}% reduction)`);
    
    return {
      original: originalSize,
      webp: webpSize,
      jpeg: jpegSize,
      webpReduction: ((1 - webpStats.size / stats.size) * 100).toFixed(1),
      jpegReduction: ((1 - jpegStats.size / stats.size) * 100).toFixed(1)
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
};

// Process directory recursively
const processDirectory = async (dir) => {
  const optimizedDir = createOptimizedDir(dir);
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && entry.name !== 'optimized') {
      // Recursively process subdirectories
      const subResults = await processDirectory(fullPath);
      results.push(...subResults);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const result = await optimizeImage(fullPath, optimizedDir);
        if (result) {
          results.push({ file: entry.name, ...result });
        }
      }
    }
  }
  
  return results;
};

// Main function
const main = async () => {
  console.log('🚀 Starting image optimization...\n');
  
  const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
  
  if (!fs.existsSync(publicImagesDir)) {
    console.error('Public images directory not found!');
    return;
  }
  
  const startTime = Date.now();
  const results = await processDirectory(publicImagesDir);
  const endTime = Date.now();
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));
  
  const totalOriginal = results.reduce((sum, r) => sum + parseFloat(r.original), 0);
  const totalWebP = results.reduce((sum, r) => sum + parseFloat(r.webp), 0);
  const totalJPEG = results.reduce((sum, r) => sum + parseFloat(r.jpeg), 0);
  
  console.log(`📁 Files processed: ${results.length}`);
  console.log(`⏱️  Time taken: ${((endTime - startTime) / 1000).toFixed(2)}s`);
  console.log(`💾 Original total size: ${totalOriginal.toFixed(2)}MB`);
  console.log(`🎉 WebP total size: ${totalWebP.toFixed(2)}MB (${((1 - totalWebP / totalOriginal) * 100).toFixed(1)}% reduction)`);
  console.log(`📷 JPEG total size: ${totalJPEG.toFixed(2)}MB (${((1 - totalJPEG / totalOriginal) * 100).toFixed(1)}% reduction)`);
  console.log(`💰 Space saved: ${(totalOriginal - totalWebP).toFixed(2)}MB with WebP`);
  
  console.log('\n✅ Image optimization complete!');
  console.log('\n💡 Next steps:');
  console.log('   1. Update your components to use optimized images from /images/optimized/');
  console.log('   2. Use WebP format with JPEG fallback for best performance');
  console.log('   3. Consider implementing next/image for automatic optimization');
};

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, processDirectory }; 