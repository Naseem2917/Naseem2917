import React from 'react';
import { Layers, Cpu, Database, Wrench, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { TechStack3DPhysics } from './TechStack3DPhysics';

export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-surface/30">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // SKILLS & TECHSTACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Interactive <span className="text-gradient">3D Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Physics-driven 3D interactive spheres with continuous collision dynamics and mouse interaction.
          </p>
        </div>

        {/* 1. Exact 3D Glossy Spheres Gravity Physics Playground */}
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
              <h3 className="text-base font-bold text-white mb-2">Frontend Engineering</h3>
              <p className="text-xs text-slate-400 mb-4">
                Crafting responsive, high-framerate, accessible user interfaces.
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
              <h3 className="text-base font-bold text-white mb-2">Cloud, Backend & AI</h3>
              <p className="text-xs text-slate-400 mb-4">
                Real-time Firestore, serverless workers, and Google Gemini integrations.
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
              <h3 className="text-base font-bold text-white mb-2">CS Fundamentals</h3>
              <p className="text-xs text-slate-400 mb-4">
                Rigorous algorithmic logic, OOP concepts, and relational databases.
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
              <h3 className="text-base font-bold text-white mb-2">DevOps & Tools</h3>
              <p className="text-xs text-slate-400 mb-4">
                Modern CI/CD, version control, API testing, and deployment.
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
