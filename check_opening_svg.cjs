const fs = require('fs');
const html = fs.readFileSync('griflan_original.html', 'utf8');

const m = html.match(/<svg[^>]*data-opening[^>]*>[\s\S]*?<\/svg>/i);
if (m) {
  console.log('Found data-opening SVG!');
  console.log('Attributes:', m[0].slice(0, 150));
  console.log('Total SVG length:', m[0].length);
} else {
  console.log('No data-opening found!');
}
