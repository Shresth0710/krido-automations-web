import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Sparkles, ArrowLeft, ExternalLink, ArrowRight,
    Mail, Bot, Workflow, TrendingUp, Zap, Code,
    Calendar, Tag
} from 'lucide-react';
import { projects as rawProjects } from './data';

/* ─────────────────────────────────────────────
   Map category → icon  (used for the badge)
───────────────────────────────────────────── */
const categoryIcon = {
    'Email Automation': <Mail className="w-5 h-5" />,
    'AI Agent': <Bot className="w-5 h-5" />,
    'Workflow Automation': <Workflow className="w-5 h-5" />,
    'SEO & Marketing': <TrendingUp className="w-5 h-5" />,
    'Python Automation': <Code className="w-5 h-5" />,
};

// Enrich the imported projects with icon (keep data.js icon-free)
const projects = rawProjects.map(p => ({
    ...p,
    icon: categoryIcon[p.category] ?? <Zap className="w-5 h-5" />,
}));

/* ─────────────────────────────────────────────
   CSS Visual Previews (stand-in for screenshots)
───────────────────────────────────────────── */
function ProjectVisual({ type, gradient }) {
    const base = "w-full h-full flex items-center justify-center relative overflow-hidden rounded-xl";

    if (type === 'email') return (
        <div className={`${base} bg-gradient-to-br ${gradient} p-4`}>
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 19px,rgba(255,255,255,0.3) 20px),repeating-linear-gradient(90deg,transparent,transparent 19px,rgba(255,255,255,0.3) 20px)'
            }} />
            <div className="relative w-full space-y-2 px-2">
                {['Welcome email · Sent', 'Day 3 follow-up · Opened', 'Day 7 case study · Clicked', 'Day 14 call invite · Replied ✓'].map((row, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className={`w-2 h-2 rounded-full shrink-0 ${i === 3 ? 'bg-green-400' : i === 2 ? 'bg-yellow-300' : 'bg-violet-300'}`} />
                        <span className="text-white/80 text-xs truncate">{row}</span>
                        <div className="ml-auto text-white/40 text-xs">{['100%', '68%', '32%', '12%'][i]}</div>
                    </div>
                ))}
                <div className="flex gap-2 pt-1">
                    <div className="flex-1 bg-white/10 rounded-lg p-2 text-center">
                        <div className="text-white font-bold text-sm">2,450</div>
                        <div className="text-white/50 text-[10px]">Emails Sent</div>
                    </div>
                    <div className="flex-1 bg-white/10 rounded-lg p-2 text-center">
                        <div className="text-white font-bold text-sm">34%</div>
                        <div className="text-white/50 text-[10px]">Open Rate</div>
                    </div>
                    <div className="flex-1 bg-white/10 rounded-lg p-2 text-center">
                        <div className="text-white font-bold text-sm">8.2%</div>
                        <div className="text-white/50 text-[10px]">Reply Rate</div>
                    </div>
                </div>
            </div>
        </div>
    );

    if (type === 'chatbot') return (
        <div className={`${base} bg-gradient-to-br ${gradient} p-4`}>
            <div className="relative w-full space-y-2">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-violet-400/30 flex items-center justify-center">
                        <Bot className="w-3.5 h-3.5 text-violet-200" />
                    </div>
                    <span className="text-white/70 text-xs font-medium">Krido AI Agent</span>
                    <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                {[
                    { from: 'bot', text: "Hi! What's your biggest sales challenge right now?" },
                    { from: 'user', text: "We struggle to follow up with leads on time." },
                    { from: 'bot', text: "Got it. How many inbound leads do you get monthly?" },
                    { from: 'user', text: "Around 200–300." },
                    { from: 'bot', text: "Perfect — you're a great fit. Booking you in now 🎯" },
                ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`text-[10px] px-2.5 py-1.5 rounded-xl max-w-[75%] ${msg.from === 'bot' ? 'bg-white/10 text-white/80' : 'bg-violet-400/30 text-white/90'
                            }`}>{msg.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );

    if (type === 'workflow') return (
        <div className={`${base} bg-gradient-to-br ${gradient} p-4`}>
            <div className="relative w-full">
                <div className="flex flex-col items-center gap-1.5">
                    {[
                        { label: 'Form Submitted', color: 'bg-violet-400' },
                        { label: 'Create Notion Project', color: 'bg-indigo-400' },
                        { label: 'Send Welcome Email', color: 'bg-purple-400' },
                        { label: 'Generate Invoice (Stripe)', color: 'bg-violet-300' },
                        { label: 'Notify Team (Slack)', color: 'bg-indigo-300' },
                    ].map((node, i) => (
                        <div key={i} className="w-full flex flex-col items-center">
                            <div className={`flex items-center gap-2 ${node.color}/20 border border-white/10 rounded-lg px-3 py-1.5 w-full backdrop-blur-sm`}>
                                <div className={`w-2 h-2 rounded-full ${node.color} shrink-0`} />
                                <span className="text-white/80 text-[10px] font-medium">{node.label}</span>
                                <div className="ml-auto text-green-400 text-[9px]">✓ Done</div>
                            </div>
                            {i < 4 && <div className="w-px h-2 bg-white/20" />}
                        </div>
                    ))}
                </div>
                <div className="mt-2 flex gap-2">
                    <div className="flex-1 bg-white/10 rounded-lg p-1.5 text-center">
                        <div className="text-white font-bold text-xs">9 Tools</div>
                        <div className="text-white/40 text-[9px]">Connected</div>
                    </div>
                    <div className="flex-1 bg-white/10 rounded-lg p-1.5 text-center">
                        <div className="text-white font-bold text-xs">0 Errors</div>
                        <div className="text-white/40 text-[9px]">This month</div>
                    </div>
                </div>
            </div>
        </div>
    );

    if (type === 'seo') return (
        <div className={`${base} bg-gradient-to-br ${gradient} p-4`}>
            <div className="relative w-full space-y-2">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-white/70 text-xs font-semibold">Weekly SEO Report — Auto Generated</span>
                </div>
                {[
                    { kw: 'automation agency', pos: 4, delta: '+3' },
                    { kw: 'email automation service', pos: 7, delta: '+5' },
                    { kw: 'workflow automation cost', pos: 12, delta: '+8' },
                ].map((row, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 rounded-lg px-2.5 py-1.5">
                        <div className="flex-1 text-white/80 text-[10px] truncate">{row.kw}</div>
                        <div className="text-white/60 text-[10px] w-8 text-right">#{row.pos}</div>
                        <div className="text-green-400 text-[10px] w-8 text-right">{row.delta}</div>
                    </div>
                ))}
                {/* Simulated mini chart */}
                <div className="bg-white/5 rounded-lg p-2 flex items-end gap-1 h-12">
                    {[30, 50, 40, 65, 55, 75, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-violet-400/60" style={{ height: `${h}%` }} />
                    ))}
                </div>
                <div className="text-white/40 text-[9px] text-right">Organic clicks — last 7 days</div>
            </div>
        </div>
    );

    return null;
}

/* ─────────────────────────────────────────────
   Project Card Component
───────────────────────────────────────────── */
function ProjectCard({ project, index }) {
    const isEven = index % 2 === 0;

    return (
        <article
            className="fade-in-up group relative rounded-2xl border border-white/[0.07] bg-[#0c0c18]/60 backdrop-blur-sm overflow-hidden hover:border-violet-500/25 transition-all duration-400"
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            {/* Top accent */}
            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${project.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-400`} />

            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                {/* Screenshot / Visual */}
                <div className="lg:w-[46%] shrink-0 relative">
                    <div className="h-56 sm:h-64 lg:h-full min-h-[220px]">
                        <ProjectVisual type={project.visual} gradient={project.gradient} />
                    </div>
                    {/* Category badge overlaid on screenshot */}
                    <div className="absolute top-4 left-4">
                        <span className="tag-pill text-[10px]">
                            {project.icon}
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-7 lg:p-10 flex flex-col justify-between">
                    <div>
                        {/* Meta row */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                                <Calendar className="w-3 h-3" />{project.date}
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-700" />
                            <div className="text-gray-600 text-xs">{project.client}</div>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-violet-100 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {project.title}
                        </h3>
                        <p className="text-violet-300/70 text-sm font-medium mb-4">{project.subtitle}</p>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">{project.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400/70">
                                    <Tag className="w-2.5 h-2.5" />{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center gap-4 pt-5 border-t border-white/[0.05]">
                        <div>
                            <div className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{project.stat1.value}</div>
                            <div className="text-gray-600 text-[11px]">{project.stat1.label}</div>
                        </div>
                        <div className="w-px h-8 bg-white/[0.07]" />
                        <div>
                            <div className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{project.stat2.value}</div>
                            <div className="text-gray-600 text-[11px]">{project.stat2.label}</div>
                        </div>
                        <div className="ml-auto">
                            <div className="w-8 h-8 rounded-xl border border-violet-500/20 bg-violet-500/5 flex items-center justify-center group-hover:bg-violet-500/15 group-hover:border-violet-400/40 transition-all duration-200">
                                <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

/* ─────────────────────────────────────────────
   Main Projects Page
───────────────────────────────────────────── */
export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Workflow Automation', 'Python Automation', 'Email Automation', 'AI Agent', 'SEO & Marketing'];

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    // Scroll fade-in
    useEffect(() => {
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.fade-in-up').forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, [activeFilter]);

    // Scroll to top on mount
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden noise-overlay">

            {/* Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="orb-1 absolute top-[-5%] right-[10%] w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 70%)' }} />
                <div className="orb-2 absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />
            </div>
            <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-40" />

            {/* ── Navbar ── */}
            <nav className="relative z-50 px-6 py-4 border-b border-violet-500/10 bg-[#050508]/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg font-semibold tracking-tight">
                            <span className="gradient-text-bright">Krido</span>
                            <span className="text-white/80"> Automations</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link to="/"
                            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        <Link to="/#contact"
                            className="px-5 py-2 text-sm font-semibold rounded-lg bg-violet-600 hover:bg-violet-500 transition-all duration-200 glow-violet-sm">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ── Hero Header ── */}
            <section className="relative z-10 px-6 pt-20 pb-16 text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="fade-in-up mb-5 flex justify-center">
                        <span className="tag-pill">
                            <Sparkles className="w-3 h-3 text-violet-400" />
                            Real Work. Real Results.
                        </span>
                    </div>
                    <h1 className="fade-in-up text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5 leading-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", transitionDelay: '0.05s' }}>
                        Past <span className="gradient-text-bright">Projects</span>
                    </h1>
                    <p className="fade-in-up text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
                        style={{ transitionDelay: '0.1s' }}>
                        A curated look at what we've built — the systems, the workflows, and the outcomes that followed.
                    </p>
                </div>
            </section>

            {/* ── Filter Tabs ── */}
            <section className="relative z-10 px-6 pb-12">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center fade-in-up">
                    {filters.map(f => (
                        <button key={f} onClick={() => setActiveFilter(f)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${activeFilter === f
                                ? 'bg-violet-600 border-violet-500 text-white glow-violet-sm'
                                : 'border-white/[0.07] bg-white/[0.02] text-gray-400 hover:border-violet-500/30 hover:text-gray-200'
                                }`}>
                            {f}
                        </button>
                    ))}
                </div>
            </section>

            {/* ── Projects List ── */}
            <section className="relative z-10 px-6 pb-24">
                <div className="max-w-6xl mx-auto space-y-6">
                    {filtered.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="text-center py-20 text-gray-600">
                        <Zap className="w-10 h-10 mx-auto mb-3 text-violet-800" />
                        <p>No projects in this category yet — check back soon.</p>
                    </div>
                )}
            </section>

            {/* ── Bottom CTA ── */}
            <section className="relative z-10 px-6 py-20 border-t border-white/[0.05]">
                <div className="max-w-2xl mx-auto text-center fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Want Results Like These?
                    </h2>
                    <p className="text-gray-500 mb-8">
                        Every project on this page started with a single conversation. Let's start yours.
                    </p>
                    <Link to="/#contact"
                        className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-base transition-all duration-200">
                        Start Your Project <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="relative z-10 px-6 py-8 border-t border-white/[0.05]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
                            <Sparkles className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm font-semibold">
                            <span className="gradient-text-bright">Krido</span>
                            <span className="text-white/60"> Automations</span>
                        </span>
                    </div>
                    <p className="text-gray-700 text-xs">© 2025 Krido Automations. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
