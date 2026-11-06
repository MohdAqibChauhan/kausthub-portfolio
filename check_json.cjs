const fs = require('fs');
const html = fs.readFileSync('griflan_original.html', 'utf8');

const m = html.match(/<script[^>]*id="__NUXT_DATA__"[^>]*>([\s\S]*?)<\/script>/i);
if (m) {
  try {
    JSON.parse(m[1]);
    console.log('NUXT_DATA JSON is valid!');
  } catch (e) {
    console.error('NUXT_DATA JSON IS BROKEN:', e.message);
  }
} else {
  console.log('No NUXT_DATA script found!');
}
