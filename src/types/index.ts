export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  featured: boolean;
}

export interface ExperienceItem {
  type: 'education' | 'leadership' | 'experience';
  role: string;
  organization: string;
  period: string;
  description: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  about: {
    summary: string;
    highlights: string[];
  };
  skills: {
    frontend: string[];
    backend_and_cloud: string[];
    core_academics: string[];
    tools: string[];
  };
  projects: Project[];
  experience_and_education: ExperienceItem[];
}
