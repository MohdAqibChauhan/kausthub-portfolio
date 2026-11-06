const fs = require('fs');
const code = fs.readFileSync('public/_nuxt/Cz49W4la.js', 'utf8');
let idx = 0;
while ((idx = code.indexOf('data-gl', idx)) !== -1) {
  console.log(code.slice(idx - 40, idx + 80));
  idx += 8;
}
