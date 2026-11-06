import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, ExternalLink } from 'lucide-react';

export default function ProjectDetailModal({ 
  project, 
  allProjects, 
  onClose, 
  onSelectProject 
}) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  if (!project) return null;

  // Build media list: featured media + gallery items
  const mediaList = [];
  if (project.video || project.src) {
    mediaList.push({
      src: project.src,
      video: project.video,
      alt: project.alt || project.title,
    });
  }
  if (project.gallery && project.gallery.length > 0) {
    project.gallery.forEach(g => {
      // Don't duplicate if identical to first
      if (g.src !== project.src || g.video !== project.video) {
        mediaList.push({
          src: g.src,
          video: g.video,
          alt: g.alt || project.title,
        });
      }
    });
  }

  // Find currentIndex, prev and next projects
  const currentIndex = allProjects.findIndex(p => p.slug === project.slug);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectProject(prevProject);
      if (e.key === 'ArrowRight') onSelectProject(nextProject);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, prevProject, nextProject, onClose, onSelectProject]);

  // Reset active media when project changes
  useEffect(() => {
    setActiveMediaIndex(0);
    setIsPlaying(true);
  }, [project]);

  const currentMedia = mediaList[activeMediaIndex] || mediaList[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 s:p-20 bg-black/85 backdrop-blur-xl animate-fade-in select-none">
      
      {/* Outer Card Container */}
      <div className="relative w-full h-full max-w-7xl max-h-[94vh] bg-[#1a1818] border border-line/60 rounded-none s:rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-20 s:px-30 py-15 border-b border-line/40 bg-black/60 shrink-0">
          <div className="flex items-center gap-4">
            <span className="font-mono text-accent text-[1.2rem] uppercase tracking-wider font-semibold">
              [{`0${currentIndex + 1}`.slice(-2)} / {allProjects.length}]
            </span>
            <span className="px-10 py-2 rounded-full border border-ink/20 font-mono text-[1.1rem] text-ink/80 uppercase">
              {project.industry}
            </span>
          </div>

          {/* Prev / Next & Close */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              className="p-8 rounded-full border border-line/50 hover:border-accent hover:text-accent transition-colors text-ink/70"
              title={`Previous: ${prevProject.title}`}
              aria-label="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="p-8 rounded-full border border-line/50 hover:border-accent hover:text-accent transition-colors text-ink/70"
              title={`Next: ${nextProject.title}`}
              aria-label="Next Project"
            >
              <ChevronRight size={20} />
            </button>
            <div className="w-[1px] h-6 bg-line/40 mx-2" />
            <button
              type="button"
              onClick={onClose}
              className="p-8 rounded-full bg-accent/20 border border-accent/40 text-accent hover:bg-accent hover:text-ink transition-all"
              aria-label="Close Project"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-20 s:p-35 space-y-30 [scrollbar-width:thin]">
          
          {/* Main Title & Services Banner */}
          <div className="space-y-15">
            <h1 className="font-serif text-[3.2rem] s:text-[4.6rem] leading-none text-ink tracking-tight uppercase">
              {project.title}
            </h1>
            
            {/* Services tags */}
            {project.services && project.services.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.services.map((service, idx) => (
                  <span 
                    key={idx}
                    className="px-12 py-4 rounded-full bg-surface border border-line/40 text-[1.2rem] font-mono text-ink/80 uppercase tracking-wide hover:border-accent/60 transition-colors"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Primary Media Display */}
          {currentMedia && (
            <div className="relative w-full aspect-video max-h-[60vh] bg-black/80 rounded-xl overflow-hidden border border-line/40 flex items-center justify-center group">
              {currentMedia.video ? (
                <>
                  <video
                    src={currentMedia.video}
                    poster={currentMedia.src}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-contain"
                  />
                  {/* Floating Video Controls */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-12 py-6 rounded-full border border-ink/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-ink/80 hover:text-accent p-1"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  </div>
                </>
              ) : (
                <img 
                  src={currentMedia.src} 
                  alt={currentMedia.alt || project.title} 
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          )}

          {/* Gallery Carousel / Strip */}
          {mediaList.length > 1 && (
            <div className="space-y-10">
              <span className="font-mono text-[1.1rem] uppercase tracking-wider text-ink/50">
                Project Gallery ({mediaList.length} assets)
              </span>
              <div className="grid grid-cols-3 s:grid-cols-4 md:grid-cols-6 gap-3">
                {mediaList.map((m, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all duration-200 ${
                      activeMediaIndex === idx 
                        ? 'border-accent ring-2 ring-accent/30 scale-[1.03]' 
                        : 'border-line/40 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={m.src} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                    {m.video && (
                      <span className="absolute top-2 right-2 bg-black/70 p-1 rounded-full text-accent">
                        <Play size={10} fill="currentColor" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Project Summary Description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-25 pt-15 border-t border-line/30">
            <div className="md:col-span-2 space-y-15">
              <h3 className="font-serif text-[2.2rem] text-ink uppercase tracking-wide">
                About The Work
              </h3>
              <p className="text-[1.6rem] s:text-[1.8rem] text-ink/90 font-sans leading-relaxed">
                {project.summary}
              </p>
              {project.quote && (
                <blockquote className="p-20 rounded-xl bg-surface/60 border-l-4 border-accent italic text-[1.6rem] text-ink/80">
                  "{project.quote}"
                </blockquote>
              )}
            </div>

            {/* Quick Specs Sidebar */}
            <div className="p-20 rounded-xl bg-black/40 border border-line/40 space-y-15 h-fit">
              <div>
                <span className="block font-mono text-[1.1rem] text-ink/40 uppercase">Industry</span>
                <span className="font-mono text-[1.4rem] text-ink font-medium">{project.industry}</span>
              </div>
              <div>
                <span className="block font-mono text-[1.1rem] text-ink/40 uppercase">Focus Area</span>
                <span className="font-mono text-[1.4rem] text-accent">
                  {project.services?.[0] || 'Branding & Identity'}
                </span>
              </div>
              <div className="pt-2">
                <a 
                  href="https://www.griflan.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[1.2rem] text-ink/70 hover:text-accent transition-colors"
                >
                  Visit full case study <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Next Project Footer Card */}
          <div className="pt-25 border-t border-line/30">
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="group w-full p-25 rounded-2xl bg-surface/50 border border-line/40 hover:border-accent flex items-center justify-between transition-all duration-300"
            >
              <div className="text-left space-y-1">
                <span className="font-mono text-[1.2rem] text-accent uppercase tracking-widest">
                  Next Up →
                </span>
                <h4 className="font-serif text-[2.4rem] s:text-[3rem] text-ink uppercase group-hover:text-accent transition-colors">
                  {nextProject.title}
                </h4>
                <p className="font-mono text-[1.2rem] text-ink/60">
                  {nextProject.industry}
                </p>
              </div>

              {nextProject.src && (
                <div className="w-32 h-20 rounded-lg overflow-hidden border border-line/50 hidden s:block">
                  <img 
                    src={nextProject.src} 
                    alt={nextProject.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
