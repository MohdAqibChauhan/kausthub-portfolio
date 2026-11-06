const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.riv': 'application/octet-stream',
  '.wasm': 'application/wasm',
  '.gz': 'application/octet-stream'
};

function injectScripts(html) {
  let res = html;
  res = res.replace(/<title>.*?<\/title>/i, '<title>Kaustubh Gondhali – Graphics Designer | Video Editor | Motion Graphics</title>');
  const scripts = `
    <script src="/calendar-widget.js"></script>
    <script src="/kaustubh-branding.js"></script>
  `;
  if (!res.includes('kaustubh-branding.js')) {
    res = res.replace('</body>', `${scripts}</body>`);
  }
  return res;
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // 1. Static files in public/
  let filePath = path.join(PUBLIC_DIR, pathname);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', mime);
    if (ext === '.wasm') res.setHeader('Content-Type', 'application/wasm');
    return fs.createReadStream(filePath).pipe(res);
  }

  // 2. HTML Routes
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Interactive Drawing Playground Page
  if (pathname === '/draw' && fs.existsSync(path.join(__dirname, 'draw.html'))) {
    return fs.createReadStream(path.join(__dirname, 'draw.html')).pipe(res);
  }

  let targetHtmlFile = 'griflan_original.html';
  if (pathname === '/about' && fs.existsSync(path.join(__dirname, 'about.html'))) {
    targetHtmlFile = 'about.html';
  } else if (pathname === '/contact' && fs.existsSync(path.join(__dirname, 'contact.html'))) {
    targetHtmlFile = 'contact.html';
  } else if (pathname.startsWith('/projects/') && fs.existsSync(path.join(__dirname, 'project.html'))) {
    targetHtmlFile = 'project.html';
  }

  const fullPath = path.join(__dirname, targetHtmlFile);
  if (fs.existsSync(fullPath)) {
    const rawHtml = fs.readFileSync(fullPath, 'utf8');
    const enriched = injectScripts(rawHtml);
    return res.end(enriched);
  }

  res.statusCode = 404;
  res.end('Not found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/ (including /draw)`);
});
