const fs = require('fs');
const { generate } = require('./build_opening_paths.cjs');

async function main() {
  console.log('Generating vector paths...');
  const { titleD, subD } = await generate();
  console.log('Generated paths successfully.');

  // 1. Update public/_nuxt/Cz49W4la.js
  console.log('Updating Cz49W4la.js...');
  let czCode = fs.readFileSync('public/_nuxt/Cz49W4la.js', 'utf8');
  
  const startIdx = czCode.indexOf('MP=`<svg');
  if (startIdx !== -1) {
    const backtickIdx = czCode.indexOf('`', startIdx + 4);
    const newMpSvg = `MP=\`<svg width="3304" height="484" viewBox="0 0 1652 242" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="${titleD}"/>
<path d="${subD}"/>
</svg>\``;
    czCode = czCode.slice(0, startIdx) + newMpSvg + czCode.slice(backtickIdx + 1);
    console.log('Replaced MP in Cz49W4la.js');
  } else {
    console.warn('MP=`<svg not found in Cz49W4la.js');
  }

  czCode = czCode.replace(/"aria-label":"Griflan Labs"/g, '"aria-label":"Kaustubh Gondhali"');
  czCode = czCode.replace(/jo="Griflan Labs"/g, 'jo="Kaustubh Gondhali"');
  czCode = czCode.replace(/"Griflan Labs — motion, web and brand experiments"/g, '"Kaustubh Gondhali — Graphics Designer | Video Editor | Motion Graphics"');
  fs.writeFileSync('public/_nuxt/Cz49W4la.js', czCode, 'utf8');
  console.log('Saved Cz49W4la.js');

  // 2. Update public/_nuxt/BEONk6xx.js
  console.log('Updating BEONk6xx.js...');
  let beonCode = fs.readFileSync('public/_nuxt/BEONk6xx.js', 'utf8');
  beonCode = beonCode.replace(/title:"We are Griflan"/g, 'title:"Kaustubh Gondhali"');
  beonCode = beonCode.replace(
    /Griflan Labs is an experimental, bird’s-eye view of our work, client experiences, and products we create through the Griflan lens\./g,
    'A curated showcase of high-impact visual design, video editing, and motion graphics crafted to captivate.'
  );
  beonCode = beonCode.replace(/\{name:"home",href:"\/",text:"Griflan Labs"\}/g, '{name:"home",href:"/",text:"Kaustubh Gondhali"}');
  beonCode = beonCode.replace(/"aria-label":"Griflan\.com"/g, '"aria-label":"Kaustubh Gondhali"');
  beonCode = beonCode.replace(/id="project-nav-title",class:"sr-only"\},"Griflan Labs"/g, 'id="project-nav-title",class:"sr-only"},"Kaustubh Gondhali"');
  fs.writeFileSync('public/_nuxt/BEONk6xx.js', beonCode, 'utf8');
  console.log('Saved BEONk6xx.js');

  // 3. Update HTML files
  const newOpeningSvgHtml = `<svg data-opening viewBox="0 0 1652 242" fill="currentColor" role="img" aria-label="Kaustubh Gondhali" class="w-150 s:w-300 row-start-2 block h-auto">
  <path d="${titleD}"/>
  <path d="${subD}"/>
</svg>`;

  const htmlFiles = ['griflan_original.html', 'about.html', 'contact.html', 'project.html'];
  htmlFiles.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Replace opening SVG
    const svgRegex = /<svg data-opening[\s\S]*?<\/svg>/i;
    if (svgRegex.test(html)) {
      html = html.replace(svgRegex, newOpeningSvgHtml);
      console.log(`Replaced data-opening SVG in ${file}`);
    }

    // Replace Title & SEO
    html = html.replace(/<title>Griflan Labs<\/title>/gi, '<title>Kaustubh Gondhali – Graphics Designer | Video Editor | Motion Graphics</title>');
    html = html.replace(/content="Griflan Labs"/gi, 'content="Kaustubh Gondhali"');
    html = html.replace(/aria-label="Griflan Labs"/gi, 'aria-label="Kaustubh Gondhali"');

    // Replace Static Text occurrences outside __NUXT_DATA__
    const nuxtDataMarker = '<script id="__NUXT_DATA__"';
    const splitIdx = html.indexOf(nuxtDataMarker);
    if (splitIdx !== -1) {
      let headAndBody = html.slice(0, splitIdx);
      const nuxtDataRest = html.slice(splitIdx);

      headAndBody = headAndBody.replace(/We are Griflan/g, 'Kaustubh Gondhali');
      headAndBody = headAndBody.replace(/aria-label="Griflan\.com"/g, 'aria-label="Kaustubh Gondhali"');

      html = headAndBody + nuxtDataRest;
    }

    fs.writeFileSync(file, html, 'utf8');
    console.log(`Saved ${file}`);
  });

  console.log('Rebrand completed successfully!');
}

main().catch(err => {
  console.error('Error during rebrand:', err);
  process.exit(1);
});
