import React from 'react';
import { Terminal, Github } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Selected <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Production-grade web applications with real-time architectures, AI APIs, and responsive design systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-surface-light border border-surface-border hover:border-primary/40 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all hover:scale-105 shadow-lg"
          >
            <Github className="w-4 h-4 text-primary" />
            <span>Explore More Open-Source Projects on GitHub</span>
            <span className="text-xs font-mono text-primary">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
