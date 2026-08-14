import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Hero3DScene } from './Hero3DScene';

const ROLES = [
  'Full-Stack Developer',
  'AI Solutions Engineer',
  'Hackathon Team Leader',
  'B.Sc. IT Scholar (9.06 CGPA)',
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setIsFlipping(false);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-surface-border text-slate-300 text-xs font-mono mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time & Freelance Projects</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Hi, I'm <br />
              <span className="text-gradient">NASEEM KHAN</span>
            </h1>

            {/* Dynamic Role Badge */}
            <div className="h-10 sm:h-12 mb-6 flex items-center">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-surface-light/80 border border-primary/30 backdrop-blur-md">
                <Code2 className="w-4 h-4 text-primary animate-pulse" />
                <span
                  className={`text-sm sm:text-base font-mono font-semibold text-primary transition-all duration-300 ${
                    isFlipping ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                  }`}
                >
                  {ROLES[roleIndex]}
                </span>
              </div>
            </div>

            {/* Bio Tagline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              {portfolioData.personal.tagline}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-cyan-500 to-secondary hover:opacity-95 text-background font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto"
              >
                <FolderGit2 className="w-4 h-4 text-background group-hover:rotate-6 transition-transform" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-surface hover:bg-surface-light text-white font-medium text-sm px-6 py-3.5 rounded-xl border border-surface-border hover:border-primary/40 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10 pt-8 border-t border-surface-border/60 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-1">
                  9.06 <span className="text-xs font-mono text-primary font-normal">CGPA</span>
                </span>
                <span className="text-xs text-slate-400">Univ. of Mumbai (Sem 5)</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-1">
                  3+ <span className="text-xs font-mono text-secondary font-normal">Apps</span>
                </span>
                <span className="text-xs text-slate-400">Full-Stack AI Projects</span>
              </div>

              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-xl sm:text-2xl font-bold font-display text-emerald-400 flex items-center gap-1">
                  Lead <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs text-slate-400">Hackathon & Fest Lead</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Scene */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <Hero3DScene />
          </div>

        </div>
      </div>
    </section>
  );
};
