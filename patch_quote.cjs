const fs = require('fs');

const files = ['griflan_original.html', 'about.html', 'contact.html', 'project.html'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  html = html.replace(/Video Editor \+ Motion Graphics/g, '“Stories in motion, designed to stick.”');
  html = html.replace(/Crafting Brands That Hit Hard/g, '“Stories in motion, designed to stick.”');
  html = html.replace(/Graphics Designer(?!\s*\|)/g, 'Graphics Designer | Video Editor');

  fs.writeFileSync(file, html, 'utf8');
  console.log(`Updated quote and roles in ${file}`);
});
