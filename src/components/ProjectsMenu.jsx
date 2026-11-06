import React, { useState } from 'react';
import { X, Search, ArrowUpRight } from 'lucide-react';

export default function ProjectsMenu({ 
  isOpen, 
  onClose, 
  projects = [], 
  onSelectProject 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('ALL');
  const [hoveredProject, setHoveredProject] = useState(null);

  if (!isOpen) return null;

  // Get unique industries
  const industries = ['ALL', ...new Set(projects.map(p => p.industry).filter(Boolean))];

  // Filter projects
  const filtered = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (p.services && p.services.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesIndustry = selectedIndustry === 'ALL' || p.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 s:p-25 bg-black/80 backdrop-blur-xl animate-fade-in select-none">
      
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl h-full max-h-[90vh] bg-[#1a1818] border border-line/60 rounded-none s:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-25 py-20 border-b border-line/40 bg-black/60 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-accent text-[1.2rem] uppercase tracking-wider font-semibold">
              Index / All Projects
            </span>
            <span className="font-mono text-ink/40 text-[1.2rem]">
              ({filtered.length} of {projects.length})
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-8 rounded-full border border-line/50 hover:border-accent text-ink hover:text-accent transition-colors"
            aria-label="Close Project Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="px-25 py-15 border-b border-line/30 bg-surface/40 flex flex-col s:flex-row gap-3 items-stretch s:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-15 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects by name, service, or industry..."
              className="w-full h-42 pl-40 pr-15 rounded-10 bg-black/60 border border-line/60 focus:border-accent font-mono text-[1.3rem] text-ink placeholder-ink/40 outline-none transition-colors"
            />
          </div>

          {/* Industry Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 [scrollbar-width:none]">
            {industries.slice(0, 6).map((ind, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`px-12 py-6 rounded-full font-mono text-[1.1rem] uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedIndustry === ind
                    ? 'bg-accent text-ink font-semibold'
                    : 'bg-black/50 text-ink/60 hover:text-ink border border-line/40'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Content Columns: List on left, Live Preview on right */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Projects List */}
          <div className="md:col-span-7 h-full overflow-y-auto p-15 s:p-25 divide-y divide-line/20 [scrollbar-width:thin]">
            {filtered.length === 0 ? (
              <div className="py-40 text-center text-ink/50 font-mono text-[1.4rem]">
                No projects found matching "{searchTerm}"
              </div>
            ) : (
              filtered.map((p, idx) => (
                <button
                  key={p.slug}
                  type="button"
                  onMouseEnter={() => setHoveredProject(p)}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="group w-full py-16 px-15 flex items-center justify-between text-left hover:bg-surface/60 rounded-xl transition-all duration-200"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-ink/30 text-[1.2rem] group-hover:text-accent transition-colors">
                      {`0${idx + 1}`.slice(-2)}
                    </span>
                    <h4 className="font-serif text-[2.2rem] s:text-[2.6rem] text-ink group-hover:text-accent transition-colors uppercase">
                      {p.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[1.1rem] text-ink/50 uppercase tracking-wider hidden s:inline">
                      {p.industry}
                    </span>
                    <ArrowUpRight size={18} className="text-ink/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Live Preview Panel (Desktop) */}
          <div className="hidden md:flex md:col-span-5 h-full bg-black/40 border-l border-line/30 p-25 flex-col justify-center items-center">
            {hoveredProject ? (
              <div className="w-full space-y-15 animate-fade-in">
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-line/60 shadow-xl bg-surface">
                  <img
                    src={hoveredProject.src || hoveredProject.card}
                    alt={hoveredProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-5">
                  <span className="font-mono text-[1.1rem] text-accent uppercase tracking-widest">
                    {hoveredProject.industry}
                  </span>
                  <h3 className="font-serif text-[2.4rem] text-ink uppercase">
                    {hoveredProject.title}
                  </h3>
                  <p className="font-sans text-[1.3rem] text-ink/70 line-clamp-3">
                    {hoveredProject.summary}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-ink/30 font-mono text-[1.3rem] uppercase tracking-widest">
                Hover a project to preview
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
