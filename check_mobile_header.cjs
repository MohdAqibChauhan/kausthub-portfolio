const fs = require('fs');
const html = fs.readFileSync('griflan_original.html', 'utf8');

// Find header element and inspect mobile classes
const m = html.match(/<header\b[^>]*>([\s\S]*?)<\/header>/i);
if (m) {
  console.log('Header attributes and first 500 chars:');
  console.log(m[0].slice(0, 800));
}
