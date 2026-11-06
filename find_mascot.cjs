const fs = require('fs');

const files = ['entry.js', 'beon.js', 'cm5.js', 'dttm.js', 'nuxt_rendered_body.html'];

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const content = fs.readFileSync(f, 'utf8');
  console.log(`Checking ${f}...`);

  // search for mascot, flame, rive, .riv, fire, character
  const matches = [...content.matchAll(/(?:mascot|flame|fire|character|rive|\.riv|canvas)[a-zA-Z0-9_/.-]*/gi)].map(m => m[0]);
  if (matches.length > 0) {
    console.log(`Matches in ${f}:`, [...new Set(matches)].slice(0, 20));
  }
}
