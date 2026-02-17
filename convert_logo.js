const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'src/assets/logo.jpeg');
const outputPath = path.join(__dirname, 'src/assets/logo.png');

sharp(inputPath)
  .toFormat('png')
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    // Manually process buffer to make white transparent
    const pixelArray = new Uint8Array(data);
    for (let i = 0; i < pixelArray.length; i += info.channels) {
      const r = pixelArray[i];
      const g = pixelArray[i + 1];
      const b = pixelArray[i + 2];
      
      // If close to white (e.g., > 215) - Lowered threshold to catch more background artifacts
      if (r > 215 && g > 215 && b > 215) {
        if (info.channels === 4) {
             pixelArray[i + 3] = 0;
        }
      }
    }
    
    sharp(pixelArray, {
      raw: {
        width: info.width,
        height: info.height,
        channels: info.channels
      }
    })
    .toFile(outputPath)
    .then(() => console.log('Logo converted to PNG with transparent background'))
    .catch(err => console.error(err));
  })
  .catch(err => console.error(err));
