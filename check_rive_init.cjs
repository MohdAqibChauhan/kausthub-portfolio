const fs = require('fs');
const entry = fs.readFileSync('entry.js', 'utf8');

let pos = entry.indexOf('flame-man-still');
if (pos !== -1) {
  console.log(entry.slice(Math.max(0, pos - 300), Math.min(entry.length, pos + 400)));
}
