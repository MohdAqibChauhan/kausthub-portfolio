const fs = require('fs');

const html = fs.readFileSync('griflan_original.html', 'utf8');

// Find all /_nuxt/ URLs
const matches = [...html.matchAll(/\/(_nuxt\/[^"'\s)]+)/g)].map(m => m[1]);
console.log('Unique /_nuxt/ assets in HTML:');
const uniqueNuxtAssets = [...new Set(matches)];
console.log(uniqueNuxtAssets);
