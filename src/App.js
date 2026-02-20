import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap, Mail, TrendingUp, Workflow, Bot, MessageSquare,
  Sparkles, Send, User, AtSign, Menu, X, ArrowRight,
  ChevronLeft, ChevronRight, CheckCircle2, Star, FolderOpen
} from 'lucide-react';
import { testimonials, projects, featuredProjectIds } from './data';

export default function KridoAutomations() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', automation: '' });
  const [formStatus, setFormStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const t = setInterval(() => setCurrentTestimonial(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Scroll fade-in observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const services = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Automation",
      description: "Smart email campaigns, follow-up sequences, and lead nurturing — all running automatically while you sleep.",
      tags: ["Campaigns", "Sequences", "CRM Sync"],
      gradient: "from-violet-600 to-purple-700"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "Connect your tools and eliminate manual work. From data entry to complex multi-step ops across every platform.",
      tags: ["Zapier", "Make", "n8n"],
      gradient: "from-violet-700 to-indigo-700"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO & Marketing",
      description: "Automated content distribution, social scheduling, analytics reporting, and multi-channel marketing flows.",
      tags: ["Social", "Analytics", "Content"],
      gradient: "from-purple-600 to-violet-800"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Custom AI Agents",
      description: "AI agents fine-tuned on your data. Built for your industry, your terminology, your specific business logic.",
      tags: ["GPT-4", "Claude", "Fine-tuned"],
      gradient: "from-violet-800 to-purple-900"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Voice & Chat Bots",
      description: "24/7 conversational agents for support, lead qualification, and booking — no human intervention needed.",
      tags: ["WhatsApp", "Web", "Voice"],
      gradient: "from-indigo-700 to-violet-700"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Custom Automations",
      description: "If you're clicking it more than twice, we'll automate it. Any repetitive task, any tool, any complexity.",
      tags: ["Any Stack", "API", "No-code"],
      gradient: "from-violet-600 to-indigo-800"
    }
  ];

  // Featured projects are driven by data.js — just change featuredProjectIds there
  const featuredProjects = featuredProjectIds
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean)
    .map(p => ({
      title: p.title,
      client: p.client,
      category: p.category,
      result: `${p.stat1.value} ${p.stat1.label}`,
      gradient: p.gradient,
    }));

  const stats = [
    { number: "10+", label: "Clients Served", sub: "and growing" },
    { number: "50+", label: "Workflows Deployed", sub: "across industries" },
    { number: "100%", label: "Satisfaction Rate", sub: "no exceptions" },
    { number: "1000+", label: "Hours Saved", sub: "for our clients" }
  ];

  const navItems = [
    { name: "Services", id: "services" },
    { name: "Results", id: "stats" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" }
  ];

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email.');
      return;
    }
    setFormStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '6246a59b-ac1a-4ea4-9118-92b7c68c03c5',
          name: formData.name,
          email: formData.email,
          message: formData.automation || 'No details provided.',
          subject: 'New Automation Inquiry — Krido Automations'
        })
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', automation: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden noise-overlay">

      {/* ── Animated Background Orbs ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="orb-1 absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)' }} />
        <div className="orb-2 absolute top-[30%] right-[5%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)' }} />
        <div className="orb-3 absolute bottom-[10%] left-[30%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(91,21,182,0.12) 0%, transparent 70%)' }} />
      </div>

      {/* ── Grid Background ── */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-60" />

      {/* ══════════════════════════════
              NAVIGATION
         ══════════════════════════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#07070f]/90 backdrop-blur-xl border-b border-violet-500/10 shadow-lg shadow-black/40'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center glow-violet-sm">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              <span className="gradient-text-bright">Krido</span>
              <span className="text-white/80"> Automations</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="nav-link text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                {item.name}
              </button>
            ))}
            <Link to="/projects"
              className="nav-link text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium flex items-center gap-1.5">
              <FolderOpen className="w-3.5 h-3.5" /> Our Work
            </Link>
            <button onClick={() => scrollTo('contact')}
              className="px-5 py-2 text-sm font-semibold rounded-lg bg-violet-600 hover:bg-violet-500 transition-all duration-200 glow-violet-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#09090f]/98 backdrop-blur-xl border-t border-violet-500/10 px-6 py-5">
            <div className="flex flex-col gap-4">
              {navItems.map(item => (
                <button key={item.id} onClick={() => scrollTo(item.id)}
                  className="text-gray-300 hover:text-white text-left font-medium transition-colors">
                  {item.name}
                </button>
              ))}
              <Link to="/projects" onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors">
                <FolderOpen className="w-4 h-4" /> Our Work
              </Link>
              <button onClick={() => scrollTo('contact')}
                className="mt-2 px-5 py-2.5 rounded-lg bg-violet-600 font-semibold text-sm text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ══════════════════════════════
                  HERO
         ══════════════════════════════ */}
      <section className="relative z-10 px-6 pt-36 pb-28">
        <div className="max-w-6xl mx-auto text-center">

          <div className="fade-in-up mb-6 flex justify-center">
            <span className="tag-pill">
              <Zap className="w-3 h-3 text-violet-400" />
              AI-Powered Business Automation
            </span>
          </div>

          <h1 className="fade-in-up text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", transitionDelay: '0.1s' }}>
            <span className="gradient-text-bright">Automate</span>
            <span className="text-white"> the</span>
            <br />
            <span className="text-white">Repetitive.</span>
            <br />
            <span className="gradient-text" style={{ fontSize: '0.6em' }}>Scale the Human.</span>
          </h1>

          <p className="fade-in-up text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ transitionDelay: '0.15s' }}>
            Custom-built automation workflows for businesses that want to move faster,
            cut costs, and focus on what actually matters.
          </p>

          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-20"
            style={{ transitionDelay: '0.2s' }}>
            <button onClick={() => scrollTo('contact')}
              className="btn-primary px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2">
              Start Automating <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => scrollTo('services')}
              className="px-8 py-3.5 rounded-xl border border-violet-500/30 hover:border-violet-400/60 bg-white/[0.02] hover:bg-white/[0.05] font-semibold text-base text-gray-300 hover:text-white transition-all duration-200">
              See Our Services
            </button>
          </div>

          {/* Hero Description Box */}
          <div className="fade-in-up max-w-3xl mx-auto rounded-2xl border border-violet-500/15 bg-[#0c0c18]/60 backdrop-blur-sm p-8 text-left"
            style={{ transitionDelay: '0.25s' }}>
            <p className="text-gray-300 text-base leading-loose">
              <span className="text-violet-300 font-semibold">Tired of the AI hype with no real results?</span>
              {' '}You're not alone. Every business is told to "use AI" — but few actually implement it in a way that works.
              <br /><br />
              The gap isn't the technology. It's the <span className="text-white font-semibold">custom workflow layer</span> between generic AI tools and your actual business processes.
              That's exactly what we build.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
                  STATS
         ══════════════════════════════ */}
      <section id="stats" className="relative z-10 px-6 py-20">
        <div className="violet-divider max-w-7xl mx-auto mb-20" />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="fade-in-up text-center p-6 rounded-2xl border border-violet-500/10 bg-[#0c0c18]/40 hover:border-violet-400/25 hover:bg-violet-950/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="shimmer-text text-4xl md:text-5xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.number}
              </div>
              <div className="text-white text-sm font-semibold mb-0.5">{stat.label}</div>
              <div className="text-gray-600 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
        <div className="violet-divider max-w-7xl mx-auto mt-20" />
      </section>

      {/* ══════════════════════════════
                SERVICES
         ══════════════════════════════ */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <span className="tag-pill mb-4 inline-flex">What We Build</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Every Automation
              <span className="gradient-text-bright"> You Need</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From simple task automation to sophisticated multi-agent AI systems — we cover it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="fade-in-up group relative p-7 rounded-2xl border border-white/5 bg-[#0c0c18]/50 backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-400 hover:border-violet-500/25 hover:bg-[#10101e]/70"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`} />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-400`} />

                <div className="relative">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-violet-200 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2.5 py-0.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
              TESTIMONIALS
         ══════════════════════════════ */}
      <section id="testimonials" className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <span className="tag-pill mb-4 inline-flex">Social Proof</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Trusted by
              <span className="gradient-text-bright"> Real Businesses</span>
            </h2>
            <p className="text-gray-500 text-lg">Don't take our word for it — here's what our clients say.</p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-3xl mx-auto fade-in-up">
            <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
              {testimonials.map((t, i) => (
                <div key={i}
                  className={`absolute inset-0 transition-all duration-700 testimonial-card ${i === currentTestimonial ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 z-0 pointer-events-none'
                    }`}
                >
                  <div className="p-8 md:p-10 rounded-2xl border border-violet-500/15 bg-[#0c0c18]/70 backdrop-blur-sm">
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 text-violet-400 fill-violet-400" />
                      ))}
                    </div>

                    <p className="text-gray-200 text-lg leading-relaxed mb-7 italic">
                      "{t.content}"
                    </p>

                    <div className="flex items-center gap-4 border-t border-white/[0.06] pt-5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center text-sm font-bold text-white shrink-0">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{t.author}</p>
                        <p className="text-gray-500 text-xs">{t.role}{t.company ? ` · ${t.company}` : ''}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button onClick={() => setCurrentTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)}
                className="p-2.5 rounded-xl border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/15 text-violet-400 hover:text-violet-300 transition-all duration-200">
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrentTestimonial(i)}
                    className={`rounded-full transition-all duration-300 ${i === currentTestimonial
                      ? 'w-8 h-2.5 bg-violet-500'
                      : 'w-2.5 h-2.5 bg-white/15 hover:bg-white/30'
                      }`}
                  />
                ))}
              </div>

              <button onClick={() => setCurrentTestimonial(p => (p + 1) % testimonials.length)}
                className="p-2.5 rounded-xl border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/15 text-violet-400 hover:text-violet-300 transition-all duration-200">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
             OUR WORK TEASER
         ══════════════════════════════ */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 fade-in-up">
            <div>
              <span className="tag-pill mb-4 inline-flex">
                <FolderOpen className="w-3 h-3 text-violet-400" />
                Featured Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                What We've <span className="gradient-text-bright">Built</span>
              </h2>
            </div>
            <Link to="/projects"
              className="flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium text-sm shrink-0 transition-colors">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredProjects.map((proj, i) => (
              <div key={i}
                className="fade-in-up group relative rounded-2xl border border-white/[0.07] bg-[#0c0c18]/50 overflow-hidden hover:border-violet-500/25 transition-all duration-400 cursor-pointer"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${proj.gradient}`} />

                <div className="p-6">
                  <span className="text-[11px] text-violet-400/70 font-medium uppercase tracking-wider">{proj.category}</span>
                  <h3 className="text-base font-semibold text-white mt-2 mb-1 leading-snug group-hover:text-violet-100 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-5">{proj.client}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                    <div className="text-xs text-gray-500">
                      <span className="text-violet-300 font-semibold">{proj.result}</span>
                    </div>
                    <div className="w-7 h-7 rounded-lg border border-violet-500/20 bg-violet-500/5 flex items-center justify-center group-hover:bg-violet-500/15 transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5 text-violet-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 fade-in-up">
            <Link to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-violet-500/25 bg-violet-500/5 hover:bg-violet-500/15 hover:border-violet-400/40 text-violet-300 hover:text-white font-semibold text-sm transition-all duration-200">
              Explore All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
              CONTACT / CTA
         ══════════════════════════════ */}
      <section id="contact" className="relative z-10 px-6 py-24">
        <div className="max-w-2xl mx-auto fade-in-up">
          {/* Card */}
          <div className="relative rounded-3xl border border-violet-500/20 bg-[#0c0c18]/70 backdrop-blur-xl overflow-hidden p-8 md:p-12">
            {/* Background glow inside card */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 70%)' }} />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)' }} />
            </div>

            <div className="relative">
              <div className="text-center mb-10">
                <span className="tag-pill mb-4 inline-flex">Let's Work Together</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Ready to <span className="gradient-text-bright">Automate?</span>
                </h2>
                <p className="text-gray-500 text-base">
                  Tell us what you need. We'll build a custom solution — typically within 1–2 weeks.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-14 h-14 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Received!</h3>
                  <p className="text-gray-500 text-sm">We'll reach out within 24 hours. No commitments required.</p>
                  <button onClick={() => setFormStatus(null)} className="mt-6 px-6 py-2.5 rounded-xl border border-violet-500/25 text-violet-300 hover:text-white text-sm transition-colors">
                    Send another →
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      <User className="w-3.5 h-3.5" /> Your Name
                    </label>
                    <input
                      type="text" value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm transition-all focus:border-violet-500/50 focus:bg-white/[0.06]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      <AtSign className="w-3.5 h-3.5" /> Email Address
                    </label>
                    <input
                      type="email" value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm transition-all focus:border-violet-500/50 focus:bg-white/[0.06]"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      <Zap className="w-3.5 h-3.5" /> What to Automate <span className="text-gray-600 lowercase font-normal tracking-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={4} value={formData.automation}
                      onChange={e => setFormData({ ...formData, automation: e.target.value })}
                      placeholder="e.g. 'Automate my lead follow-up emails and CRM updates...'"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm resize-none transition-all focus:border-violet-500/50 focus:bg-white/[0.06]"
                    />
                  </div>

                  {formStatus === 'error' && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Email us directly instead.</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={formStatus === 'sending'}
                    className="btn-primary w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <>Sending… <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block" /></>
                    ) : (
                      <>Get Started <Send className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-600">
                    We respond within 24 hours · No spam, ever · No commitment required
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
                FOOTER
         ══════════════════════════════ */}
      <footer className="relative z-10 px-6 py-10 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold">
              <span className="gradient-text-bright">Krido</span>
              <span className="text-white/60"> Automations</span>
            </span>
          </div>

          <p className="text-gray-600 text-sm">Automating the future, one workflow at a time.</p>

          <p className="text-gray-700 text-xs">© 2025 Krido Automations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
