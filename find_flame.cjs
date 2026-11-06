const fs = require('fs');
const entry = fs.readFileSync('entry.js', 'utf8');

const matches = [...entry.matchAll(/flame[a-zA-Z0-9_.-]*/gi)].map(m => m[0]);
console.log('Flame matches in entry.js:', [...new Set(matches)]);
