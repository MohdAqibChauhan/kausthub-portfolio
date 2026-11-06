const fs = require('fs');

// Generate a crisp, elegant vector SVG wordmark for Kaustubh Gondhali
// Matching the 1652 x 242 aspect ratio of Griflan's header logo
const svgContent = `<svg width="1652" height="242" viewBox="0 0 1652 242" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @font-face {
      font-family: 'TAN MEMORIES';
      src: url('/_nuxt/TANMEMORIES-Regular.DJ3BjhRc.woff2') format('woff2');
    }
    .brand-name {
      font-family: 'TAN MEMORIES', 'Times New Roman', Georgia, serif;
      font-size: 110px;
      fill: #fffddb;
      letter-spacing: 0.04em;
      text-anchor: middle;
      text-transform: uppercase;
    }
    .brand-sub {
      font-family: 'Roboto Mono', monospace;
      font-size: 26px;
      fill: #ff3831;
      letter-spacing: 0.28em;
      text-anchor: middle;
      text-transform: uppercase;
      font-weight: 600;
    }
  </style>
  <!-- Main Name: Kaustubh Gondhali -->
  <text x="826" y="132" class="brand-name">KAUSTUBH GONDHALI</text>
  <!-- Unique Subtitle Tag: Motion • Video • Design -->
  <text x="826" y="196" class="brand-sub">MOTION • VIDEO • DESIGN LABS</text>
</svg>`;

fs.writeFileSync('public/logo.svg', svgContent, 'utf8');
console.log('Created custom vector logo for Kaustubh Gondhali at public/logo.svg');
