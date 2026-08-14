import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-surface/50 backdrop-blur-md py-10 relative">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-surface-light border border-white/10 flex items-center justify-center text-primary font-mono font-bold text-xs">
              NK
            </div>
            <div>
              <p className="text-sm font-bold text-white">Naseem Khan</p>
              <p className="text-[11px] font-mono text-slate-400">Designed & Engineered with React, Three.js & Tailwind</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-light transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-light transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-light border border-white/5 hover:border-primary/40 text-slate-300 hover:text-white text-xs font-mono transition-all active:scale-95"
            title="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Naseem Khan. 100% Original Custom Engineering.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Zero-Crash 60 FPS Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
