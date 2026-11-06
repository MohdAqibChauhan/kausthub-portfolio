const fs = require('fs');
const code = fs.readFileSync('public/_nuxt/Cz49W4la.js', 'utf8');
let idx = 0;
while ((idx = code.indexOf('fontSize', idx)) !== -1) {
  console.log(code.slice(idx - 30, idx + 50));
  idx += 8;
}
