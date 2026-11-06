const fs = require('fs');

const html = fs.readFileSync('griflan_original.html', 'utf8');
const beforeScript = html.split('<script type="application/json" data-nuxt-data="nuxt-app"')[0];

const matches = [...beforeScript.matchAll(/.{0,50}Griflan.{0,50}/gi)].map(m => m[0]);
console.log('Occurrences in HTML DOM (before script):', matches.length);
matches.forEach((m, i) => console.log(`${i + 1}: ${m.trim()}`));
