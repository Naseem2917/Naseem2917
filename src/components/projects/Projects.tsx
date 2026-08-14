import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Github, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

  // Measure max horizontal scroll distance on resize
  useEffect(() => {
    const calculateWidth = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setMaxScrollWidth(Math.max(trackWidth - viewportWidth + 120, 0));
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  // Vertical Scroll -> Horizontal Pin Scroll
  useEffect(() => {
    let animFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollableDistance, 0), 1);
      setScrollProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-[300vh] bg-background"
    >
      {/* Sticky Pin Container: Locks in viewport while scrolling horizontally */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="w-full max-w-[1700px] mx-auto mb-6 flex-shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // FEATURED PROJECTS</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>

            {/* Scroll Indicator Pill */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-light/60 border border-white/5 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Scroll Down to Slide ({Math.round(scrollProgress * 100)}%)</span>
            </div>
          </div>
        </div>

        {/* Horizontal Sliding Track (Driven by Vertical Wheel Scroll) */}
        <div
          ref={trackRef}
          className="flex gap-8 items-center will-change-transform transition-transform duration-75 ease-out w-max"
          style={{
            transform: `translate3d(-${scrollProgress * maxScrollWidth}px, 0, 0)`,
          }}
        >
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="w-[90vw] sm:w-[780px] md:w-[940px] lg:w-[1150px] flex-shrink-0 glass-panel rounded-3xl p-6 sm:p-10 border-surface-border hover:border-primary/40 transition-all duration-300 flex flex-col lg:flex-row items-center gap-8 group shadow-2xl bg-surface/80"
            >
              
              {/* Left Column: Project Details (Matching User's Screenshot) */}
              <div className="w-full lg:w-[45%] flex flex-col justify-between self-stretch">
                <div>
                  
                  {/* Big Number & Subtitle */}
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-5xl sm:text-6xl font-display font-black text-slate-100 group-hover:text-primary transition-colors">
                      0{index + 1}
                    </span>
                    <div className="text-right">
                      <h4 className="text-lg sm:text-xl font-bold text-white">{project.title}</h4>
                      <p className="text-xs font-mono text-slate-400">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Tools & Features Header */}
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
                <div className="flex items-center gap-6 pt-4 border-t border-surface-border mt-auto">
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

              {/* Right Column: Full Widescreen 16:9 / 16:10 Mockup (NO UNCROP / NO 1:1 SQUISH) */}
              <div className="w-full lg:w-[55%] aspect-[16/10] sm:aspect-[16/9] max-h-[360px] sm:max-h-[420px] rounded-2xl overflow-hidden bg-surface-light border border-surface-border relative group-hover:border-primary/40 transition-colors shadow-2xl flex items-center justify-center p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.tried) {
                      target.dataset.tried = 'true';
                      target.src = `images/${project.id === 'ai-code-typer' ? 'ai-code-typer.jpg' : project.id === 'smart-complaint-box' ? 'smart-complaint.jpg' : 'whatsapp-clone.jpg'}`;
                    }
                  }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
