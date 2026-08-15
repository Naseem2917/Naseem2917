import React from 'react';
import { Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="portfolio-section">
      <div className="portfolio-container">
        
        {/* Section Pill & Title */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineering Web Systems with <span className="text-gradient">Precision & Speed</span>
          </h2>
        </div>

        {/* Clean, Non-Messy Widescreen Bio Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border-surface-border relative overflow-hidden bg-surface/50">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Bio Narrative */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-[1px] shadow-lg shadow-primary/20">
                  <div className="w-full h-full bg-background rounded-[15px] flex items-center justify-center text-primary font-bold text-base font-mono">
                    NK
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {portfolioData.personal.name}
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </h3>
                  <p className="text-xs font-mono text-primary">Full-Stack Developer & Software Engineer</p>
                </div>
              </div>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {portfolioData.about.summary}
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I specialize in architecting responsive React/TypeScript frontend interfaces with high-performance WebGL/Three.js interactivity, integrated with real-time Firebase backends and serverless Cloudflare Worker proxy pipelines.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:text-white transition-colors bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl"
                >
                  <span>View Timeline & Leadership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#skills"
                  className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-white transition-colors bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-xl"
                >
                  <span>Explore 3D Tech Arsenal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Clean Key Stats Banner */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-surface-light/60 border border-white/5 flex flex-col">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Academic Grade</span>
                <span className="text-3xl font-extrabold font-display text-emerald-400 flex items-center gap-2">
                  9.06 CGPA
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </span>
                <span className="text-xs text-slate-400 mt-1">Grade 'O' • Semester 4: 9.27 SGPA</span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-light/60 border border-white/5 flex flex-col">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Current Degree</span>
                <span className="text-xl font-bold text-white">
                  B.Sc. Information Tech
                </span>
                <span className="text-xs text-slate-400 mt-1">GES Shri Bhausaheb Vartak College (Univ. of Mumbai)</span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-light/60 border border-white/5 flex flex-col">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Development Focus</span>
                <span className="text-lg font-bold text-cyan-300">
                  Full-Stack & AI Engineering
                </span>
                <span className="text-xs text-slate-400 mt-1">Production Web Apps & Team Leadership</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
