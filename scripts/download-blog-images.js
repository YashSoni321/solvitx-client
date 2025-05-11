const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop',
    filename: 'seo-ai.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
    filename: 'nextjs.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    filename: 'technical-seo.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
    filename: 'frontend.jpg'
  }
];

const teamImages = [
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    filename: 'sarah.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    filename: 'michael.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    filename: 'david.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    filename: 'emily.jpg'
  }
];

const downloadImage = (url, filename, directory) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(directory, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const createDirectories = () => {
  const dirs = [
    path.join(process.cwd(), 'public', 'images', 'blog'),
    path.join(process.cwd(), 'public', 'images', 'team')
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

const main = async () => {
  try {
    createDirectories();

    // Download blog images
    const blogDir = path.join(process.cwd(), 'public', 'images', 'blog');
    for (const image of images) {
      await downloadImage(image.url, image.filename, blogDir);
    }

    // Download team images
    const teamDir = path.join(process.cwd(), 'public', 'images', 'team');
    for (const image of teamImages) {
      await downloadImage(image.url, image.filename, teamDir);
    }

    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

main(); 