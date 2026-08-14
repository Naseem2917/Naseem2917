import React from 'react';
import { CursorGlow } from './components/effects/CursorGlow';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { TechStack } from './components/skills/TechStack';
import { Projects } from './components/projects/Projects';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-slate-100 selection:bg-primary/30 selection:text-primary">
      {/* 1. Feature 1: Mouse Pointer Highlight & Spotlight Glow */}
      <CursorGlow />

      {/* 2. Glassmorphic Navigation */}
      <Navbar />

      {/* 3. Main Sections */}
      <main className="relative z-10">
        {/* Hero Section with Feature 2: 3D Interactive Model */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Tech Stack with Feature 3: Interactive Gravity Physics Balls Playground */}
        <TechStack />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Education & Leadership Timeline */}
        <ExperienceTimeline />

        {/* Contact & Direct Dispatch */}
        <Contact />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
};

export default App;
