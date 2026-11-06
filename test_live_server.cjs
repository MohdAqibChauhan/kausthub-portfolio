const http = require('http');

http.get('http://localhost:3000/', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const m = data.match(/<svg data-opening[\s\S]*?<\/svg>/i);
    if (m) {
      console.log('data-opening found! Length:', m[0].length);
      console.log('Has aria-label Kaustubh Gondhali:', m[0].includes('aria-label="Kaustubh Gondhali"'));
      console.log('Has path count:', (m[0].match(/<path/g) || []).length);
      console.log('Contains Griflan:', m[0].includes('Griflan'));
    } else {
      console.log('data-opening NOT found');
    }
  });
});
