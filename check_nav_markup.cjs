const fs = require('fs');
const html = fs.readFileSync('griflan_original.html', 'utf8');

const m = html.match(/<div data-nav[\s\S]*?<\/button>\s*<\/div>/i);
if (m) {
  console.log('Top left nav container:');
  console.log(m[0]);
}
