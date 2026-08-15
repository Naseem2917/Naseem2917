import React, { useState } from 'react';
import { Terminal, Mail, Phone, MapPin, Check, Copy, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // CONTACT INFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Feel free to connect directly via email, phone, or professional networks.
          </p>
        </div>

        {/* Clean Direct Contact Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Email Card */}
          <div className="glass-panel p-6 rounded-3xl border-surface-border hover:border-primary/40 transition-all group flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-surface-light border border-white/5 hover:border-primary/40 text-slate-300 hover:text-white transition-all active:scale-95 flex items-center gap-1.5 text-xs font-mono"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <span className="text-xs font-mono text-slate-400 block mb-1">Direct Email</span>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-primary transition-colors block break-all font-sans"
              >
                {portfolioData.personal.email}
              </a>
            </div>
            <div className="pt-4 mt-6 border-t border-white/5">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:underline"
              >
                <span>Compose Mail</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-panel p-6 rounded-3xl border-surface-border hover:border-secondary/40 transition-all group flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-xl bg-surface-light border border-white/5 hover:border-secondary/40 text-slate-300 hover:text-white transition-all active:scale-95 flex items-center gap-1.5 text-xs font-mono"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <span className="text-xs font-mono text-slate-400 block mb-1">Phone / Mobile</span>
              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                className="text-base sm:text-lg font-bold text-white hover:text-secondary transition-colors block font-sans"
              >
                {portfolioData.personal.phone}
              </a>
            </div>
            <div className="pt-4 mt-6 border-t border-white/5">
              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:underline"
              >
                <span>Call Directly</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-panel p-6 rounded-3xl border-surface-border hover:border-emerald-500/40 transition-all group flex flex-col justify-between shadow-xl md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  IST (UTC+5:30)
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 block mb-1">Location Base</span>
              <p className="text-base sm:text-lg font-bold text-white font-sans">
                {portfolioData.personal.location}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/5">
              <span className="text-xs font-mono text-slate-400">
                Maharashtra, India
              </span>
            </div>
          </div>

        </div>

        {/* Professional Profiles */}
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="glass-panel p-5 rounded-2xl border-surface-border hover:border-white/30 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-surface-light text-slate-100 group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">GitHub Profile</span>
                <span className="text-xs font-mono text-slate-400">@Naseem2917</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass-panel p-5 rounded-2xl border-surface-border hover:border-cyan-500/40 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">LinkedIn Profile</span>
                <span className="text-xs font-mono text-slate-400">/in/naseem2917</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
};
