const fs = require('fs');

const files = ['griflan_original.html', 'about.html', 'contact.html', 'project.html'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const html = fs.readFileSync(file, 'utf8');
  const matches = [...html.matchAll(/Griflan/gi)];
  console.log(`${file}: ${matches.length} occurrences of "Griflan"`);
});
