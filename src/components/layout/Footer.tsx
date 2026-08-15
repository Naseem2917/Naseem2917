import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { BrandLogo } from '../common/BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-surface/60 backdrop-blur-md py-8 relative">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Single Cohesive Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Monogram & Copyright */}
          <div className="flex items-center gap-3.5">
            <BrandLogo size={36} />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wide">Naseem Khan</span>
              <span className="text-xs font-mono text-slate-400">
                © {new Date().getFullYear()} All rights reserved.
              </span>
            </div>
          </div>

          {/* Center: Back to Top Button */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-surface-light border border-white/10 hover:border-primary/50 text-slate-300 hover:text-white text-xs font-mono transition-all shadow-md hover:shadow-primary/10 active:scale-95 group"
              title="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-primary group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Right: Direct Social & Contact Icons */}
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

      </div>
    </footer>
  );
};
