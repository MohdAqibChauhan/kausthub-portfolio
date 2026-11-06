const fs = require('fs');
const path = require('path');

const fontPath = path.join(__dirname, 'public', 'fonts', 'TANMEMORIES-Regular.woff2');
const fontBuf = fs.readFileSync(fontPath);
const fontBase64 = fontBuf.toString('base64');

// High fashion, editorial logo layout
// "KAUSTUBH GONDHALI"
// Subtitle: "GRAPHICS DESIGNER | VIDEO EDITOR | MOTION GRAPHICS"
const svg = `<svg width="1652" height="242" viewBox="0 0 1652 242" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: 'TAN MEMORIES';
        src: url('data:font/woff2;base64,${fontBase64}') format('woff2');
        font-weight: normal;
        font-style: normal;
      }
      .brand-title {
        font-family: 'TAN MEMORIES', serif;
        font-size: 104px;
        fill: #fffddb;
        letter-spacing: 0.05em;
        text-anchor: middle;
        text-transform: uppercase;
      }
      .brand-role {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 20px;
        font-weight: 600;
        fill: #ff3831;
        letter-spacing: 0.22em;
        text-anchor: middle;
        text-transform: uppercase;
      }
    </style>
  </defs>

  <!-- Main Name: Kaustubh Gondhali -->
  <text x="826" y="128" class="brand-title">KAUSTUBH GONDHALI</text>

  <!-- Job Title: Graphics Designer | Video Editor | Motion Graphics -->
  <text x="826" y="188" class="brand-role">GRAPHICS DESIGNER  |  VIDEO EDITOR  |  MOTION GRAPHICS</text>
</svg>`;

fs.writeFileSync(path.join(__dirname, 'public', 'logo.svg'), svg, 'utf8');
console.log('Successfully created embedded logo.svg with TAN MEMORIES base64 font!');
