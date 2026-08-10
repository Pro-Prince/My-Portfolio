export type ProjectCategory = 'chrome' | 'web' | 'android' | 'ai-tool';
export type ProjectStatus = 'shipped' | 'in-progress';

export interface ProjectData {
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  dateAdded: string;
  order: number;
}

// To add a new project in the future: append it to
// this array with an accurate dateAdded. The Footer
// will automatically update to show it among the
// 5 most recent, with no other manual changes needed.
export const projects: ProjectData[] = [
  {
    name: "HoverPick",
    category: "chrome",
    status: "shipped",
    githubUrl: "https://github.com/Pro-Prince/HoverPick",
    dateAdded: "2023-01-01",
    order: 1
  },
  {
    name: "VTT — Vision to Text",
    category: "chrome",
    status: "shipped",
    githubUrl: "https://github.com/Pro-Prince/vtt-vision-to-text",
    dateAdded: "2023-02-01",
    order: 2
  },
  {
    name: "Soul Sync — Web",
    category: "web",
    status: "shipped",
    liveUrl: "https://yoursoulsync.lovable.app",
    githubUrl: "https://github.com/Pro-Prince/yoursoulsync",
    dateAdded: "2023-03-01",
    order: 3
  },
  {
    name: "Life Tracker — LifeOS",
    category: "web",
    status: "shipped",
    liveUrl: "https://yourlifetracker.lovable.app",
    githubUrl: "https://github.com/Pro-Prince/yourlifetracker",
    dateAdded: "2023-04-01",
    order: 4
  },
  {
    name: "Soul Sync — Android",
    category: "android",
    status: "shipped",
    githubUrl: "https://github.com/Pro-Prince/Soul-Sync-Android-App",
    dateAdded: "2023-05-01",
    order: 5
  },
  {
    name: "Amul Kool Gold",
    category: "web",
    status: "shipped",
    liveUrl: "https://amul-kool-gold-website.vercel.app/",
    githubUrl: "https://github.com/Pro-Prince/Amul-Kool-Website",
    dateAdded: "2023-06-01",
    order: 6
  },
  {
    name: "PDF Craft",
    category: "web",
    status: "shipped",
    liveUrl: "https://your-pdf-craft.vercel.app/",
    githubUrl: "https://github.com/Pro-Prince/PDF-Craft",
    dateAdded: "2023-07-01",
    order: 7
  },
  {
    name: "Interview Answer Auditor",
    category: "ai-tool",
    status: "shipped",
    liveUrl: "https://chatgpt.com/g/g-6a756f5c7d6c81918067354f1bc5116c-interview-answer-auditor",
    dateAdded: "2023-08-01",
    order: 8
  },
  {
    name: "Aura Weather",
    category: "web",
    status: "shipped",
    liveUrl: "https://aura-weather-sync.vercel.app/",
    githubUrl: "https://github.com/Pro-Prince/Aura-Weather",
    dateAdded: "2026-08-09",
    order: 9
  }
];
