import React, { useRef } from 'react';
import { Terminal, Github, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -700 : 700;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>03 // SELECTED WORKS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* Horizontal Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-3.5 rounded-2xl bg-surface border border-surface-border hover:border-primary/50 text-slate-300 hover:text-white transition-all active:scale-95 shadow-lg"
              title="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3.5 rounded-2xl bg-surface border border-surface-border hover:border-primary/50 text-slate-300 hover:text-white transition-all active:scale-95 shadow-lg"
              title="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Wide Horizontal Side-Scrolling Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="min-w-[88vw] sm:min-w-[700px] md:min-w-[850px] lg:min-w-[1020px] snap-center glass-panel rounded-3xl p-8 sm:p-10 border-surface-border hover:border-primary/40 transition-all duration-300 flex flex-col lg:flex-row items-center gap-8 group"
            >
              
              {/* Left Column: Project Info (Matching User's Screenshot Layout) */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between self-stretch">
                <div>
                  
                  {/* Big Number & Subtitle */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-5xl sm:text-6xl font-display font-black text-slate-100 group-hover:text-primary transition-colors">
                      0{index + 1}
                    </span>
                    <div className="text-right">
                      <h4 className="text-lg sm:text-xl font-bold text-white">{project.title}</h4>
                      <p className="text-xs font-mono text-slate-400">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Tools & Features */}
                  <div className="mb-4">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-1.5">
                      Tools & Features
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                      {project.techStack.join(', ')}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-surface-border">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column: Wide High-Res Mockup Image */}
              <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-surface-light border border-surface-border relative group-hover:border-primary/30 transition-colors shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.tried) {
                      target.dataset.tried = 'true';
                      target.src = `images/${project.id === 'ai-code-typer' ? 'ai-code-typer.jpg' : project.id === 'smart-complaint-box' ? 'smart-complaint.jpg' : 'whatsapp-clone.jpg'}`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
