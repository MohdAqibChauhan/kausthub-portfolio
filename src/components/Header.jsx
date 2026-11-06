import React from 'react';
import Mascot from './Mascot';

export default function Header({ 
  currentPath, 
  onNavigate, 
  onResetView, 
  aboutOpen, 
  contactOpen,
  onToggleAbout, 
  onToggleContact 
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[var(--head,5.5rem)] s:h-180 bg-black pointer-events-auto border-b border-line/50 select-none">
      {/* Background fill */}
      <div className="absolute inset-0 z-10 bg-black" />

      {/* Exact Architectural Grid Lines matching labs.griflan.com */}
      <div className="hidden s:block pointer-events-none absolute inset-0 z-20">
        {/* Vertical column lines */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-line/40" style={{ left: '9.091%' }} />
        <div className="absolute top-0 bottom-0 w-[1px] bg-line/40" style={{ left: '36.364%' }} />
        <div className="absolute top-0 bottom-0 w-[1px] bg-line/40" style={{ left: '63.636%' }} />
        <div className="absolute top-0 bottom-0 w-[1px] bg-line/40" style={{ left: '90.909%' }} />

        {/* Horizontal row dividers */}
        <div className="absolute left-0 right-0 h-[1px] bg-line/40" style={{ top: '33.333%' }} />
        <div className="absolute left-0 right-0 h-[1px] bg-line/20" style={{ top: '66.667%' }} />

        {/* Outer subtle guide markers */}
        <div className="absolute top-0 w-[1px] h-[33.333%] bg-line/20" style={{ left: '4.545%' }} />
        <div className="absolute top-0 w-[1px] h-[33.333%] bg-line/20" style={{ left: '95.455%' }} />
      </div>

      {/* Grid Content */}
      <div className="relative z-30 grid h-full grid-cols-6 grid-rows-1 items-center px-15 s:grid-cols-11 s:grid-rows-3 s:px-0">
        
        {/* ROW 1: Col 1 - HOME / ABOUT */}
        <div className="col-span-3 col-start-1 row-start-1 flex items-center gap-x-12 s:col-span-1 s:col-start-1 s:row-start-1 s:h-full s:items-center s:justify-center s:gap-x-16">
          <button 
            type="button" 
            onClick={() => {
              onResetView?.();
              onNavigate('/');
            }}
            className="cursor-pointer transition-colors duration-200 hover:text-accent focus:outline-none"
            aria-label="Home"
          >
            <span className="font-mono text-[1.1rem] s:text-[1.2rem] font-medium tracking-wider text-ink uppercase">
              HOME
            </span>
          </button>
          
          <button 
            type="button" 
            onClick={onToggleAbout}
            className="cursor-pointer transition-colors duration-200 hover:text-accent focus:outline-none"
            aria-label="About"
          >
            <span className={`font-mono text-[1.1rem] s:text-[1.2rem] font-medium tracking-wider uppercase transition-colors ${
              aboutOpen ? 'text-accent font-semibold' : 'text-ink'
            }`}>
              {aboutOpen ? 'CLOSE' : 'ABOUT'}
            </span>
          </button>
        </div>

        {/* ROW 1: Col 11 - INSTA / LINK */}
        <div className="col-span-3 col-start-4 row-start-1 flex items-center justify-end gap-x-12 s:col-start-11 s:col-span-1 s:row-start-1 s:h-full s:items-center s:justify-center s:gap-x-16">
          <a 
            href="https://www.instagram.com/griflan/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-[1.1rem] s:text-[1.2rem] font-medium tracking-wider text-ink hover:text-accent uppercase transition-colors"
            aria-label="Instagram"
          >
            INSTA
          </a>
          <a 
            href="https://www.linkedin.com/company/griflan-design-inc/home/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-[1.1rem] s:text-[1.2rem] font-medium tracking-wider text-ink hover:text-accent uppercase transition-colors"
            aria-label="LinkedIn"
          >
            LINK
          </a>
        </div>

        {/* ROW 2 & 3: Col 1 - ANIMATED FLAME MASCOT (Character with shoes/gloves) */}
        <div className="hidden s:flex col-start-1 col-span-1 row-start-2 row-span-2 items-center justify-center p-2 overflow-hidden">
          <Mascot />
        </div>

        {/* ROW 2: Col 2-4 - SUBTITLE: Branding + Web + Motion */}
        <div className="hidden s:flex col-start-2 col-span-3 row-start-2 items-center justify-center">
          <p className="font-serif text-ink tracking-wide text-[1.8rem] md:text-[2.2rem] opacity-95 select-none">
            Branding + Web + Motion
          </p>
        </div>

        {/* ROW 2: Col 5-7 - LOGO: Griflan Labs */}
        <div className="col-span-6 col-start-1 row-start-1 s:col-span-3 s:col-start-5 s:row-start-2 flex items-center justify-center">
          <button 
            type="button"
            onClick={() => {
              onResetView?.();
              onNavigate('/');
            }}
            className="group cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center"
            aria-label="Griflan Labs Home"
          >
            <img 
              src="/logo.svg" 
              alt="Griflan Labs" 
              className="w-130 s:w-240 md:w-290 h-auto filter transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,253,219,0.35)]"
            />
          </button>
        </div>

        {/* ROW 2: Col 8-10 - TAGLINE: Crafting Brands That Hit Hard */}
        <div className="hidden s:flex col-start-8 col-span-3 row-start-2 items-center justify-center">
          <p className="font-serif text-ink tracking-wide text-[1.8rem] md:text-[2.2rem] opacity-95 select-none">
            Crafting Brands That Hit Hard
          </p>
        </div>

        {/* ROW 2 & 3: Col 11 - START A PROJECT BUTTON (Rectangular red block fitting the cell) */}
        <div className="hidden s:flex col-start-11 col-span-1 row-start-2 row-span-2 items-center justify-center p-3">
          <button 
            type="button" 
            onClick={onToggleContact}
            className={`w-full h-full max-h-[85px] rounded-10 flex flex-col items-center justify-center text-center font-serif text-[1.7rem] md:text-[2.0rem] leading-tight transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl ${
              contactOpen 
                ? 'bg-ink text-black font-semibold' 
                : 'bg-accent text-white hover:bg-[#ff4f48]'
            }`}
            aria-label="Start A Project"
          >
            <span>Start A</span>
            <span>Project</span>
          </button>
        </div>

      </div>

      {/* Mobile Start Project Floating / Bar */}
      <div className="s:hidden flex items-center justify-between px-15 pb-8">
        <button 
          type="button" 
          onClick={onToggleContact}
          className="w-full py-8 rounded-8 bg-accent text-white font-serif text-[1.5rem] tracking-wide"
        >
          {contactOpen ? 'Close' : 'Start A Project'}
        </button>
      </div>
    </header>
  );
}
