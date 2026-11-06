(function() {
  function getCountdownData() {
    const now = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const currentDayIndex = now.getDay();
    const nextDayIndex = (currentDayIndex + 1) % 7;
    const nextDayName = dayNames[nextDayIndex];
    const currentDayLetter = dayLetters[currentDayIndex];

    // Midnight of tomorrow (00:00:00)
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diffMs = Math.max(0, tomorrow.getTime() - now.getTime());
    const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    const hourText = totalHours === 1 ? '1 hour' : `${totalHours} hours`;

    return {
      totalHours,
      minutes,
      seconds,
      nextDayName,
      currentDayLetter,
      shortText: `${hourText} until ${nextDayName}`,
      exactText: `${totalHours}h ${minutes}m ${seconds}s until ${nextDayName}`
    };
  }

  function initWidget() {
    if (document.getElementById('griflan-day-countdown-widget')) return;

    const container = document.createElement('div');
    container.id = 'griflan-day-countdown-widget';
    container.setAttribute('role', 'status');
    container.setAttribute('aria-live', 'polite');

    const style = document.createElement('style');
    style.textContent = `
      #griflan-day-countdown-widget {
        position: fixed;
        top: 14px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 6px 14px;
        border-radius: 9999px;
        background: rgba(24, 22, 22, 0.82);
        border: 1px solid rgba(255, 253, 219, 0.18);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        user-select: none;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
      #griflan-day-countdown-widget:hover {
        background: rgba(32, 29, 29, 0.95);
        border-color: rgba(255, 56, 49, 0.45);
        transform: translateX(-50%) translateY(-1px);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.65);
      }
      .gdc-icon-wrapper {
        position: relative;
        width: 22px;
        height: 22px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .gdc-text {
        font-size: 13px;
        font-weight: 500;
        color: #fffddb;
        letter-spacing: -0.01em;
        white-space: nowrap;
      }
      /* Perfect mobile responsiveness - floats smoothly below mobile 80px header without overlap */
      @media (max-width: 650px) {
        #griflan-day-countdown-widget {
          top: 86px;
          padding: 5px 12px;
          gap: 7px;
          background: rgba(24, 22, 22, 0.9);
          border-color: rgba(255, 253, 219, 0.2);
        }
        .gdc-icon-wrapper {
          width: 19px;
          height: 19px;
        }
        .gdc-text {
          font-size: 11.5px;
        }
      }
    `;
    document.head.appendChild(style);

    let showExact = false;

    function render() {
      const data = getCountdownData();

      const svgIcon = `
        <svg viewBox="0 0 32 32" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 26H25V28C25 28.5523 24.5523 29 24 29H8C7.44772 29 7 28.5523 7 28V26Z" fill="#111111"/>
          <path d="M5 24H27V26C27 26.5523 26.5523 27 26 27H6C5.44772 27 5 26.5523 5 26V24Z" fill="#2d2b28"/>
          <rect x="4" y="6" width="24" height="19" rx="2.5" fill="#FFFBF0" stroke="#181616" stroke-width="2"/>
          <path d="M9 4V7M16 4V7M23 4V7" stroke="#181616" stroke-width="2" stroke-linecap="round"/>
          <path d="M22 25L28 19V23.5C28 24.3284 27.3284 25 26.5 25H22Z" fill="#E8DFD0"/>
          <path d="M22 25H26.5C27.3284 25 28 24.3284 28 23.5V19L22 25Z" stroke="#181616" stroke-width="1.5" stroke-linejoin="round"/>
          <text x="15" y="19.5" text-anchor="middle" font-family="'Times New Roman', Times, serif" font-style="italic" font-weight="bold" font-size="13" fill="#181616">
            ${data.currentDayLetter}
          </text>
        </svg>
      `;

      container.innerHTML = `
        <div class="gdc-icon-wrapper" title="Today: ${data.currentDayLetter}">
          ${svgIcon}
        </div>
        <span class="gdc-text">
          ${showExact ? data.exactText : data.shortText}
        </span>
      `;
    }

    container.addEventListener('click', () => {
      showExact = !showExact;
      render();
    });

    document.body.appendChild(container);
    render();

    setInterval(render, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();
