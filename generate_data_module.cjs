const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const dataDir = path.join(srcDir, 'data');
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir);
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const raw = JSON.parse(fs.readFileSync('site_data.json', 'utf8'));

// Format copy
const aboutParagraphs = [
  "Griflan Labs is an experimental, bird’s-eye view of our work, a fresh way to show the range of brands, digital experiences, and products we create through the Griflan lens.",
  "We work with companies that have something worth building, from emerging startups to established brands entering a new chapter. Every brand deserves its own story.",
  "For a closer look at each brand, visit www.griflan.com."
];

const contactText = [
  "Schedule an introductory call to discuss your next idea and learn more about how we can help with your project.",
  "To learn more about Griflan visit us at www.griflan.com."
];

const processed = {
  site: {
    title: "Griflan Labs",
    description: "A strategy-led design studio specializing in laying down the awesome sauce.",
    tagline: "Crafting Brands That Hit Hard",
    subtitle: "Branding + Web + Motion"
  },
  news: raw.data.news || [
    "TinyFish raises $47 million in ICONIQ-led round",
    "CogNito acquired by Plaid for $250M",
    "Now booking projects for the new year",
    "Everest launches with $140M in funding",
    "Suzy Welch’s Values Bridge hits 65K users"
  ],
  services: raw.data.services || [],
  copy: {
    about: {
      title: "We are Griflan",
      paragraphs: aboutParagraphs
    },
    contact: {
      title: "Big idea? You know where to find us.",
      paragraphs: contactText
    },
    links: raw.data.copy?.links || [
      { label: "856.816.6159", external: "tel:856.816.6159" },
      { label: "610.952.1398", external: "tel:610.952.1398" },
      { label: "hello@griflan.com", external: "mailto:hello@griflan.com" },
      { label: "Instagram", external: "https://www.instagram.com/griflan/" },
      { label: "Linkedin", external: "https://www.linkedin.com/company/griflan-design-inc/" },
      { label: "X", external: "https://x.com/Griflan" }
    ]
  },
  works: raw.data.works.map((w, index) => ({
    id: w.id || `work-${index}`,
    slug: w.slug,
    title: w.title,
    summary: w.summary || "",
    quote: w.quote || null,
    industry: w.industry ? (typeof w.industry === 'string' ? w.industry : w.industry.title) : "Design & Tech",
    services: Array.isArray(w.services) ? w.services.map(s => typeof s === 'string' ? s : s.title) : [],
    src: w.src,
    card: w.card || w.src,
    width: w.width || 1920,
    height: w.height || 1080,
    alt: w.alt || w.title,
    video: w.video || null,
    hls: w.hls || null,
    gallery: (w.gallery || []).map(g => ({
      src: g.src,
      card: g.card || g.src,
      width: g.width || 1920,
      height: g.height || 1080,
      alt: g.alt || "",
      video: g.video || null,
      hls: g.hls || null
    }))
  }))
};

const fileContent = `export const PORTFOLIO_DATA = ${JSON.stringify(processed, null, 2)};\n`;
fs.writeFileSync(path.join(dataDir, 'portfolioData.js'), fileContent, 'utf8');
console.log('Generated src/data/portfolioData.js with', processed.works.length, 'projects!');
