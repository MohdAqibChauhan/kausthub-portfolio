const fs = require('fs');

const files = ['griflan_original.html', 'about.html', 'contact.html', 'project.html'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  // Add draw invitation into the ticker
  html = html.replace(/TinyFish raises \$47 million in ICONIQ-led round/g, '★ BORED? CLICK "DRAW" TO DOODLE ON MY CANVAS ★ • TinyFish raises $47 million in ICONIQ-led round');

  fs.writeFileSync(file, html, 'utf8');
  console.log(`Updated ticker in ${file}`);
});
