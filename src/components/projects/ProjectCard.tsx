import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden border-surface-border hover:border-primary/40 transition-all duration-300 flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
      
      {/* Project Image Preview */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-surface-light border-b border-surface-border">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.tried) {
              target.dataset.tried = 'true';
              target.src = `images/${project.id === 'ai-code-typer' ? 'ai-code-typer.jpg' : project.id === 'smart-complaint-box' ? 'smart-complaint.jpg' : 'whatsapp-clone.jpg'}`;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

        {/* Index Tag */}
        <div className="absolute top-3 left-3 bg-surface/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs font-mono text-primary font-bold">
          0{index + 1}
        </div>

        {/* Category Pill */}
        <div className="absolute top-3 right-3 bg-surface/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px] font-mono text-slate-300">
          {project.subtitle}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold font-display text-white group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-light/80 border border-white/5 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-surface-border">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface hover:bg-surface-light border border-surface-border hover:border-white/20 text-slate-200 text-xs font-medium transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-cyan-500 hover:opacity-90 text-background font-bold text-xs transition-all shadow-md shadow-primary/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
