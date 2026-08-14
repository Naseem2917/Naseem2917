import React, { useState } from 'react';
import { Terminal, Mail, Phone, MapPin, Send, Check, Copy, Github, Linkedin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate instant sending and fire confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#8b5cf6', '#10b981'],
      });

      // Construct mailto for direct client email opening
      const mailtoLink = `mailto:${portfolioData.personal.email}?subject=Portfolio Contact from ${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${encodeURIComponent(
        formState.name
      )} (${encodeURIComponent(formState.email)})`;

      window.open(mailtoLink, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full filter blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Interested in full-stack collaboration, hiring, or discuss project architecture? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border-surface-border flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400">Email Address</span>
                  <p className="text-sm font-bold text-white select-all">
                    {portfolioData.personal.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-surface-light border border-white/5 hover:border-primary/40 text-slate-300 hover:text-white transition-all active:scale-95"
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border-surface-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400">Direct Phone</span>
                  <p className="text-sm font-bold text-white">
                    <a href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`} className="hover:text-secondary transition-colors">
                      {portfolioData.personal.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border-surface-border flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400">Location Base</span>
                <p className="text-sm font-bold text-white">
                  {portfolioData.personal.location}
                </p>
              </div>
            </div>

            {/* Social Connection Hub */}
            <div className="glass-panel p-5 rounded-2xl border-surface-border mt-2">
              <span className="text-[11px] font-mono text-slate-400 block mb-3">Connect on Professional Networks</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface-light hover:bg-surface-border border border-white/5 text-slate-200 text-xs font-medium transition-all"
                >
                  <Github className="w-4 h-4 text-slate-100" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface-light hover:bg-surface-border border border-white/5 text-slate-200 text-xs font-medium transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Box */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border-surface-border">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Send a Direct Message</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your contact info and I will respond to your inquiry promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Message Dispatched!</h4>
                <p className="text-xs text-slate-300 max-w-sm mb-4">
                  Thank you for reaching out, {formState.name}. Your email client was triggered, and I'll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="text-xs font-mono text-emerald-400 underline hover:text-emerald-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border focus:border-primary focus:outline-none text-white text-xs font-sans placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border focus:border-primary focus:outline-none text-white text-xs font-sans placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Message / Project Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, role, or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border focus:border-primary focus:outline-none text-white text-xs font-sans placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary via-cyan-500 to-secondary text-background font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
