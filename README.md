# kausthub-portfolio

Interactive 3D WebGPU & Motion Design portfolio for **Kaustubh Gondhali** (*Graphics Designer | Video Editor | Motion Graphics*), featuring authentic 3D globe physics, real-time shaders, custom typography, an hourly desk calendar countdown widget, and a dedicated interactive drawing canvas.

---

## ✦ Key Features

1. **3D WebGPU Globe & Dynamic Clusters:**
   - Real-time WebGPU/WebGL shader sphere featuring interactive camera physics, inertia-based trackball navigation, and lighting that responds to pointer movement.
   - Project clusters rendered in MSDF typography with glass-refraction shaders.

2. **Editorial Branding & Custom Typography:**
   - Display typography typeset in **TAN MEMORIES** serif.
   - Vector logo and initial splash screen loading animation custom-crafted for *Kaustubh Gondhali*.
   - Responsive grid navigation with animated mascot integration.

3. **Hourly Desk Calendar Countdown Widget:**
   - Floating real-time tear-off desk calendar widget at the top center.
   - Calculates live hourly countdown until midnight of the next day (e.g., *"11 hours until Saturday"* / *"22 hours until Tuesday"*).
   - Click to toggle exact precision countdown down to seconds (`Xh Ym Zs`).

4. **Interactive "Let It Out" Drawing Canvas (`/draw`):**
   - Freehand interactive drawing playground accessible via the floating bottom-right **`Draw Something →`** pill.
   - Features signature **TAN MEMORIES** editorial typography, custom dot grid background, smooth bezier curve interpolation, multi-color palette swatches, undo/clear history, and 2× high-resolution PNG export.

5. **Fully Mobile-Responsive:**
   - Optimized grid layouts across desktop, tablet, and mobile viewports with zero overlap.

---

## ✦ Tech Stack

- **Graphics & Rendering:** WebGPU, WebGL, Three.js, Multi-Channel Signed Distance Field (MSDF) Fonts, Rive 2D Animation Runtime (WASM).
- **Frontend Engine:** Nuxt 3 SSR client runtime, HTML5 Canvas API.
- **Server:** Node.js HTTP server (`server.cjs`).
- **Typography:** TAN MEMORIES Regular, Helvetica Neue LT Pro, Roboto Mono.

---

## ✦ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A modern browser with WebGPU/WebGL support (Chrome, Edge, Brave, or Safari)

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/MohdAqibChauhan/kausthub-portfolio.git
   cd kausthub-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local server:
   ```bash
   npm start
   # or: node server.cjs
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000/
   ```

---

## ✦ Project Structure

```
├── public/                     # Static assets served by Node server
│   ├── _nuxt/                  # WebGPU shaders, MSDF font binaries, WASM runtimes
│   ├── fonts/                  # TAN MEMORIES and Helvetica Neue WOFF2 webfonts
│   ├── calendar-widget.js      # Live hourly countdown desk calendar widget
│   ├── kaustubh-branding.js    # DOM tree-walker, branding sync & draw invite pill
│   ├── logo.svg                # Vector logo embedding base64 TAN MEMORIES font
│   └── custom-portfolio.json   # Portfolio project metadata and gallery schema
├── draw.html                   # Dedicated interactive drawing playground (/draw)
├── griflan_original.html       # Main homepage 3D WebGPU canvas template
├── about.html                  # About drawer template
├── contact.html                # Contact page template
├── project.html                # Project detail template
├── server.cjs                  # Production-grade Node HTTP server
├── package.json                # Project dependencies and run scripts
└── README.md                   # Documentation
```

---

## ✦ License & Credits

Designed & Developed for **Kaustubh Gondhali**.
Inspired by modern experimental motion design and interactive 3D web experiences.
