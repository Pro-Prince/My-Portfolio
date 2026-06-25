import { useState } from 'react';

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
    title: "SoulSync — Web",
    tagline: "AI-powered emotional wellness journal and reflection platform.",
    description: "SoulSync is a web application designed as a private emotional companion. Users write diary entries with rich text, track daily moods, receive personalized Gemini AI reflections, view emotional analytics, track menstrual cycles, store memories, and switch between five premium themes. Designed with Apple Health inspired minimalism — calm, intentional, distraction-free.",
    challenges: ["AI reflection with context memory", "Cycle tracking with emotional correlation", "Five-theme system with dark mode", "Supabase Row Level Security implementation"],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "Google Gemini AI", "PostgreSQL", "Framer Motion"],
    github: "https://github.com/Pro-Prince/yoursoulsync"
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
    github: "https://github.com/Pro-Prince/yourlifetracker"
  },
  {
    id: "05",
    category: "android",
    categoryBadge: "Android",
    categoryBadgeStyle: "bg-orange-500/10 text-[#F59E0B] text-[10px] font-bold uppercase",
    status: "In Progress",
    statusBadgeStyle: "bg-orange-950 text-[#F59E0B] text-[10px] font-bold uppercase",
    title: "SoulSync — Android",
    tagline: "Native emotional wellness OS built for Android.",
    description: "The native Android version of SoulSync, rebuilt from scratch with Kotlin and Jetpack Compose. Offline-first architecture with local encrypted storage, Gemini AI integration for journal reflections, mood tracking, cycle tracking, and a calming Material 3 interface inspired by Apple Journal and Apple Health.",
    challenges: ["Offline-first Room database architecture", "Local AES encryption", "Gemini AI on Android", "MVVM with Kotlin Coroutines and Flow"],
    tech: ["Kotlin", "Jetpack Compose", "Room Database", "Gemini AI", "MVVM", "WorkManager", "Hilt DI", "Material 3", "Kotlin Coroutines", "Kotlin Flow"],
    github: "https://github.com/Pro-Prince/Soul-Sync-Android-App"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(p => filter === "all" || p.category === filter);

  return (
    <main className="pt-24 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[10px] font-bold tracking-[0.2em] text-[#6366F1] uppercase mb-3">PORTFOLIO</div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3">All Projects</h1>
        <p className="text-xl text-[#A3A3A3]">Everything I've built and shipped.</p>

        <div className="mt-10 mb-12 flex flex-wrap gap-3">
          {[
            { id: 'all', label: 'All' },
            { id: 'chrome', label: 'Chrome Extensions' },
            { id: 'web', label: 'Web Apps' },
            { id: 'android', label: 'Android' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} data-category={project.category} className="project-card p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <span className={`${project.categoryBadgeStyle} rounded-full px-3 py-1`}>{project.categoryBadge}</span>
                <span className={`${project.statusBadgeStyle} rounded-full px-3 py-1`}>{project.status}</span>
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
              
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-transparent border border-[#3F3F46] text-[#FAFAFA] rounded-[8px] px-5 py-2.5 hover:border-[#6366F1] transition-colors text-sm font-semibold mt-auto">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
