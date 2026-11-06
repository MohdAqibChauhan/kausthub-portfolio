import React from 'react';

export default function NewsTicker({ news = [] }) {
  const tickerItems = news.length > 0 ? news : [
    "TinyFish raises $47 million in ICONIQ-led round",
    "CogNito acquired by Plaid for $250M",
    "Now booking projects for the new year",
    "Everest launches with $140M in funding",
    "Suzy Welch’s Values Bridge hits 65K users"
  ];

  return (
    <div className="fixed bottom-25 left-1/2 -translate-x-1/2 z-40 pointer-events-auto select-none max-w-[92vw] s:max-w-2xl">
      {/* Sleek Floating Glassmorphic Pill Capsule matching labs.griflan.com */}
      <div className="relative px-25 py-9 rounded-full bg-black/65 border border-white/20 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden flex items-center">
        
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/80 to-transparent z-10" />

        {/* Marquee Scroller */}
        <div className="overflow-hidden w-full">
          <div className="animate-ticker flex items-center whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 px-15">
                <span className="font-mono text-[1.1rem] s:text-[1.2rem] text-ink/90 uppercase tracking-widest font-medium">
                  {item}
                </span>
                <span className="text-accent text-[1.2rem] select-none">•</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
