const fs = require('fs');

const files = ['entry.js', 'beon.js', 'cm5.js', 'dttm.js'];
const allAssets = new Set();

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');

  // match "/_nuxt/..." or "something.hash.ext"
  const m1 = [...content.matchAll(/["'](\/_nuxt\/[^"']+)["']/g)].map(m => m[1]);
  m1.forEach(u => allAssets.add(u));

  const m2 = [...content.matchAll(/["']([a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]{8}\.(?:js|wasm|riv|png|jpg|svg|woff2|gz|json))["']/g)].map(m => m[1]);
  m2.forEach(u => allAssets.add('/_nuxt/' + u));
});

console.log('All referenced nuxt assets in JS files:');
console.log([...allAssets]);
