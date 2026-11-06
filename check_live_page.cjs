const http = require('http');

http.get('http://localhost:3000/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Has 3 titles in html:', data.includes('Graphics Designer | Video Editor | Motion Graphics'));
    console.log('Has quote in html:', data.includes('Stories in motion, designed to stick.'));
    console.log('Has nav-draw-btn:', data.includes('nav-draw-btn'));
  });
});
