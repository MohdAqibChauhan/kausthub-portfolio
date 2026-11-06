const fs = require('fs');

const files = ['griflan_original.html', 'about.html', 'contact.html', 'project.html'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  // Replace quote in right cell
  html = html.replace(/Video Editor \+ Motion Graphics/g, '“Stories in motion, designed to stick.”');
  html = html.replace(/Crafting Brands That Hit Hard/g, '“Stories in motion, designed to stick.”');

  // Ensure data-nav doesn't clip
  html = html.replace(/class="pointer-events-auto relative z-43 col-span-3 col-start-4 row-start-1 flex grid-cols-2 items-center justify-end gap-x-15 s:col-span-1 s:col-start-1 s:grid s:justify-normal s:gap-x-\[normal\] s:\[align-items:normal\]"/g,
    'class="pointer-events-auto relative z-43 col-span-3 col-start-1 row-start-1 flex items-center justify-start gap-x-20 px-20 s:col-span-2 s:col-start-1"');

  fs.writeFileSync(file, html, 'utf8');
  console.log(`Patched nav in ${file}`);
});
