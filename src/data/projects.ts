export type ProjectCategory = 'chrome' | 'web' | 'android' | 'ai-tool' | 'ai-product' | 'ai-companion' | 'computer-vision' | 'desktop-app' | 'game';
export type ProjectStatus = 'shipped' | 'in-progress';

export interface ProjectData {
  name: string;
  category: ProjectCategory;
  categoryBadge?: string;
  categoryBadgeStyle?: string;
  status: ProjectStatus;
  statusBadgeStyle?: string;
  liveUrl?: string;
  demoLabel?: string;
  githubUrl?: string;
  gptLink?: string;
  dateAdded: string;
  order: number;
  tagline?: string;
  shortDescription?: string;
  description?: string;
  challenges?: string[];
  tech?: string[];
}

// To add a new project in the future: append it to
// this array with an accurate dateAdded. Both the Footer (top 5)
// and the Homepage Featured Work (top 6) will automatically
// display it newest-first with no manual template changes needed.
export const projects: ProjectData[] = [
  {
    name: "HoverPick",
    category: "chrome",
    categoryBadge: "Chrome Extension",
    categoryBadgeStyle: "bg-cyan-400/10 text-[#22D3EE] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    githubUrl: "https://github.com/Pro-Prince/HoverPick",
    dateAdded: "2023-01-01",
    order: 1,
    tagline: "Precision color extraction from any webpage, in real time.",
    shortDescription: "A precision color picker that extracts exact colors from any website in real time. Pixel-level magnification, HEX and RGB support, one-click copying, zero workflow interruption.",
    tech: ["JavaScript", "Chrome MV3", "Canvas API", "Screen Capture"]
  },
  {
    name: "VTT - Vision to Text",
    category: "chrome",
    categoryBadge: "Chrome Extension",
    categoryBadgeStyle: "bg-cyan-400/10 text-[#22D3EE] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    githubUrl: "https://github.com/Pro-Prince/vtt-vision-to-text",
    dateAdded: "2023-02-01",
    order: 2,
    tagline: "Select any screen area. Get the text instantly.",
    shortDescription: "Select any screen region to extract formatted text instantly using local OCR. Works on images, videos, and rendered canvases without leaving the browser.",
    tech: ["JavaScript", "Chrome MV3", "Tesseract.js", "Canvas API"]
  },
  {
    name: "Soul Sync - Web",
    category: "web",
    categoryBadge: "Web App",
    categoryBadgeStyle: "bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://yoursoulsync.lovable.app",
    githubUrl: "https://github.com/Pro-Prince/yoursoulsync",
    dateAdded: "2023-03-01",
    order: 3,
    tagline: "AI-powered emotional wellness journal and reflection platform.",
    shortDescription: "AI-powered emotional wellness platform. Journaling, mood tracking, Gemini AI reflections, and emotional analytics - all in one calm digital sanctuary. Built for web and Android.",
    tech: ["React", "TypeScript", "Supabase", "Gemini AI", "Kotlin"]
  },
  {
    name: "Life Tracker - LifeOS",
    category: "web",
    categoryBadge: "Web App",
    categoryBadgeStyle: "bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://yourlifetracker.lovable.app",
    githubUrl: "https://github.com/Pro-Prince/yourlifetracker",
    dateAdded: "2023-04-01",
    order: 4,
    tagline: "Your personal operating system for habits, finances, and health.",
    shortDescription: "A full-stack personal OS unifying habit tracking, expense management, and health analytics into a single intelligent dashboard with real-time insights.",
    tech: ["React", "TypeScript", "Supabase", "Recharts", "PostgreSQL"]
  },
  {
    name: "Soul Sync - Android",
    category: "android",
    categoryBadge: "Android",
    categoryBadgeStyle: "bg-orange-500/10 text-[#F59E0B] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    githubUrl: "https://github.com/Pro-Prince/Soul-Sync-Android-App",
    dateAdded: "2023-05-01",
    order: 5,
    tagline: "Your personal AI-powered emotional wellness sanctuary.",
    shortDescription: "Native Android emotional wellness app in Kotlin & Jetpack Compose. Offline-first Room DB, personalized AI reflections, and narrative mood trends.",
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "Supabase", "Material 3"]
  },
  {
    name: "Amul Kool Gold",
    category: "web",
    categoryBadge: "Web App",
    categoryBadgeStyle: "bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-[#052E16] text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://amul-kool-gold-website.vercel.app/",
    githubUrl: "https://github.com/Pro-Prince/Amul-Kool-Website",
    dateAdded: "2023-06-01",
    order: 6,
    tagline: "Cinematic scroll-driven D2C storefront. Built to be clicked, not just scrolled.",
    shortDescription: "A cinematic scroll-driven D2C concept storefront for a premium dairy beverage. Frame-sequence hero animation scrubbed by scroll, live cart, three-step checkout, and complete order simulation.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"]
  },
  {
    name: "PDF Craft",
    category: "web",
    categoryBadge: "Web App",
    categoryBadgeStyle: "bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-[#052E16] text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://your-pdf-craft.vercel.app/",
    githubUrl: "https://github.com/Pro-Prince/PDF-Craft",
    dateAdded: "2023-07-01",
    order: 7,
    tagline: "The simplest way to edit, annotate, and manage PDFs online.",
    shortDescription: "A browser-based PDF editor with a full annotation toolkit - edit text, sign, redact, stamp, and export a flattened high-fidelity PDF without installing anything. Documents autosave to secure library.",
    tech: ["React", "Supabase", "pdf.js", "pdf-lib", "Tailwind CSS"]
  },
  {
    name: "Interview Answer Auditor",
    category: "ai-product",
    categoryBadge: "AI Product",
    categoryBadgeStyle: "bg-[rgba(167,139,250,0.1)] text-[#A78BFA] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-[#052E16] text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://chatgpt.com/g/g-6a756f5c7d6c81918067354f1bc5116c-interview-answer-auditor",
    gptLink: "https://chatgpt.com/g/g-6a756f5c7d6c81918067354f1bc5116c-interview-answer-auditor",
    demoLabel: "Try the GPT →",
    dateAdded: "2023-08-01",
    order: 8,
    tagline: "A custom GPT that audits interview answers like a skeptical interviewer, not a hype machine.",
    shortDescription: "A custom GPT that audits placement interview answers like a skeptical interviewer, not a hype machine. Scores each answer, flags the exact weak line, rewrites it, and predicts follow-up questions.",
    tech: ["Prompt Engineering", "GPT Builder", "Custom Instructions", "Knowledge Base"]
  },
  {
    name: "Aura Weather",
    category: "web",
    categoryBadge: "Web App",
    categoryBadgeStyle: "bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://aura-weather-sync.vercel.app/",
    githubUrl: "https://github.com/Pro-Prince/Aura-Weather",
    dateAdded: "2026-08-09",
    order: 9,
    tagline: "A glassmorphic weather app that costs nothing to run.",
    shortDescription: "A glassmorphic browser weather app that costs nothing to run. Client-side Open-Meteo queries, dynamic sunrise/sunset gradient shifts, live particle weather states, and installable PWA shell.",
    tech: ["React", "Vite", "Tailwind CSS", "Open-Meteo API", "vite-plugin-pwa", "Vercel"]
  },
  {
    name: "Lyra",
    category: "ai-companion",
    categoryBadge: "AI Companion",
    categoryBadgeStyle: "bg-[rgba(244,114,182,0.1)] text-[#F472B6] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://lyra-companion.vercel.app/",
    githubUrl: "https://github.com/Pro-Prince/Lyra",
    dateAdded: "2026-08-19",
    order: 10,
    tagline: "The AI companion that listens, remembers, and responds when you need to talk.",
    shortDescription: "Modern AI companion web app built around an expressive 3D anime character rendered in real time. Voice, memory, emotion-driven expressions and gestures, and an interactive 3D living room.",
    tech: ["React", "Three.js", "Three-VRM", "Gemini Flash", "Web Speech API", "Supabase"]
  },
  {
    name: "Indoor Digital Twin",
    category: "computer-vision",
    categoryBadge: "Computer Vision",
    categoryBadgeStyle: "bg-[rgba(45,212,191,0.1)] text-[#2DD4BF] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-green-950 text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://digital-twin-viewer-system.vercel.app/",
    githubUrl: "https://github.com/Pro-Prince/digital-twin-viewer",
    dateAdded: "2026-09-05",
    order: 11,
    tagline: "Turns a phone video walkthrough into a labeled, interactive 3D model of a real room.",
    shortDescription: "Turns an ordinary smartphone video walkthrough into an interactive, semantically labeled 3D point cloud of a room using Structure-from-Motion and SegFormer. No LiDAR required.",
    tech: ["React", "TypeScript", "Three.js", "COLMAP", "SegFormer", "Supabase Storage"]
  },
  {
    name: "Peeky Task",
    category: "desktop-app",
    categoryBadge: "Desktop App",
    categoryBadgeStyle: "bg-[rgba(251,146,60,0.1)] text-[#FB923C] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-[#052E16] text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://peeky-task.vercel.app/",
    demoLabel: "Web Showcase →",
    githubUrl: "https://github.com/Pro-Prince/peeky-task-app",
    dateAdded: "2026-10-23",
    order: 12,
    tagline: "A screen-edge floating task widget for Windows that stays out of your way until you need it.",
    shortDescription: "A minimalist, transparent daily task widget for Windows 10/11 built with Electron. Collapses to 7px pills against screen bezel; fans out into interactive sticky tabs on hover. Certified MSIX.",
    tech: ["Electron 33", "Node.js", "JavaScript", "MSIX", "Next.js 16", "Tailwind CSS"]
  },
  {
    name: "Coast Horizon",
    category: "game",
    categoryBadge: "Game",
    categoryBadgeStyle: "bg-[rgba(234,179,8,0.1)] text-[#EAB308] text-[10px] font-bold uppercase",
    status: "shipped",
    statusBadgeStyle: "bg-[#052E16] text-[#22C55E] text-[10px] font-bold uppercase",
    liveUrl: "https://coast-horizon.vercel.app/",
    demoLabel: "Play Live →",
    githubUrl: "https://github.com/Pro-Prince/coast-horizon",
    dateAdded: "2026-10-25",
    order: 13,
    tagline: "Take the scenic route. A peaceful retro-arcade coastal driving game, solo or with a friend.",
    shortDescription: "A high-performance 3D coastal driving game built with web standards and zero engine dependencies. Procedural vehicle, 10km Catmull-Rom highway, synthesized Web Audio combustion engine, and 20 Hz multiplayer.",
    tech: ["Three.js", "WebGL", "Web Audio API", "WebSockets", "GLSL Shaders", "Vercel"]
  }
];
