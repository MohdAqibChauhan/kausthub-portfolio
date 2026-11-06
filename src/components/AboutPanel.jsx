import React from 'react';
import { X, ArrowRight, Phone, Mail, Instagram, Linkedin, Globe } from 'lucide-react';

export default function AboutPanel({ 
  isOpen, 
  onClose, 
  onOpenContact,
  services = []
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-md transition-opacity duration-300 select-none">
      
      {/* Click outside to close backdrop */}
      <div className="flex-1 cursor-pointer" onClick={onClose} />

      {/* Drawer content */}
      <aside className="relative w-full max-w-2xl h-full bg-[#1c1919] border-l border-line/60 shadow-2xl flex flex-col overflow-hidden animate-slide-left">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-25 py-20 border-b border-line/40 bg-black/60 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-accent animate-ping" />
            <span className="font-mono text-[1.2rem] text-ink uppercase tracking-wider">
              About Studio
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-8 rounded-full border border-line/50 hover:border-accent text-ink hover:text-accent transition-colors"
            aria-label="Close About"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-25 s:p-35 space-y-35 [scrollbar-width:thin]">
          
          {/* Main Title & Editorial Statement */}
          <div className="space-y-20">
            <h2 className="font-serif text-[3.8rem] s:text-[4.6rem] leading-none text-ink uppercase tracking-tight">
              We are Griflan
            </h2>
            <div className="space-y-15 text-[1.6rem] s:text-[1.8rem] text-ink/80 leading-relaxed font-sans">
              <p>
                Griflan Labs is an experimental, bird’s-eye view of our work, a fresh way to show the range of brands, digital experiences, and products we create through the Griflan lens.
              </p>
              <p>
                We work with companies that have something worth building, from emerging startups to established brands entering a new chapter. Every brand deserves its own story.
              </p>
              <p>
                For a closer look at each brand, visit{' '}
                <a 
                  href="https://www.griflan.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent underline hover:text-ink transition-colors font-mono"
                >
                  www.griflan.com
                </a>.
              </p>
            </div>
          </div>

          {/* CTA Banner inside About */}
          <div className="p-25 rounded-2xl bg-surface border border-line/50 space-y-15">
            <h4 className="font-serif text-[2.2rem] text-ink uppercase">
              Ready to create something remarkable?
            </h4>
            <p className="font-sans text-[1.5rem] text-ink/70">
              Schedule an introductory call to discuss your next idea and see how our studio can help elevate your brand.
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-3 px-20 py-12 rounded-10 bg-accent text-ink font-serif text-[1.7rem] hover:bg-[#ff4f48] transition-all hover:scale-105"
            >
              Start A Project <ArrowRight size={18} />
            </button>
          </div>

          {/* Detailed Services Categorized */}
          <div className="space-y-25 pt-10 border-t border-line/30">
            <h3 className="font-serif text-[2.8rem] text-ink uppercase tracking-wide">
              Capabilities & Services
            </h3>

            {/* Three Pillar Cards */}
            <div className="space-y-20">
              {/* Pillar 1: Branding */}
              <div className="p-20 rounded-xl bg-black/40 border border-line/40 space-y-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-[2rem] text-accent uppercase">
                    01. Branding
                  </h4>
                  <span className="font-mono text-[1.1rem] text-ink/40 uppercase">Identity & Voice</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {[
                    'Copywriting & Content',
                    'Campaign Creation',
                    'Brand Naming',
                    'Visual Language',
                    'Brand Identity Systems',
                    'Brand Strategy & Positioning',
                    'Art Direction',
                    'Style Guidelines'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[1.3rem] font-mono text-ink/80">
                      <span className="text-accent">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 2: Digital */}
              <div className="p-20 rounded-xl bg-black/40 border border-line/40 space-y-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-[2rem] text-accent uppercase">
                    02. Digital
                  </h4>
                  <span className="font-mono text-[1.1rem] text-ink/40 uppercase">Web & Product</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {[
                    'Web Design (UI/UX)',
                    'Web Development',
                    'Content Management (CMS)',
                    'Interactive 3D / WebGL',
                    'Mobile Applications',
                    'Design Systems',
                    'E-Commerce Experiences',
                    'Performance Optimization'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[1.3rem] font-mono text-ink/80">
                      <span className="text-accent">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 3: Motion */}
              <div className="p-20 rounded-xl bg-black/40 border border-line/40 space-y-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-[2rem] text-accent uppercase">
                    03. Motion
                  </h4>
                  <span className="font-mono text-[1.1rem] text-ink/40 uppercase">Film & CGI</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {[
                    '2D & 3D Animation',
                    'Video Production',
                    'Story Boarding',
                    'Motion Identity Systems',
                    'Kinetic Typography',
                    'CGI Renderings',
                    'Social Video Assets',
                    'Sound Design Direction'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[1.3rem] font-mono text-ink/80">
                      <span className="text-accent">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Direct Strip */}
          <div className="space-y-15 pt-15 border-t border-line/30">
            <h4 className="font-mono text-[1.2rem] uppercase tracking-wider text-ink/50">
              Direct Inquiries
            </h4>
            <div className="grid grid-cols-1 s:grid-cols-2 gap-3 text-[1.4rem] font-mono">
              <a 
                href="mailto:hello@griflan.com" 
                className="flex items-center gap-3 p-12 rounded-lg bg-surface border border-line/40 hover:border-accent text-ink hover:text-accent transition-colors"
              >
                <Mail size={16} className="text-accent" />
                <span>hello@griflan.com</span>
              </a>
              <a 
                href="tel:856.816.6159" 
                className="flex items-center gap-3 p-12 rounded-lg bg-surface border border-line/40 hover:border-accent text-ink hover:text-accent transition-colors"
              >
                <Phone size={16} className="text-accent" />
                <span>856.816.6159</span>
              </a>
              <a 
                href="https://www.instagram.com/griflan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-12 rounded-lg bg-surface border border-line/40 hover:border-accent text-ink hover:text-accent transition-colors"
              >
                <Instagram size={16} className="text-accent" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/griflan-design-inc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-12 rounded-lg bg-surface border border-line/40 hover:border-accent text-ink hover:text-accent transition-colors"
              >
                <Linkedin size={16} className="text-accent" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

      </aside>
    </div>
  );
}
