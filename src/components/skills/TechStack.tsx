import React from 'react';
import { Layers, Cpu, Database, Wrench, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { TechStack3DPhysics } from './TechStack3DPhysics';

export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="portfolio-section bg-surface/30">
      <div className="portfolio-container">
        
        {/* Section Header (Clean & Direct) */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // SKILLS & TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Technologies, programming languages, and tools I use to build scalable applications.
          </p>
        </div>

        {/* 1. 3D Spheres Tech Stack */}
        <div className="mb-14 shadow-2xl">
          <TechStack3DPhysics />
        </div>

        {/* 2. Structured Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Frontend Card */}
          <div className="glass-panel p-6 rounded-2xl border-surface-border hover:border-primary/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Frontend Development</h3>
              <p className="text-xs text-slate-400 mb-4">
                Responsive web applications, modern UI frameworks, and component architectures.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-light border border-white/5 text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend & AI Card */}
          <div className="glass-panel p-6 rounded-2xl border-surface-border hover:border-secondary/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Backend & AI Integrations</h3>
              <p className="text-xs text-slate-400 mb-4">
                Serverless workers, real-time database architecture, and Google Gemini API integration.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.skills.backend_and_cloud.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-light border border-white/5 text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Academics & CS */}
          <div className="glass-panel p-6 rounded-2xl border-surface-border hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Core CS & Databases</h3>
              <p className="text-xs text-slate-400 mb-4">
                Data Structures, OOP concepts, Relational Databases, and SQL queries.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.skills.core_academics.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-light border border-white/5 text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="glass-panel p-6 rounded-2xl border-surface-border hover:border-amber-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Tools & Environment</h3>
              <p className="text-xs text-slate-400 mb-4">
                Git, GitHub version control, Postman API testing, and build tooling.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-light border border-white/5 text-amber-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
