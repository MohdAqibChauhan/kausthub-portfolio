const fs = require('fs');
const code = fs.readFileSync('public/_nuxt/Cz49W4la.js', 'utf8');
const startIdx = code.indexOf('MP=`<svg');
console.log('startIdx:', startIdx);
const backtickIdx = code.indexOf('`', startIdx + 4);
console.log('backtickIdx:', backtickIdx);
console.log('Chars around backtick:', JSON.stringify(code.slice(backtickIdx - 20, backtickIdx + 20)));
