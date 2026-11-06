const fs = require('fs');
const { generate } = require('./build_opening_paths.cjs');

async function main() {
  const { titleD, subD } = await generate();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1652 242" fill="currentColor" width="100%" height="auto" style="background:#181616; color:#fffddb; display:block;">
  <path d="${titleD}"/>
  <path d="${subD}"/>
</svg>`;
  fs.writeFileSync('public/test_opening.svg', svg, 'utf8');
  console.log('Saved public/test_opening.svg');
}
main();
