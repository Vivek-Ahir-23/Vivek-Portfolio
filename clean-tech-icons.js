const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const techDir = 'c:\\Users\\ASUS\\Desktop\\Vivek Portfolio\\portfolio\\public\\tech';
const files = ['code.png', 'dart.png', 'firebase.png', 'flutter.png'];

files.forEach((file) => {
  const filePath = path.join(techDir, file);
  if (!fs.existsSync(filePath)) return;

  fs.createReadStream(filePath)
    .pipe(new PNG({ filterType: 4 }))
    .on('parsed', function () {
      let modified = false;
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          const idx = (this.width * y + x) << 2;
          const r = this.data[idx];
          const g = this.data[idx + 1];
          const b = this.data[idx + 2];
          const a = this.data[idx + 3];

          // Check if white or light background
          if (r > 240 && g > 240 && b > 240 && a > 0) {
            this.data[idx + 3] = 0; // Make pure white transparent
            modified = true;
          }
        }
      }

      this.pack().pipe(fs.createWriteStream(filePath)).on('finish', () => {
        console.log(`Cleaned background for ${file}`);
      });
    });
});
