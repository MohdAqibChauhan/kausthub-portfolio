const http = require('http');

const routes = ['/', '/about', '/contact', '/draw'];

async function checkRoute(route) {
  return new Promise(resolve => {
    http.get(`http://localhost:3000${route}`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          route,
          status: res.statusCode,
          length: data.length,
          hasKaustubh: data.includes('Kaustubh Gondhali')
        });
      });
    }).on('error', err => resolve({ route, error: err.message }));
  });
}

async function testAll() {
  for (const r of routes) {
    const res = await checkRoute(r);
    console.log(res);
  }
}

testAll();
