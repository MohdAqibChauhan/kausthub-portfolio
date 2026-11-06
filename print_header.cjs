const fs = require('fs');
const h = fs.readFileSync('header_exact.html', 'utf8');

// Strip long SVG paths for clean reading
const clean = h.replace(/d="[^"]+"/g, 'd="..."');
console.log(clean);
