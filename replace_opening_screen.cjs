const fs = require('fs');

const fontPath = 'public/fonts/TANMEMORIES-Regular.woff2';
const fontBase64 = fs.readFileSync(fontPath).toString('base64');

const newOpeningSvg = `<svg data-opening viewBox="0 0 1652 242" fill="currentColor" role="img" aria-label="Kaustubh Gondhali" class="w-150 s:w-300 row-start-2 block h-auto">
  <defs>
    <style>
      @font-face {
        font-family: 'TAN MEMORIES';
        src: url('data:font/woff2;base64,${fontBase64}') format('woff2');
      }
      .opening-name {
        font-family: 'TAN MEMORIES', serif;
        font-size: 110px;
        letter-spacing: 0.05em;
        text-anchor: middle;
        text-transform: uppercase;
        fill: #fffddb;
      }
      .opening-sub {
        font-family: 'Roboto Mono', monospace;
        font-size: 26px;
        letter-spacing: 0.22em;
        text-anchor: middle;
        text-transform: uppercase;
        fill: #ff3831;
        font-weight: 600;
      }
    </style>
  </defs>
  <text x="826" y="130" class="opening-name">KAUSTUBH GONDHALI</text>
  <text x="826" y="195" class="opening-sub">GRAPHICS DESIGNER | VIDEO EDITOR | MOTION GRAPHICS</text>
</svg>`;

const files = ['griflan_original.html', 'about.html', 'contact.html', 'project.html'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  // Replace data-opening SVG
  html = html.replace(/<svg data-opening[\s\S]*?<\/svg>/i, newOpeningSvg);

  // Replace title & metadata
  html = html.replace(/<title>.*?<\/title>/gi, '<title>Kaustubh Gondhali – Graphics Designer | Video Editor | Motion Graphics</title>');
  html = html.replace(/content="Griflan Labs"/gi, 'content="Kaustubh Gondhali"');
  html = html.replace(/aria-label="Griflan Labs"/gi, 'aria-label="Kaustubh Gondhali"');

  fs.writeFileSync(file, html, 'utf8');
  console.log(`Updated loading screen in ${file}`);
});
