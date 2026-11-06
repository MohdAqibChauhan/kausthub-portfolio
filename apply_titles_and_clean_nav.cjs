const fs = require('fs');

// 1. Update HTML files
const htmlFiles = ['griflan_original.html', 'about.html', 'contact.html', 'project.html'];

htmlFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  // Replace Branding + Web + Motion with all 3 titles and refined font sizing
  const oldTitleP = '<p data-gl="text" class="[-webkit-text-fill-color:transparent] serif text-ink [font-size:max(1.8rem,calc(1.8*var(--floor)))]"><!--[-->Branding + Web + Motion<!--]--></p>';
  const newTitleP = '<p data-gl="text" class="[-webkit-text-fill-color:transparent] serif text-ink [font-size:clamp(1.15rem,1.1vw,1.55rem)] whitespace-nowrap"><!--[-->Graphics Designer | Video Editor | Motion Graphics<!--]--></p>';

  if (html.includes(oldTitleP)) {
    html = html.replace(oldTitleP, newTitleP);
    console.log(`Replaced title cell in ${file}`);
  } else {
    // Fallback search
    html = html.replace(/Branding \+ Web \+ Motion/g, 'Graphics Designer | Video Editor | Motion Graphics');
  }

  // Replace Crafting Brands That Hit Hard with quote
  html = html.replace(/Crafting Brands That Hit Hard/g, '“Stories in motion, designed to stick.”');

  // Ensure data-nav is restored to standard 2-column layout (HOME / ABOUT)
  html = html.replace(
    /class="pointer-events-auto relative z-43 col-span-3 col-start-1 row-start-1 flex items-center justify-start gap-x-20 px-20 s:col-span-2 s:col-start-1"/g,
    'class="pointer-events-auto relative z-43 col-span-3 col-start-4 row-start-1 flex grid-cols-2 items-center justify-end gap-x-15 s:col-span-1 s:col-start-1 s:grid s:justify-normal s:gap-x-[normal] s:[align-items:normal]"'
  );

  fs.writeFileSync(file, html, 'utf8');
  console.log(`Saved ${file}`);
});

// 2. Update public/_nuxt/Cz49W4la.js
let czCode = fs.readFileSync('public/_nuxt/Cz49W4la.js', 'utf8');

czCode = czCode.replace(
  'class:"serif text-ink [font-size:max(1.8rem,calc(1.8*var(--floor)))]",text:"Branding + Web + Motion"',
  'class:"serif text-ink [font-size:clamp(1.15rem,1.1vw,1.55rem)] whitespace-nowrap",text:"Graphics Designer | Video Editor | Motion Graphics"'
);

czCode = czCode.replace(
  'text:"Crafting Brands That Hit Hard"',
  'text:"“Stories in motion, designed to stick.”"'
);

fs.writeFileSync('public/_nuxt/Cz49W4la.js', czCode, 'utf8');
console.log('Saved Cz49W4la.js with 3 titles and quote');
