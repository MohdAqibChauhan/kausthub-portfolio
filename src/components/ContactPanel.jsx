import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

export default function ContactPanel({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    brief: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      budget: '',
      brief: ''
    });
  };

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
              Start A Project
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-8 rounded-full border border-line/50 hover:border-accent text-ink hover:text-accent transition-colors"
            aria-label="Close Contact"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-25 s:p-35 space-y-35 [scrollbar-width:thin]">
          
          {/* Header Title & Intro */}
          <div className="space-y-15">
            <h2 className="font-serif text-[3.6rem] s:text-[4.4rem] leading-tight text-ink uppercase tracking-tight">
              Big idea? You know where to find us.
            </h2>
            <div className="space-y-10 text-[1.6rem] text-ink/80 font-sans leading-relaxed">
              <p>
                Schedule an introductory call to discuss your next idea and learn more about how we can help with your project.
              </p>
              <p>
                To learn more about Griflan visit us at{' '}
                <a 
                  href="https://www.griflan.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent underline font-mono"
                >
                  www.griflan.com
                </a>.
              </p>
            </div>
          </div>

          {/* Interactive Form or Success State */}
          {submitted ? (
            <div className="p-35 rounded-2xl bg-surface border border-accent/40 text-center space-y-20 animate-fade-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-serif text-[2.8rem] text-ink uppercase">
                Message Received!
              </h3>
              <p className="font-sans text-[1.6rem] text-ink/80 leading-relaxed max-w-md mx-auto">
                Thank you, <span className="text-accent font-semibold">{formData.name}</span>! We've received your brief and will be in touch shortly to schedule an intro call.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-20 py-10 rounded-10 border border-line/60 font-mono text-[1.3rem] text-ink/70 hover:text-ink hover:border-accent transition-colors uppercase"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-20">
              
              {/* Row 1: Name & Email */}
              <div className="space-y-15">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    className="w-full h-65 px-25 rounded-10 bg-black/50 border border-line/60 focus:border-accent text-ink placeholder-ink/40 font-mono text-[1.4rem] outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className="w-full h-65 px-25 rounded-10 bg-black/50 border border-line/60 focus:border-accent text-ink placeholder-ink/40 font-mono text-[1.4rem] outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company *"
                    className="w-full h-65 px-25 rounded-10 bg-black/50 border border-line/60 focus:border-accent text-ink placeholder-ink/40 font-mono text-[1.4rem] outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className="w-full h-65 px-25 rounded-10 bg-black/50 border border-line/60 focus:border-accent text-ink placeholder-ink/40 font-mono text-[1.4rem] outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full h-65 px-25 rounded-10 bg-black/50 border border-line/60 focus:border-accent text-ink placeholder-ink/40 font-mono text-[1.4rem] outline-none transition-colors cursor-pointer appearance-none"
                  >
                    <option value="" disabled className="bg-black text-ink/40">Budget *</option>
                    <option value="Under $25k" className="bg-black text-ink">Under $25k</option>
                    <option value="$25k – $50k" className="bg-black text-ink">$25k – $50k</option>
                    <option value="$50k – $100k" className="bg-black text-ink">$50k – $100k</option>
                    <option value="$100k+" className="bg-black text-ink">$100k+</option>
                  </select>
                  <div className="pointer-events-none absolute right-25 top-1/2 -translate-y-1/2 text-ink/50 text-[1.2rem] font-mono">
                    ▼
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="brief"
                    rows={4}
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder="A brief description of your project is always best :)"
                    className="w-full p-25 rounded-10 bg-black/50 border border-line/60 focus:border-accent text-ink placeholder-ink/40 font-mono text-[1.4rem] outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-10 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="relative inline-flex items-center justify-center h-65 px-35 rounded-10 bg-accent text-ink font-serif text-[2.2rem] hover:bg-[#ff4f48] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 shadow-xl"
                >
                  {submitting ? 'Connecting...' : "Let's Connect!"}
                </button>
              </div>

            </form>
          )}

          {/* Direct Studio Contacts */}
          <div className="space-y-15 pt-20 border-t border-line/30">
            <h4 className="font-mono text-[1.2rem] uppercase tracking-wider text-ink/50">
              Direct Contact
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
                href="tel:610.952.1398" 
                className="flex items-center gap-3 p-12 rounded-lg bg-surface border border-line/40 hover:border-accent text-ink hover:text-accent transition-colors"
              >
                <Phone size={16} className="text-accent" />
                <span>610.952.1398</span>
              </a>
              <div className="flex items-center gap-4 p-12 rounded-lg bg-surface border border-line/40">
                <a 
                  href="https://www.instagram.com/griflan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Instagram
                </a>
                <span className="text-line">•</span>
                <a 
                  href="https://www.linkedin.com/company/griflan-design-inc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-line">•</span>
                <a 
                  href="https://x.com/Griflan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  X
                </a>
              </div>
            </div>
          </div>

        </div>

      </aside>
    </div>
  );
}
