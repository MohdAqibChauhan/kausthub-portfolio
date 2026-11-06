const fs = require('fs');
const html = fs.readFileSync('nuxt_rendered_body.html', 'utf8');

const clusterMatches = [...html.matchAll(/<div[^>]*data-cluster[^>]*>([\s\S]*?)<\/div>/gi)];
console.log('Total data-cluster matches:', clusterMatches.length);

if (clusterMatches.length > 0) {
  console.log('First cluster HTML (first 1000 chars):');
  console.log(clusterMatches[0][0].slice(0, 1000));
}

// Search for data-gl="grid"
const gridMatch = html.match(/<div[^>]*data-gl="grid"[^>]*>([\s\S]*?)<\/main>/);
if (gridMatch) {
  console.log('Grid HTML inside data-gl="grid" (first 1500 chars):');
  console.log(gridMatch[0].slice(0, 1500));
}
