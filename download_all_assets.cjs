const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  'Cz49W4la.js',
  'BEONk6xx.js',
  'Cm5ppQ94.js',
  'DTTm-hKv.js',
  'mono-500.3mVdNGhQ.json',
  'mono-500.bin.Cp9sJ0rB.gz',
  'sans-400.UP_hgoQ5.json',
  'sans-400.bin.B1ole0wm.gz',
  'sans-500.D0TWIxjh.json',
  'sans-500.bin.BHAcyDPe.gz',
  'serif-400.6lmIy8cM.json',
  'serif-400.bin.DZslexgu.gz',
  'HelveticaNeueLTPro-Roman.esr30XBr.woff2',
  'HelveticaNeueLTPro-Md.BuGpaDxv.woff2',
  'TANMEMORIES-Regular.DJ3BjhRc.woff2',
  'flame-man-still.BeC-05c3.riv',
  'rive.BHUgDsdB.wasm',
  'rive_fallback.CeBxpMvX.wasm'
];

const destDir = path.join(__dirname, 'public', '_nuxt');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function downloadFile(assetName) {
  return new Promise((resolve, reject) => {
    const destPath = path.join(destDir, assetName);
    const url = `https://labs.griflan.com/_nuxt/${assetName}`;
    const file = fs.createWriteStream(destPath);

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return resolve({ assetName, status: res.statusCode });
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(destPath);
          resolve({ assetName, status: 200, size: stats.size });
        });
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      resolve({ assetName, error: err.message });
    });
  });
}

async function run() {
  console.log(`Downloading ${assets.length} nuxt assets from labs.griflan.com...`);
  for (const a of assets) {
    const res = await downloadFile(a);
    console.log(`[${res.status || 'ERR'}] ${a} - ${res.size ? (res.size / 1024).toFixed(1) + ' KB' : (res.error || '')}`);
  }
}

run();
