const fs = require('fs');
const entry = fs.readFileSync('entry.js', 'utf8');

// Search for keywords related to sphere, globe, radius, lat, lon, tile, grid, wall
const keywords = ['radius', 'sphere', 'latitude', 'longitude', 'curvature', 'grid', 'camera', 'fov', 'cluster'];

keywords.forEach(kw => {
  const r = new RegExp(`[a-zA-Z0-9_$]{0,20}${kw}[a-zA-Z0-9_$]{0,20}`, 'gi');
  const matches = [...new Set([...entry.matchAll(r)].map(m => m[0]))];
  console.log(`Keyword [${kw}] matches (${matches.length}):`, matches.slice(0, 10));
});
