const fs = require('fs');
const html = fs.readFileSync('nuxt_rendered_body.html', 'utf8');

const headerMatch = html.match(/<header\b[^>]*>([\s\S]*?)<\/header>/i);
if (headerMatch) {
  fs.writeFileSync('header_exact.html', headerMatch[0]);
  console.log('Saved header_exact.html, length:', headerMatch[0].length);
}
