const fs = require('fs');
const html = fs.readFileSync('griflan_original.html', 'utf8');

const m = html.match(/<div[^>]*data-logo[^>]*>[\s\S]*?<\/div>/i);
if (m) {
  console.log('data-logo markup:');
  console.log(m[0]);
}

// Also check entry.js where data-logo is referenced
const entry = fs.readFileSync('entry.js', 'utf8');
const logoMatches = [...entry.matchAll(/[a-zA-Z0-9_$]{0,20}logo[a-zA-Z0-9_$]{0,20}/gi)].map(x => x[0]);
console.log('Logo occurrences in entry.js:', [...new Set(logoMatches)].slice(0, 15));
