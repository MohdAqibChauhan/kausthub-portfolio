const fs = require('fs');
const entry = fs.readFileSync('entry.js', 'utf8');

function findContext(keyword) {
  let pos = 0;
  console.log(`\n=== CONTEXT FOR "${keyword}" ===`);
  while ((pos = entry.indexOf(keyword, pos)) !== -1) {
    console.log(entry.slice(Math.max(0, pos - 150), Math.min(entry.length, pos + 250)));
    console.log('---');
    pos += keyword.length + 50;
  }
}

findContext('latitude');
findContext('gridlines');
findContext('cluster');
