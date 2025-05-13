const https = require('https');
const fs = require('fs');
const path = require('path');

const projectImages = [
  {
    url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    filename: 'ecommerce.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    filename: 'banking.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    filename: 'dashboard.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80',
    filename: 'home.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    filename: 'healthcare.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    filename: 'education.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const targetDir = path.join(process.cwd(), 'public', 'images', 'projects');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filepath = path.join(targetDir, filename);

    // Delete existing file if it exists
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }

    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        // Verify file size
        const stats = fs.statSync(filepath);
        if (stats.size < 1000) { // Less than 1KB is probably an error
          fs.unlinkSync(filepath);
          reject(new Error(`Downloaded file ${filename} is too small (${stats.size} bytes)`));
          return;
        }
        console.log(`Downloaded: ${filename} (${Math.round(stats.size / 1024)}KB)`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const main = async () => {
  try {
    for (const image of projectImages) {
      try {
        await downloadImage(image.url, image.filename);
      } catch (error) {
        console.error(`Error downloading ${image.filename}:`, error.message);
      }
    }
    console.log('Image download process completed!');
  } catch (error) {
    console.error('Fatal error:', error);
  }
};

main(); 