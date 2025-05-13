const https = require('https');
const fs = require('fs');
const path = require('path');

const avatars = [
  {
    url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4',
    filename: 'avatar1.png'
  },
  {
    url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie&backgroundColor=ffdfbf',
    filename: 'avatar2.png'
  },
  {
    url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria&backgroundColor=ffd1dc',
    filename: 'avatar3.png'
  },
  {
    url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=c1f0c1',
    filename: 'avatar4.png'
  },
  {
    url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nick&backgroundColor=fff4b3',
    filename: 'avatar5.png'
  },
  {
    url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre&backgroundColor=ffb3b3',
    filename: 'avatar6.png'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const targetDir = path.join(process.cwd(), 'public', 'images', 'team');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filepath = path.join(targetDir, filename);
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

const main = async () => {
  try {
    for (const avatar of avatars) {
      await downloadImage(avatar.url, avatar.filename);
    }
    console.log('All avatars downloaded successfully!');
  } catch (error) {
    console.error('Error downloading avatars:', error);
  }
};

main(); 