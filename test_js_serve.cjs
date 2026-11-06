const http = require('http');

http.get('http://localhost:3000/_nuxt/Cz49W4la.js', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Contains aria-label="Kaustubh Gondhali":', data.includes('aria-label":"Kaustubh Gondhali"'));
    console.log('Contains aria-label="Griflan Labs":', data.includes('aria-label":"Griflan Labs"'));
    console.log('Contains jo="Kaustubh Gondhali":', data.includes('jo="Kaustubh Gondhali"'));
  });
});
