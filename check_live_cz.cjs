const http = require('http');

http.get('http://localhost:3000/_nuxt/Cz49W4la.js', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Cz49W4la has 3 titles:', data.includes('Graphics Designer | Video Editor | Motion Graphics'));
    console.log('Cz49W4la has quote:', data.includes('Stories in motion, designed to stick.'));
  });
});
