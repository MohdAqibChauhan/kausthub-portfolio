const fs = require('fs');
const json = JSON.parse(fs.readFileSync('public/_nuxt/serif-400.6lmIy8cM.json', 'utf8'));
console.log('+ (43):', !!json.glyphs['43']);
console.log('| (124):', !!json.glyphs['124']);
console.log('/ (47):', !!json.glyphs['47']);
console.log('- (45):', !!json.glyphs['45']);
