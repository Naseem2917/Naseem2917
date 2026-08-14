import React from 'react';
import { GraduationCap, Users, Rocket, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Engineering Web Excellence & <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            A look into my academic journey, full-stack philosophy, and leadership experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between border-surface-border">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg font-mono">
                  NK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Naseem Khan</h3>
                  <p className="text-xs font-mono text-primary">Full-Stack Developer & B.Sc. IT Scholar</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {portfolioData.about.summary}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                My approach combines strong computer science fundamentals—data structures, system design, and algorithms—with cutting-edge modern tooling like React 18/19, TypeScript, real-time Firebase backends, and serverless Cloudflare Workers.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs font-mono text-slate-400">Current Semester</span>
                <p className="text-base font-bold text-white">Semester 5 (IT)</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">Semester 4 Score</span>
                <p className="text-base font-bold text-primary">9.27 SGPA</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">Overall Grade</span>
                <p className="text-base font-bold text-emerald-400">Grade 'O' (9.06)</p>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="glass-panel p-5 rounded-2xl border-surface-border hover:border-primary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Academic Distinction</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Maintained a consistent 9.06 CGPA with Grade O across B.Sc. IT curriculum at GES Shri Bhausaheb Vartak College (University of Mumbai).
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-surface-border hover:border-secondary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Hackathon Team Leadership</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Led a 3-member engineering squad at Vivek College of Commerce Hackathon to develop a complete full-stack real-time AI system under tight deadlines.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-surface-border hover:border-emerald-500/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Tech Fest Event Head</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Directed and organized the IT Quiz and Photography technical competitions for 'Tech Today', managing multi-tier student participants.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
