const fs = require('fs');

const html = fs.readFileSync('griflan_original.html', 'utf8');
console.log('Includes Branding + Web + Motion:', html.includes('Branding + Web + Motion'));
console.log('Includes Crafting Brands That Hit Hard:', html.includes('Crafting Brands That Hit Hard'));
