(function() {
  let isRunning = false;

  function applyBranding() {
    if (isRunning) return;
    isRunning = true;

    try {
      if (document.title !== "Kaustubh Gondhali – Graphics Designer | Video Editor | Motion Graphics") {
        document.title = "Kaustubh Gondhali – Graphics Designer | Video Editor | Motion Graphics";
      }

      // 1. Remove DRAW button from top header navigation if present
      const navDraw = document.getElementById('nav-draw-btn');
      if (navDraw) {
        navDraw.remove();
      }

      // 2. Safely update text nodes in the DOM (only when text actually differs)
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const val = node.nodeValue;
        if (val.includes('Branding + Web + Motion') || (val.trim() === 'Graphics Designer')) {
          if (node.nodeValue !== 'Graphics Designer | Video Editor | Motion Graphics') {
            node.nodeValue = 'Graphics Designer | Video Editor | Motion Graphics';
          }
        }
        if (val.includes('Crafting Brands That Hit Hard')) {
          const newVal = val.replace('Crafting Brands That Hit Hard', '“Stories in motion, designed to stick.”');
          if (node.nodeValue !== newVal) node.nodeValue = newVal;
        }
        if (val.includes('We are Griflan')) {
          const newVal = val.replace('We are Griflan', 'Kaustubh Gondhali');
          if (node.nodeValue !== newVal) node.nodeValue = newVal;
        }
      }

      // 3. Ensure element styling for title cell
      const pElements = document.querySelectorAll('p[data-gl="text"]');
      pElements.forEach(p => {
        if (p.textContent.includes('Video Editor') || p.textContent.includes('Motion Graphics') || p.textContent.includes('Branding + Web + Motion')) {
          if (p.textContent !== 'Graphics Designer | Video Editor | Motion Graphics') {
            p.textContent = 'Graphics Designer | Video Editor | Motion Graphics';
          }
          if (p.style.whiteSpace !== 'nowrap') {
            p.style.fontSize = 'clamp(1.15rem, 1.1vw, 1.55rem)';
            p.style.whiteSpace = 'nowrap';
          }
        }
      });

      // 4. Update About drawer categories: Photos, Videos, Motion Graphics 2D
      const catLabels = document.querySelectorAll('.type-label.text-accent, p.type-label, [data-row].type-label');
      catLabels.forEach(el => {
        const txt = el.textContent.trim();
        if ((txt === 'Branding' || txt === 'BRANDING') && el.textContent !== 'Photos') {
          el.textContent = 'Photos';
        } else if ((txt === 'Digital' || txt === 'DIGITAL') && el.textContent !== 'Videos') {
          el.textContent = 'Videos';
        } else if ((txt === 'Motion' || txt === 'MOTION') && el.textContent !== 'Motion Graphics 2D') {
          el.textContent = 'Motion Graphics 2D';
        }
      });

      // 5. Signature Flame & Vermilion Floating Invite Pill
      if (!document.getElementById('floating-draw-invite')) {
        const invite = document.createElement('a');
        invite.id = 'floating-draw-invite';
        invite.href = '/draw';
        invite.title = 'Click to draw on the interactive canvas!';

        if (!document.getElementById('floating-draw-style')) {
          const style = document.createElement('style');
          style.id = 'floating-draw-style';
          style.textContent = `
            #floating-draw-invite {
              position: fixed;
              bottom: 25px;
              right: 25px;
              z-index: 45;
              pointer-events: auto;
              display: inline-flex;
              align-items: center;
              gap: 12px;
              padding: 11px 20px;
              border-radius: 9999px;
              background: rgba(22, 20, 20, 0.88);
              border: 1px solid rgba(255, 56, 49, 0.35);
              box-shadow: 0 0 20px rgba(255, 56, 49, 0.12), 0 10px 30px rgba(0, 0, 0, 0.7);
              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);
              text-decoration: none;
              user-select: none;
              cursor: pointer;
              transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
            }
            #floating-draw-invite:hover {
              transform: translateY(-2px) scale(1.02);
              background: rgba(28, 25, 25, 0.96);
              border-color: rgba(255, 56, 49, 0.7);
              box-shadow: 0 0 25px rgba(255, 56, 49, 0.3), 0 14px 40px rgba(0, 0, 0, 0.85);
            }
            .fdi-dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #ff3831;
              box-shadow: 0 0 8px #ff3831, 0 0 16px rgba(255, 56, 49, 0.5);
              flex-shrink: 0;
              animation: fdi-pulse 2.2s infinite ease-in-out;
            }
            @keyframes fdi-pulse {
              0%, 100% {
                opacity: 0.85;
                transform: scale(1);
                box-shadow: 0 0 8px #ff3831, 0 0 14px rgba(255, 56, 49, 0.4);
              }
              50% {
                opacity: 1;
                transform: scale(1.25);
                box-shadow: 0 0 12px #ff3831, 0 0 22px rgba(255, 56, 49, 0.85);
              }
            }
            .fdi-content {
              display: flex;
              flex-direction: column;
              line-height: 1.25;
              text-align: left;
            }
            .fdi-main {
              font-family: 'Roboto Mono', monospace;
              font-size: 12px;
              font-weight: 700;
              color: #fffddb;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              display: flex;
              align-items: center;
              gap: 5px;
            }
            .fdi-arrow {
              color: #ff3831;
              font-weight: 900;
              transition: transform 0.22s ease;
            }
            #floating-draw-invite:hover .fdi-arrow {
              transform: translateX(3px);
            }
            .fdi-sub {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              font-size: 11px;
              color: #b5b39e;
              letter-spacing: 0.02em;
            }
            @media (max-width: 650px) {
              #floating-draw-invite {
                bottom: 80px;
                right: 20px;
                padding: 8px 15px;
              }
            }
          `;
          document.head.appendChild(style);
        }

        invite.innerHTML = `
          <div class="fdi-dot"></div>
          <div class="fdi-content">
            <span class="fdi-main">Draw Something <span class="fdi-arrow">→</span></span>
            <span class="fdi-sub">Freehand Canvas • Let It Out</span>
          </div>
        `;

        document.body.appendChild(invite);
      }
    } catch (err) {
      console.warn('Branding apply error:', err);
    } finally {
      isRunning = false;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBranding);
  } else {
    applyBranding();
  }
  setTimeout(applyBranding, 300);
  setTimeout(applyBranding, 1200);

  // Safe user-interaction trigger (e.g. clicking ABOUT or navigating) without infinite mutation loops
  document.addEventListener('click', (e) => {
    if (e.target && (e.target.closest('button') || e.target.closest('a'))) {
      setTimeout(applyBranding, 50);
      setTimeout(applyBranding, 400);
    }
  }, { passive: true });
})();
