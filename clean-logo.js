const fs = require('fs');
const { PNG } = require('pngjs');

const inputPath = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\0cc7d9c0-8142-4a74-b129-9207eace946d\\media__1784725829006.png';
const logoPath = 'c:\\Users\\ASUS\\Desktop\\Vivek Portfolio\\portfolio\\public\\logo.png';
const faviconPath = 'c:\\Users\\ASUS\\Desktop\\Vivek Portfolio\\portfolio\\public\\favicon.png';

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function () {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];

        // Detect checkerboard grid background (neutral grays & whites where R, G, B are almost equal and bright/mid gray)
        const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
        const isGrayscale = maxDiff < 18;
        const isLightOrMidGray = r > 160 && g > 160 && b > 160;

        if (isGrayscale && isLightOrMidGray) {
          this.data[idx + 3] = 0; // Make background pixel 100% transparent
        }
      }
    }

    this.pack().pipe(fs.createWriteStream(logoPath)).on('finish', () => {
      console.log('Saved transparent logo.png');
      fs.copyFileSync(logoPath, faviconPath);
      console.log('Saved transparent favicon.png');
    });
  });
