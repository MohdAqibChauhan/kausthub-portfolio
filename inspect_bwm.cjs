const fs = require('fs');
const code = fs.readFileSync('public/_nuxt/Cz49W4la.js', 'utf8');
const idx = code.indexOf('Branding + Web + Motion');
console.log(code.slice(idx - 100, idx + 100));
