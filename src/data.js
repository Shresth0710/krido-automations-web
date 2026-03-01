/*
 * ═══════════════════════════════════════════════════════
 *   KRIDO AUTOMATIONS — CONTENT DATA FILE
 *   Edit this file to manage all website content.
 *   No need to touch any other files.
 * ═══════════════════════════════════════════════════════
 *
 *  ┌─────────────────────────────────────────────────────┐
 *  │  HOW TO ADD A TESTIMONIAL:                          │
 *  │  Copy one block inside `testimonials` array,        │
 *  │  paste it at the end (before the ] ), and fill in   │
 *  │  your values. Set rating to 5 for 5 stars.          │
 *  │                                                     │
 *  │  HOW TO ADD A PROJECT:                              │
 *  │  Copy one block inside `projects` array,            │
 *  │  paste it at the end (before the ] ), and fill in   │
 *  │  your values.                                       │
 *  │                                                     │
 *  │  Project `visual` options (CSS previews):           │
 *  │    'email' | 'chatbot' | 'workflow' | 'seo'         │
 *  │  Or set `screenshot` to a path in /public for a     │
 *  │  real image, e.g. screenshot: '/images/proj1.png'   │
 *  └─────────────────────────────────────────────────────┘
 */

// ─────────────────────────────────────────────
//  TESTIMONIALS
//  Displayed on the homepage carousel.
// ─────────────────────────────────────────────
export const testimonials = [
    {
        content:
            "Earlier, our team was spending nearly 20 hours a week sending 1,000+ emails manually. Krido automated the entire process end-to-end, saving us significant time and bringing real structure and efficiency to our outreach.",
        author: "Connor",
        role: "Founder",
        company: "Marketing Agency",
        rating: 5,
    },
    {
        content:
            "Krido built a fully customized WhatsApp bot for us that sends repeated, personalized messages on a predefined schedule. It has streamlined our communication and saved us 10+ hours every week.",
        author: "Muller",
        role: "Founder",
        company: "",
        rating: 5,
    },
    {
        content:
            "Krido automated our entire medical surgery documentation workflow. They built a system that accurately summarizes each medical log and automatically delivers it via email — eliminating manual effort and ensuring timely, consistent communication. It has significantly improved our operational efficiency.",
        author: "Raj",
        role: "MD",
        company: "Medical Eye Clinic",
        rating: 5,
    },
    // ── ADD MORE TESTIMONIALS BELOW ─────────────
    // {
    //   content: "Your client quote here...",
    //   author: "First Last",
    //   role: "Job Title",
    //   company: "Company Name",
    //   rating: 5,
    // },
];

// ─────────────────────────────────────────────
//  PROJECTS
//  Displayed on the /projects page.
//
//  CATEGORY OPTIONS (used for filter tabs):
//    'Email Automation' | 'AI Agent' |
//    'Workflow Automation' | 'SEO & Marketing'
//
//  VISUAL OPTIONS (built-in CSS previews):
//    'email' | 'chatbot' | 'workflow' | 'seo'
//
//  GRADIENT OPTIONS (mix & match Tailwind classes):
//    'from-violet-600 via-purple-700 to-indigo-800'
//    'from-purple-700 via-violet-700 to-indigo-700'
//    'from-indigo-700 via-violet-600 to-purple-700'
//    'from-violet-800 via-purple-700 to-violet-600'
// ─────────────────────────────────────────────
export const projects = [
    {
        id: 1,
        category: "Workflow Automation",
        client: "Connor",
        title: "Email Outreach Automation",
        subtitle: "Intelligent outreach automation with real-time personalization.",
        description:
            "We engineered a sophisticated outreach automation system that transforms raw lead data into deeply personalized, insight-driven email campaigns at scale. The workflow captures live website screenshots, enriches prospects with real-time keyword intelligence, and generates tailored messaging powered by AI. Each email delivers the precision of manual research while running fully automated, driving measurable engagement and pipeline growth.",
        tags: ["n8n", "Gmail", "Firecrawl", "Gemini", "Custom APIs"],
        date: "Mar 2025",
        gradient: "from-violet-600 via-purple-700 to-indigo-800",
        visual: "email",        // CSS preview style
        screenshot: null,       // set to '/images/proj1.png' for a real screenshot
        stat1: { label: "Hours saved / week", value: "25+" },
        stat2: { label: "Response Rate Increase", value: "3×" },
    },
    {
        id: 2,
        category: "Python Automation",
        client: "Raj",
        title: "Automated Medical AI Summarization",
        subtitle: "AI-powered clinical documentation and secure record enhancement.",
        description:
            "We built a secure Python-based automation system for a medical eye clinic that generates detailed AI-powered summaries for every medical log and prescription. Each summary is structured in a personalized, clinic-approved format and automatically attached to patient records and communications. The solution streamlined documentation workflows, improved record accuracy, and enhanced operational efficiency while maintaining strict data security and compliance standards.",
        tags: ["Python", "Gemini", "Gmail API"],
        date: "May 2025",
        gradient: "from-rose-600 via-pink-700 to-red-800",
        visual: "workflow",
        screenshot: null,
        stat1: { label: "Hours saved / week", value: "40+" },
        stat2: { label: "Documentation Efficiency", value: "3×" },
    },
    {
        id: 3,
        category: "Workflow Automation",
        client: "Muller",
        title: "Personalized WhatsApp Chat Sender",
        subtitle: "Structured WhatsApp automation with response capture and timestamp tracking.",
        description:
            "We developed a personalized WhatsApp automation system that delivers structured, button-based conversations at scale. The chatbot sends tailored messages, guides users through predefined response flows, and captures replies with accurate timestamps for operational tracking. This enabled the client to standardize communication, reduce manual follow-ups, and gain real-time visibility into user interactions, resulting in streamlined operations and measurable efficiency gains.",
        tags: ["n8n", "WhatsApp API", "Meta"],
        date: "Apr 2025",
        gradient: "from-emerald-600 via-teal-700 to-cyan-800",
        visual: "chatbot",
        screenshot: null,
        stat1: { label: "Hours saved / week", value: "20+" },
        stat2: { label: "Efficiency Improvement", value: "1.2×" },
    },
    // ── ADD MORE PROJECTS BELOW ──────────────────
    // {
    //   id: 4,
    //   category: "Workflow Automation",   // pick from category list above
    //   client: "Client Name",
    //   title: "Project Title",
    //   subtitle: "One-line summary of the project.",
    //   description:
    //     "3-4 sentences describing what was built, how it works, and the outcome.",
    //   tags: ["Tool1", "Tool2", "Tool3"],
    //   date: "Jun 2025",
    //   gradient: "from-violet-600 via-purple-700 to-indigo-800",
    //   visual: "workflow",   // 'email' | 'chatbot' | 'workflow' | 'seo'
    //   screenshot: null,     // or '/images/project-name.png'
    //   stat1: { label: "Metric label", value: "Value" },
    //   stat2: { label: "Metric label", value: "Value" },
    // },
];

// ─────────────────────────────────────────────
//  HOMEPAGE — FEATURED PROJECTS TEASER (3 max)
//  These appear in the "What We've Built" section
//  on the homepage. Just reference projects by id.
// ─────────────────────────────────────────────
export const featuredProjectIds = [1, 2, 3];

