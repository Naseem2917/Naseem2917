import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { BrandLogo } from '../common/BrandLogo';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 lg:px-12 py-4">
      <div
        className={`max-w-[1700px] mx-auto rounded-2xl transition-all duration-300 px-6 sm:px-8 py-3.5 flex items-center justify-between ${
          isScrolled
            ? 'glass-panel border-surface-border shadow-2xl bg-surface/85 backdrop-blur-xl'
            : 'bg-surface/30 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand / Custom Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <BrandLogo size={36} className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm text-white tracking-wide flex items-center gap-1.5">
              NASEEM KHAN
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[10px] font-mono text-slate-400">Full-Stack Engineer</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-light/40 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/15 text-primary border border-primary/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-surface-border transition-colors border border-transparent hover:border-white/10"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-surface-border transition-colors border border-transparent hover:border-white/10"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-surface-border transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl glass-panel border border-surface-border p-5 shadow-2xl bg-surface/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-primary hover:bg-surface-light rounded-xl transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-slate-500">→</span>
              </a>
            ))}
            <div className="h-px bg-surface-border my-2" />
            <div className="flex items-center justify-between pt-1">
              <div className="flex gap-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-surface-light text-slate-300 hover:text-white border border-white/5"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-surface-light text-slate-300 hover:text-white border border-white/5"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-primary hover:underline"
              >
                khannaseem1704@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
