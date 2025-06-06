const fs = require('fs');
const path = require('path');

const main = () => {
  console.log('🔄 Replacing original images with optimized versions...\n');

  const sourceDir = path.join(__dirname, '..', 'public', 'images', 'optimized');
  const targetDir = path.join(__dirname, '..', 'public', 'images');

  if (!fs.existsSync(sourceDir)) {
    console.error('❌ Optimized images directory not found!');
    console.error('   Run `npm run optimize-images` first.');
    return;
  }

  // Create backup directory
  const backupDir = path.join(__dirname, '..', 'public', 'images-backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
    console.log('📁 Created backup directory');
  }

  const replaceInDirectory = (optimizedDir, originalDir, backupDir) => {
    const entries = fs.readdirSync(optimizedDir, { withFileTypes: true });
    let replacedCount = 0;

    for (const entry of entries) {
      const optimizedPath = path.join(optimizedDir, entry.name);
      const originalPath = path.join(originalDir, entry.name);
      const backupPath = path.join(backupDir, entry.name);

      if (entry.isDirectory()) {
        // Handle subdirectories
        const subBackupDir = path.join(backupDir, entry.name);
        if (!fs.existsSync(subBackupDir)) {
          fs.mkdirSync(subBackupDir, { recursive: true });
        }
        
        const subOriginalDir = path.join(originalDir, entry.name);
        const subOptimizedDir = optimizedPath;
        
        if (fs.existsSync(subOriginalDir)) {
          replacedCount += replaceInDirectory(subOptimizedDir, subOriginalDir, subBackupDir);
        }
      } else if (entry.isFile()) {
        // Handle WebP files - replace original with WebP but keep original extension
        if (entry.name.endsWith('.webp')) {
          const baseName = entry.name.replace('.webp', '');
          
          // Look for original with different extensions
          const possibleOriginals = [
            `${baseName}.jpg`,
            `${baseName}.jpeg`, 
            `${baseName}.png`
          ];

          for (const originalName of possibleOriginals) {
            const originalFilePath = path.join(originalDir, originalName);
            const backupFilePath = path.join(backupDir, originalName);

            if (fs.existsSync(originalFilePath)) {
              try {
                // Backup original
                fs.copyFileSync(originalFilePath, backupFilePath);
                
                // Replace with optimized WebP
                fs.copyFileSync(optimizedPath, originalFilePath);
                
                console.log(`  ✅ Replaced: ${originalName} with optimized WebP`);
                replacedCount++;
                break;
              } catch (error) {
                console.error(`  ❌ Error replacing ${originalName}:`, error.message);
              }
            }
          }
        }
      }
    }

    return replacedCount;
  };

  const totalReplaced = replaceInDirectory(sourceDir, targetDir, backupDir);

  console.log('\n' + '='.repeat(50));
  console.log('📊 REPLACEMENT SUMMARY');
  console.log('='.repeat(50));
  console.log(`✅ Files replaced: ${totalReplaced}`);
  console.log(`💾 Backups saved to: ${backupDir}`);
  console.log('\n⚠️  Important Notes:');
  console.log('   - Original images backed up before replacement');
  console.log('   - WebP images now serve with original file names');
  console.log('   - No code changes needed - imports remain the same');
  console.log('   - To restore: copy from images-backup directory');
};

if (require.main === module) {
  main();
}

module.exports = { main }; 