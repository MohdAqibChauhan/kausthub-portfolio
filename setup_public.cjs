const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const fontsDir = path.join(publicDir, 'fonts');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir);

// Copy fonts
const fonts = [
  'HelveticaNeueLTPro-Md.woff2',
  'HelveticaNeueLTPro-Roman.woff2',
  'TANMEMORIES-Regular.woff2'
];

fonts.forEach(f => {
  if (fs.existsSync(f)) {
    fs.copyFileSync(f, path.join(fontsDir, f));
    console.log(`Copied ${f} to public/fonts`);
  }
});

// Copy logo
if (fs.existsSync('logo.svg')) {
  fs.copyFileSync('logo.svg', path.join(publicDir, 'logo.svg'));
  console.log('Copied logo.svg to public/');
}

// Copy svgs
for (let i = 1; i <= 7; i++) {
  const sf = `svg_${i}.svg`;
  if (fs.existsSync(sf)) {
    fs.copyFileSync(sf, path.join(publicDir, sf));
  }
}
console.log('Public assets initialized.');
