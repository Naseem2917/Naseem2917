import React, { useEffect, useRef, useState } from 'react';
import { Terminal, GraduationCap, Users, CheckCircle2, ArrowDown, ArrowUp, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [arrowProgress, setArrowProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(0);

  // Dynamic Scroll-Following Arrow Logic with Bi-directional Pointer
  useEffect(() => {
    let animFrameId: number;

    const updateArrowPosition = () => {
      if (!containerRef.current) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current + 3) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current - 3) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when top of timeline enters middle of viewport, finish when bottom reaches middle
      const startOffset = windowHeight * 0.45;
      const totalDistance = rect.height;
      const currentDistance = startOffset - rect.top;

      const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
      setArrowProgress(progress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(updateArrowPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateArrowPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section id="experience" className="portfolio-section bg-surface/20">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // EDUCATION & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Education <span>&</span> <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Academic track record, hackathon leadership, and technical event management.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pl-8 sm:pl-16 ml-2 sm:ml-6 space-y-10 min-h-[500px]">
          
          {/* Base Vertical Timeline Track */}
          <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-surface-border rounded-full" />

          {/* Active Flowing Laser Beam (Height scales with scroll) */}
          <div
            className="absolute left-0 top-3 w-[3px] bg-gradient-to-b from-primary via-cyan-400 to-secondary rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-75 ease-out"
            style={{ height: `${arrowProgress * 100}%` }}
          />

          {/* DYNAMIC MOVING ARROW LIGHT (Points Down when scrolling down, Points Up when scrolling up) */}
          <div
            className="absolute -left-[18px] w-10 h-10 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-100 ease-out z-20 will-change-transform"
            style={{
              top: `calc(${arrowProgress * 100}% + 4px)`,
              transform: 'translateY(-50%)',
            }}
          >
            <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300">
              {scrollDirection === 'down' ? (
                <ArrowDown className="w-5 h-5 text-cyan-300 animate-bounce" />
              ) : (
                <ArrowUp className="w-5 h-5 text-cyan-300 animate-bounce" />
              )}
            </div>
          </div>

          {portfolioData.experience_and_education.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Static Milestone Node */}
              <div className="absolute -left-[45px] sm:-left-[77px] top-4 w-9 h-9 rounded-2xl bg-surface border-2 border-surface-border group-hover:border-primary flex items-center justify-center transition-all duration-300 shadow-xl group-hover:scale-110 z-10">
                {item.type === 'education' ? (
                  <GraduationCap className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                ) : (
                  <Users className="w-4 h-4 text-slate-400 group-hover:text-secondary transition-colors" />
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

        </div>

      </div>
    </section>
  );
};
