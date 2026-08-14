import React from 'react';
import { Terminal, GraduationCap, Users, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-surface/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education & <span className="text-gradient">Leadership Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Academic milestones, leadership responsibilities, and competitive hackathons.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-surface-border pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-10">
          {portfolioData.experience_and_education.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-surface border-2 border-primary group-hover:border-secondary flex items-center justify-center transition-colors shadow-md shadow-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-secondary transition-colors" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 rounded-2xl border-surface-border group-hover:border-primary/40 transition-all duration-300">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-semibold">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-slate-400 font-mono capitalize flex items-center gap-1">
                    {item.type === 'education' ? <GraduationCap className="w-3.5 h-3.5 text-primary" /> : <Users className="w-3.5 h-3.5 text-secondary" />}
                    {item.type}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {item.role}
                </h3>

                <h4 className="text-xs sm:text-sm font-medium text-slate-400 mb-3">
                  {item.organization}
                </h4>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
