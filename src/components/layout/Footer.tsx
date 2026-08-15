import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { BrandLogo } from '../common/BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-surface/50 backdrop-blur-md pt-12 pb-8 relative">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Main Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand Monogram */}
          <div className="flex items-center gap-3.5">
            <BrandLogo size={34} />
            <div>
              <p className="text-sm font-bold text-white">Naseem Khan</p>
              <p className="text-xs font-mono text-slate-400">Full-Stack Developer & Software Engineer</p>
            </div>
          </div>

          {/* Direct Social & Contact Links */}
          <div className="flex items-center gap-2">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-surface-light border border-transparent hover:border-white/10 transition-all"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-surface-light border border-transparent hover:border-white/10 transition-all"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-surface-light border border-transparent hover:border-white/10 transition-all"
              aria-label="Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-surface-light border border-transparent hover:border-white/10 transition-all"
              aria-label="Phone"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Center Back to Top Button */}
        <div className="flex flex-col items-center justify-center pt-8 pb-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-light border border-white/10 hover:border-primary/50 text-slate-300 hover:text-white text-xs font-mono transition-all shadow-lg hover:shadow-primary/10 active:scale-95 group mb-6"
            title="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-primary group-hover:-translate-y-1 transition-transform" />
          </button>

          <p className="text-xs font-mono text-slate-500 text-center">
            © {new Date().getFullYear()} Naseem Khan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
