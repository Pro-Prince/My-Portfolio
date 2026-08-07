import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useDynamicTitle } from '../hooks/useDynamicTitle';

const projects = [
  {
    id: "01",
    category: "chrome",
    categoryBadge: "Chrome Extension",
    categoryBadgeStyle: "bg-cyan-400/10 text-[#22D3EE] text-[10px] font-bold uppercase",
    status: "Shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    title: "HoverPick",
    tagline: "Precision color extraction from any webpage, in real time.",
    description: "HoverPick is a Chrome extension built for designers, developers, and creators who need to extract exact colors from websites, images, videos, and UI elements without leaving the browser. Built with a screen-capture pixel sampling engine that reads actual rendered pixels rather than relying on DOM styles, giving true pixel-accurate results every time.",
    challenges: ["Screen-capture pixel sampling", "Real-time rendering performance", "Pixel-precision magnifier UI", "Auto-exit workflow"],
    tech: ["JavaScript", "HTML", "CSS", "Chrome MV3", "Canvas API", "Screen Capture API", "Offscreen Documents", "Service Worker"],
    github: "https://github.com/Pro-Prince/HoverPick"
  },
  {
    id: "02",
    category: "chrome",
    categoryBadge: "Chrome Extension",
    categoryBadgeStyle: "bg-cyan-400/10 text-[#22D3EE] text-[10px] font-bold uppercase",
    status: "Shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    title: "VTT — Vision to Text",
    tagline: "Select any screen area. Get the text instantly.",
    description: "VTT removes the screenshot-upload-OCR workflow entirely. Press Ctrl+Shift+X, drag to select any visible region of any webpage, and the extension extracts the text, cleans the formatting, and copies it to the clipboard automatically. Works on images, PDFs, videos, infographics, rendered web content, and AI interfaces. All processing is fully local — nothing ever leaves the device.",
    challenges: ["Hybrid DOM and OCR extraction", "Smart formatting preservation", "Manifest V3 offscreen architecture", "Multi-language support (English, Hindi, Gujarati)"],
    tech: ["JavaScript", "Chrome MV3", "Tesseract.js", "Canvas API", "Service Workers", "Offscreen Documents", "Clipboard API", "Runtime Messaging"],
    github: "https://github.com/Pro-Prince/vtt-vision-to-text"
  },
  {
    id: "03",
    category: "web",
    categoryBadge: "Web App",
    categoryBadgeStyle: "bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase",
    status: "Shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    title: "Soul Sync — Web",
    tagline: "AI-powered emotional wellness journal and reflection platform.",
    description: "Soul Sync is a web application designed as a private emotional companion. Users write diary entries with rich text, track daily moods, receive personalized Gemini AI reflections, view emotional analytics, track menstrual cycles, store memories, and switch between five premium themes. Designed with Apple Health inspired minimalism — calm, intentional, distraction-free.",
    challenges: ["AI reflection with context memory", "Cycle tracking with emotional correlation", "Five-theme system with dark mode", "Supabase Row Level Security implementation"],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "Google Gemini AI", "PostgreSQL", "Framer Motion"],
    github: "https://github.com/Pro-Prince/yoursoulsync",
    demo: "https://yoursoulsync.lovable.app"
  },
  {
    id: "04",
    category: "web",
    categoryBadge: "Web App",
    categoryBadgeStyle: "bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase",
    status: "Shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    title: "Life Tracker — LifeOS",
    tagline: "Your personal operating system for habits, finances, and health.",
    description: "Life Tracker is a full-stack personal management platform unifying three life domains. Spreadsheet-style habit grids with streak tracking and heatmaps, monthly expense reports with category breakdowns, nutrition and workout logging with macro tracking, and analytics dashboards that turn raw daily data into actionable personal growth insights.",
    challenges: ["Spreadsheet-style habit grid architecture", "Nutrition estimation engine from food entries", "Three-module unified UX design", "Analytics aggregation with heatmaps"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL", "Recharts", "Google OAuth", "Email Auth", "Row Level Security"],
    github: "https://github.com/Pro-Prince/yourlifetracker",
    demo: "https://yourlifetracker.lovable.app"
  },
  {
    id: "05",
    category: "android",
    categoryBadge: "Android",
    categoryBadgeStyle: "bg-orange-500/10 text-[#F59E0B] text-[10px] font-bold uppercase",
    status: "Shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    title: "Soul Sync — Android",
    tagline: "Your personal AI-powered emotional wellness sanctuary.",
    description: "Soul Sync Android is a native emotional wellness app built in Kotlin and Jetpack Compose, combining private journaling, AI emotional reflection, mood tracking, cycle awareness, memory scrapbook, achievements, and secure cloud sync into one calming offline-first sanctuary. An AI reflection engine analyzes journal entries and returns personalized, supportive responses instead of generic sentiment output, while Room Database and DataStore keep the full experience working without a connection.",
    challenges: ["AI-powered emotional reflection engine", "Offline-first Room database architecture", "Narrative mood analytics over raw numbers", "User-isolated data privacy architecture", "Cycle tracking with emotional correlation"],
    tech: ["Kotlin", "Jetpack Compose", "Material Design", "MVVM", "Repository Pattern", "Room Database", "Android DataStore", "Supabase", "PostgreSQL", "Dependency Injection"],
    github: "https://github.com/Pro-Prince/Soul-Sync-Android-App"
  },
  {
    id: "06",
    category: "web",
    categoryBadge: "Web App",
    categoryBadgeStyle: "bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase",
    status: "Shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    title: "Amul Kool Gold",
    tagline: "Cinematic scroll-driven D2C storefront. Built to be clicked, not just scrolled.",
    description: "A fully-functional concept storefront built around a premium dairy beverage line. Unlike portfolio pieces that stop at a hero section, this ships an entire simulated commerce loop — a cinematic scroll-driven hero, a four-flavour catalog with pricing tiers, a working cart with live subtotal updates, a three-step checkout with field validation, and a branded trial-payment intercept with a full simulated receipt. Built to prove product-engineering competency, not just visual layout.",
    challenges: ["Scroll-driven canvas production failures", "Static mockup vs real commerce logic", "Simulated checkout without deceptive UX", "Consistent AI-generated product photography", "Navbar scene-continuous scroll transition"],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Context", "Scroll-Frame Animation", "Vercel", "Google AI Studio"],
    github: "https://github.com/Pro-Prince/Amul-Kool-Website",
    demo: "https://amul-kool-gold-website.vercel.app/"
  },
  {
    id: "07",
    category: "web",
    categoryBadge: "Web App",
    categoryBadgeStyle: "bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase",
    status: "Shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    title: "PDF Craft",
    tagline: "The simplest way to edit, annotate, and manage PDFs online.",
    description: "PDF Craft is a modern, browser-based PDF editor built to make document editing fast, visual, and clutter-free. Instead of forcing users into desktop software or paywalled tools, it delivers a complete annotation and editing suite directly in the browser — upload, edit, sign, redact, and download, all without installing anything. Every tool works directly on the rendered page with no separate 'annotation mode', so what you place is what ends up in the final file. A persistent document library with live thumbnails and continuous autosave means nothing is ever lost between sessions.",
    challenges: ["Full annotation suite with zero paywalls", "Every tool verified end-to-end", "In-browser signature pad — draw, upload, or type", "Pixel-perfect export via pdf-lib flattening", "Persistent library with autosave and thumbnails"],
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "pdf.js", "pdf-lib", "Google OAuth", "Row Level Security", "Vercel"],
    github: "https://github.com/Pro-Prince/PDF-Craft",
    demo: "https://your-pdf-craft.vercel.app/"
  },
  {
    id: "08",
    category: "ai-product",
    categoryBadge: "AI Product",
    categoryBadgeStyle: "bg-[rgba(167,139,250,0.1)] text-[#A78BFA] text-[10px] font-bold uppercase",
    status: "Shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    title: "Interview Answer Auditor",
    tagline: "A custom GPT that audits interview answers like a skeptical interviewer, not a hype machine.",
    description: "Interview Answer Auditor is a custom GPT built on OpenAI's GPT platform that gives engineering students honest, structured feedback on placement interview answers. Instead of generic praise, it scores each answer, quotes back the exact weak line, explains why it fails, rewrites it using STAR structure, and predicts the follow-up question a real interviewer would ask to test whether the answer was memorized or genuinely understood. An optional Brutal Mode strips the softened rewrite for a blunt readiness verdict.",
    challenges: ["Fixed audit format via system instructions", "Multi-turn follow-up chain up to 3 levels deep", "Brutal Mode as opt-in toggle not default tone", "Zero fabricated achievements rule", "Company-tier calibrated feedback"],
    tech: ["OpenAI GPT Builder", "Prompt Engineering", "Custom Instructions", "Knowledge Base Curation", "Multi-Turn State Design", "GPT Store"],
    gptLink: "https://chatgpt.com/g/g-6a756f5c7d6c81918067354f1bc5116c-interview-answer-auditor"
  }
];

export default function Projects() {
  useDynamicTitle('Projects — Prince Patel');
  const [filter, setFilter] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");
  const [fading, setFading] = useState(false);

  const filteredProjects = projects.filter(p => activeFilter === "all" || p.category === activeFilter);
  const filteredCount = filteredProjects.length;

  const handleFilterClick = (newFilter: string) => {
    if (newFilter === filter) return;
    setFilter(newFilter);
    setFading(true);
    setTimeout(() => {
      setActiveFilter(newFilter);
      setFading(false);
    }, 150);
  };

  return (
    <main className="pt-24 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-[10px] font-bold tracking-[0.2em] text-[#6366F1] uppercase mb-3">PORTFOLIO</div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3">All Projects</h1>
          <p className="text-xl text-[#A3A3A3]">Everything I've built and shipped.</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { id: 'all', label: 'All' },
              { id: 'chrome', label: 'Chrome Extensions' },
              { id: 'web', label: 'Web Apps' },
              { id: 'android', label: 'Android' },
              { id: 'ai-product', label: 'AI Products' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => handleFilterClick(tab.id)}
                className={`rounded-full px-5 py-2 text-sm transition-colors ${
                  filter === tab.id
                    ? 'bg-[#6366F1] text-white font-medium'
                    : 'bg-[#111111] border border-[#262626] text-[#A3A3A3] hover:border-[#6366F1] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-[#525252] mb-6 mt-2">
            Showing {filteredCount} project{filteredCount !== 1 ? 's' : ''}
          </p>
        </FadeIn>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-200 ${fading ? 'opacity-0' : 'opacity-100'}`}>
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <div data-category={project.category} className="project-card p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className={`${project.categoryBadgeStyle} rounded-full px-3 py-1`}>{project.categoryBadge}</span>
                  <span className={`${project.statusBadgeStyle} rounded-full px-3 py-1 flex items-center`}>{project.status}</span>
                </div>
              
              <div className="text-5xl font-extrabold text-[#1A1A1A] mb-2">{project.id}</div>
              <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
              <p className="text-sm text-[#6366F1] font-medium mb-4">{project.tagline}</p>
              <p className="text-[#A3A3A3] text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>
              
              <div className="border-t border-[#1F1F1F]"></div>
              
              <div className="mt-4 mb-4">
                <div className="text-xs tracking-widest text-[#525252] uppercase mb-2">SOLVED</div>
                <div className="flex flex-wrap gap-2">
                  {project.challenges.map((c, i) => (
                    <span key={i} className="bg-[#1A1A1A] border border-[#1F1F1F] text-[#A3A3A3] text-xs rounded-full px-3 py-1">{c}</span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-[#1F1F1F]"></div>
              
              <div className="mt-4 mb-5">
                <div className="text-xs tracking-widest text-[#525252] uppercase mb-2">BUILT WITH</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag text-[10px] font-mono px-2 py-0.5 rounded-full uppercase">{t}</span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto flex flex-row gap-2 mt-4">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.3)] hover:bg-[rgba(99,102,241,0.15)] hover:border-[#6366F1] text-[#6366F1] rounded-lg px-3 py-2 transition-colors text-sm whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Live Demo &rarr;
                  </a>
                )}
                {project.gptLink && (
                  <a href={project.gptLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.3)] hover:bg-[rgba(99,102,241,0.15)] hover:border-[#6366F1] text-[#6366F1] rounded-[8px] px-3 py-2 transition-colors text-sm whitespace-nowrap">
                    <ExternalLink size={14} className="mr-1.5" />
                    Try the GPT &rarr;
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className={`flex-1 flex items-center justify-center bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-[8px] px-3 py-2 transition-colors text-sm whitespace-nowrap`}>
                    View on GitHub &rarr;
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
