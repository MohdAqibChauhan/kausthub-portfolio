const fs = require('fs');
const entry = fs.readFileSync('entry.js', 'utf8');

const gzMatches = [...entry.matchAll(/[a-zA-Z0-9_.-]+\.gz/g)].map(m => m[0]);
console.log('GZ matches:', [...new Set(gzMatches)]);

const jsonMatches = [...entry.matchAll(/[a-zA-Z0-9_.-]+\.json/g)].map(m => m[0]);
console.log('JSON matches:', [...new Set(jsonMatches)]);

const rivMatches = [...entry.matchAll(/[a-zA-Z0-9_.-]+\.riv/g)].map(m => m[0]);
console.log('RIV matches:', [...new Set(rivMatches)]);

const wasmMatches = [...entry.matchAll(/[a-zA-Z0-9_.-]+\.wasm/g)].map(m => m[0]);
console.log('WASM matches:', [...new Set(wasmMatches)]);

const jsMatches = [...entry.matchAll(/[a-zA-Z0-9_.-]+\.[a-zA-Z0-9_-]{8}\.js/g)].map(m => m[0]);
console.log('JS chunk matches:', [...new Set(jsMatches)]);
