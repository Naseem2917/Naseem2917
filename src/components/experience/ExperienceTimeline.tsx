import React from 'react';
import { Terminal, GraduationCap, Users, CheckCircle2, ArrowDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-surface/20">
      <div className="w-full max-w-[1550px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // CAREER & EDUCATION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Education <span>&</span> <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Academic achievements, hackathon team leadership, and technical event management.
          </p>
        </div>

        {/* Timeline with Animated Glowing Arrow Light Beam */}
        <div className="relative pl-8 sm:pl-16 ml-2 sm:ml-6 space-y-12">
          
          {/* Base Vertical Timeline Track */}
          <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-surface-border" />

          {/* Animated Flowing Laser / Light Beam with Arrow Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] overflow-hidden pointer-events-none">
            <div className="w-full h-40 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse-slow will-change-transform" />
          </div>

          {/* Top Starting Arrow Indicator */}
          <div className="absolute -left-[14px] top-0 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/50 animate-bounce">
            <ArrowDown className="w-4 h-4" />
          </div>

          {portfolioData.experience_and_education.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Glowing Node with Arrow Light Icon */}
              <div className="absolute -left-[45px] sm:-left-[77px] top-4 w-9 h-9 rounded-2xl bg-surface border-2 border-primary group-hover:border-secondary flex items-center justify-center transition-all duration-300 shadow-xl shadow-primary/30 group-hover:scale-110">
                {item.type === 'education' ? (
                  <GraduationCap className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" />
                ) : (
                  <Users className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                )}
              </div>

              {/* Wide Glassmorphic Milestone Box */}
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border-surface-border group-hover:border-primary/40 transition-all duration-300 shadow-2xl relative overflow-hidden">
                
                {/* Accent Background Glow on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-[80px] pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-secondary" />
                    {item.type}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1.5 group-hover:text-primary transition-colors">
                  {item.role}
                </h3>

                <h4 className="text-sm sm:text-base font-semibold text-slate-400 mb-4 font-mono">
                  {item.organization}
                </h4>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

          {/* Bottom Termination Arrow Indicator */}
          <div className="absolute -left-[14px] bottom-0 w-8 h-8 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center text-secondary shadow-lg shadow-secondary/50">
            <ArrowDown className="w-4 h-4" />
          </div>

        </div>

      </div>
    </section>
  );
};
