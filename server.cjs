const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const UPLOADS_DIR = path.join(PUBLIC_DIR, 'uploads');
const DATA_FILE = path.join(__dirname, 'data', 'cms-projects.json');

fs.mkdirSync(UPLOADS_DIR, { recursive: true });
fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });

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
  '.gif': 'image/gif',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.riv': 'application/octet-stream',
  '.wasm': 'application/wasm',
  '.gz': 'application/octet-stream'
};

const CATEGORY_MAP = {
  'Photos': { slug: 'photos', title: 'Photos' },
  'Videos': { slug: 'videos', title: 'Videos' },
  'Motion Graphics 2D': { slug: 'motion-graphics-2d', title: 'Motion Graphics 2D' }
};

function readCmsData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (err) {
    console.error('Error reading CMS data:', err);
  }
  return {
    updatedAt: new Date().toISOString(),
    categories: Object.values(CATEGORY_MAP),
    projects: []
  };
}

function writeCmsData(data) {
  data.updatedAt = new Date().toISOString();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

function injectScripts(html) {
  let res = html;
  res = res.replace(/<title>.*?<\/title>/i, '<title>Kaustubh Gondhali – Graphics Designer | Video Editor | Motion Graphics</title>');

  // Inject live CMS projects into window.__CMS_PROJECTS__ before Nuxt boots
  const cmsData = readCmsData();
  const cmsScript = `<script>window.__CMS_PROJECTS__ = ${JSON.stringify(cmsData.projects || [])};</script>`;
  if (res.includes('</head>')) {
    res = res.replace('</head>', `${cmsScript}</head>`);
  } else {
    res = cmsScript + res;
  }

  const scripts = `
    <script src="/calendar-widget.js"></script>
    <script src="/kaustubh-branding.js"></script>
  `;
  if (!res.includes('kaustubh-branding.js')) {
    res = res.replace('</body>', `${scripts}</body>`);
  }
  return res;
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-File-Name');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  // ==========================================================================
  // 1. NUXT APP MANIFEST META HANDLER (Prevents console error on hydration)
  // ==========================================================================
  if (pathname.startsWith('/_nuxt/builds/meta/') && pathname.endsWith('.json')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({
      id: path.basename(pathname, '.json'),
      timestamp: Date.now(),
      matcher: { static: {}, wildcard: {}, dynamic: {} },
      prerendered: []
    }));
  }

  // ==========================================================================
  // 2. ADMIN CMS API ENDPOINTS
  // ==========================================================================
  if (pathname === '/api/projects' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify(readCmsData()));
  }

  if (pathname === '/api/upload' && req.method === 'POST') {
    try {
      const rawName = decodeURIComponent(req.headers['x-file-name'] || `upload-${Date.now()}.bin`);
      const ext = path.extname(rawName).toLowerCase() || '.jpg';
      const base = path.basename(rawName, ext).toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-|-$/g, '') || 'media';
      const filename = `${Date.now()}-${base}${ext}`;
      const destPath = path.join(UPLOADS_DIR, filename);

      const writeStream = fs.createWriteStream(destPath);
      req.pipe(writeStream);

      writeStream.on('finish', () => {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: true, url: `/uploads/${filename}`, filename }));
      });

      writeStream.on('error', (err) => {
        console.error('Upload write error:', err);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Failed to save uploaded file' }));
      });
      return;
    } catch (err) {
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: err.message }));
    }
  }

  if (pathname === '/api/projects' && req.method === 'POST') {
    try {
      const body = await readJsonBody(req);
      const cmsData = readCmsData();
      const catTitle = CATEGORY_MAP[body.category] ? body.category : 'Photos';
      const catObj = CATEGORY_MAP[catTitle];

      const slug = (body.slug || body.title || `project-${Date.now()}`)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      const servicesArr = Array.isArray(body.services)
        ? body.services.map((s, idx) => typeof s === 'string'
            ? { id: `srv-${Date.now()}-${idx}`, slug: s.toLowerCase().replace(/[^a-z0-9]+/g, '-'), title: s }
            : s)
        : [{ id: `srv-${Date.now()}-0`, slug: catObj.slug, title: catObj.title }];

      const galleryArr = Array.isArray(body.gallery) && body.gallery.length
        ? body.gallery.map(g => ({
            src: g.src || body.src,
            card: g.card || g.src || body.src,
            width: Number(g.width) || Number(body.width) || 1920,
            height: Number(g.height) || Number(body.height) || 1080,
            alt: g.alt || body.title || '',
            video: g.video || null,
            hls: g.hls || null
          }))
        : [{
            src: body.src,
            card: body.card || body.src,
            width: Number(body.width) || 1920,
            height: Number(body.height) || 1080,
            alt: body.title || '',
            video: body.video || null,
            hls: null
          }];

      const projectItem = {
        id: body.id || `proj-${Date.now()}`,
        slug,
        title: body.title || 'Untitled Project',
        category: catObj.title,
        industry: {
          slug: catObj.slug,
          title: catObj.title
        },
        summary: body.summary || '',
        quote: body.quote || null,
        services: servicesArr,
        src: body.src,
        card: body.card || body.src,
        width: Number(body.width) || 1920,
        height: Number(body.height) || 1080,
        alt: body.alt || body.title || '',
        video: body.video || null,
        hls: body.hls || null,
        gallery: galleryArr
      };

      const existingIdx = cmsData.projects.findIndex(p => p.id === projectItem.id);
      if (existingIdx !== -1) {
        cmsData.projects[existingIdx] = projectItem;
      } else {
        // Add new project at the very top so it's #1 on the 3D Globe
        cmsData.projects.unshift(projectItem);
      }

      writeCmsData(cmsData);
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      return res.end(JSON.stringify({ ok: true, project: projectItem }));
    } catch (err) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ error: err.message }));
    }
  }

  if (pathname === '/api/projects/top' && req.method === 'POST') {
    try {
      const { id } = await readJsonBody(req);
      const cmsData = readCmsData();
      const idx = cmsData.projects.findIndex(p => p.id === id);
      if (idx > 0) {
        const [item] = cmsData.projects.splice(idx, 1);
        cmsData.projects.unshift(item);
        writeCmsData(cmsData);
      }
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      return res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ error: err.message }));
    }
  }

  if (pathname.startsWith('/api/projects/') && req.method === 'DELETE') {
    const id = pathname.slice('/api/projects/'.length);
    const cmsData = readCmsData();
    cmsData.projects = cmsData.projects.filter(p => p.id !== id);
    writeCmsData(cmsData);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({ ok: true }));
  }

  // ==========================================================================
  // 3. STATIC FILES IN PUBLIC/
  // ==========================================================================
  let filePath = path.join(PUBLIC_DIR, pathname);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', mime);
    if (ext === '.wasm') res.setHeader('Content-Type', 'application/wasm');
    return fs.createReadStream(filePath).pipe(res);
  }

  // ==========================================================================
  // 4. HTML ROUTES (/admin, /draw, /, /about, /contact, /projects/*)
  // ==========================================================================
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (pathname === '/admin' && fs.existsSync(path.join(__dirname, 'admin.html'))) {
    return fs.createReadStream(path.join(__dirname, 'admin.html')).pipe(res);
  }

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
  console.log(`Server running at http://localhost:${PORT}/ (including /draw and /admin)`);
});
