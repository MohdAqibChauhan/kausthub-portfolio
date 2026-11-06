const fs = require('fs');

const files = ['griflan_original.html', 'about.html', 'contact.html', 'project.html'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  html = html.replace(/Branding \+ Web \+ Motion/g, 'Graphics Designer');
  html = html.replace(/Crafting Brands That Hit Hard/g, 'Video Editor + Motion Graphics');
  html = html.replace(/We are Griflan/g, 'Kaustubh Gondhali');
  html = html.replace(/<title>.*?<\/title>/i, '<title>Kaustubh Gondhali – Graphics Designer | Video Editor | Motion Graphics</title>');

  fs.writeFileSync(file, html, 'utf8');
  console.log(`Patched branding in ${file}`);
});
