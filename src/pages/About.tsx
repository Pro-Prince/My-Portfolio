import { Github, Linkedin, Instagram, Puzzle, Bot, Zap } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useDynamicTitle } from '../hooks/useDynamicTitle';
import XLogo from '../components/XLogo';

export default function About() {
  useDynamicTitle('About — Prince Patel');

  return (
    <main className="pt-24 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* INTRO SECTION */}
        <div className="py-24 grid grid-cols-1 md:grid-cols-[38%_62%] gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="text-center">
            <div style={{ borderRadius: '50%', background: '#1A1A1A', border: '4px solid rgba(99,102,241,0.25)', boxShadow: '0 0 50px rgba(99,102,241,0.1)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="mx-auto flex-shrink-0 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px]">
              <img src="/prince-photo.jpg" alt="Prince Patel" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="mt-8 font-bold text-2xl text-white">Prince Patel</div>
            <div className="text-base text-[#6366F1] mt-1">AI-Powered Product Developer</div>
            <div className="mt-6 flex justify-center gap-4">
              <a href="https://github.com/Pro-Prince" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1A1A1A] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/prince-patel476/" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1A1A1A] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Pro_Prince_1" aria-label="X / Twitter profile" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1A1A1A] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <XLogo size={20} />
              </a>
              <a href="https://www.instagram.com/pro.prince.1/" aria-label="Instagram profile" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1A1A1A] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* RIGHT COLUMN */}
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#6366F1] mb-3">ABOUT ME</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
              AI-Powered Product Developer.
            </h1>
            <p className="text-[#A3A3A3] leading-relaxed mb-5">
              I'm Prince Patel, a builder who builds real software. Not tutorials. Not clones. Real products that solve real problems and actually ship.
            </p>
            <p className="text-[#A3A3A3] leading-relaxed mb-5">
              I've built Chrome extensions used for professional design and developer workflows, full-stack web apps with real AI integration and live backend infrastructure, and a native Android application. I use tools like Lovable, Google AI Studio, and Supabase not as shortcuts but as force multipliers to build faster and think bigger.
            </p>
            <p className="text-[#A3A3A3] leading-relaxed">
              My goal is to keep shipping, keep learning in public, and eventually create a space where others can learn the same way I did — by building real things.
            </p>
          </FadeIn>
        </div>

        {/* WHAT I BUILD SECTION */}
        <div className="py-24">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#6366F1] mb-3">WHAT I BUILD</div>
          <h2 className="text-3xl font-bold text-white mb-12">The Things I Make</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 hover:border-[#3F3F46] transition-colors h-full">
                <div className="mb-4 text-[#6366F1]"><Puzzle size={36} /></div>
                <h3 className="text-lg font-semibold text-white mb-2">Chrome Extensions</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  Native browser tools that eliminate real friction from designer and developer workflows. Built with Manifest V3 and a performance-first architecture.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 hover:border-[#3F3F46] transition-colors h-full">
                <div className="mb-4 text-[#22D3EE]"><Bot size={36} /></div>
                <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Apps</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  Web and Android apps that integrate Gemini AI to create intelligent, context-aware user experiences. From emotional wellness to personal productivity.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 hover:border-[#3F3F46] transition-colors h-full">
                <div className="mb-4 text-[#22C55E]"><Zap size={36} /></div>
                <h3 className="text-lg font-semibold text-white mb-2">Full Stack Products</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  End-to-end development from interface design through React frontend, Supabase backend, PostgreSQL database, and deployment. Idea to shipped product.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="py-24">
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#6366F1] mb-3">SKILLS & STACK</div>
            <h2 className="text-3xl font-bold text-white mb-10">What I Work With</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0}>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 hover:border-[#3F3F46] transition-colors h-full">
                <div className="text-xs tracking-widest text-[#525252] uppercase mb-4">LANGUAGES & FRAMEWORKS</div>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'TypeScript', 'Kotlin', 'HTML', 'CSS'].map(skill => (
                    <span key={skill} className="bg-[#1A1A1A] border border-[#262626] text-[#A3A3A3] text-sm rounded-full px-3 py-1">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 hover:border-[#3F3F46] transition-colors h-full">
                <div className="text-xs tracking-widest text-[#525252] uppercase mb-4">AI & BACKEND</div>
                <div className="flex flex-wrap gap-2">
                  {['Google Gemini AI', 'Google AI Studio', 'Supabase', 'PostgreSQL', 'Room Database', 'Edge Functions'].map(skill => (
                    <span key={skill} className="bg-[#1A1A1A] border border-[#262626] text-[#A3A3A3] text-sm rounded-full px-3 py-1">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 hover:border-[#3F3F46] transition-colors h-full">
                <div className="text-xs tracking-widest text-[#525252] uppercase mb-4">BROWSER & MOBILE</div>
                <div className="flex flex-wrap gap-2">
                  {['Chrome Extensions MV3', 'Jetpack Compose', 'Android SDK', 'Tesseract.js', 'Service Workers', 'Offscreen Documents'].map(skill => (
                    <span key={skill} className="bg-[#1A1A1A] border border-[#262626] text-[#A3A3A3] text-sm rounded-full px-3 py-1">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 hover:border-[#3F3F46] transition-colors h-full">
                <div className="text-xs tracking-widest text-[#525252] uppercase mb-4">PLATFORMS & TOOLS</div>
                <div className="flex flex-wrap gap-2">
                  {['Lovable', 'GitHub', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Recharts', 'Vite', 'Hilt DI'].map(skill => (
                    <span key={skill} className="bg-[#1A1A1A] border border-[#262626] text-[#A3A3A3] text-sm rounded-full px-3 py-1">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* VERIFIED CREDENTIALS SECTION */}
        <div className="py-16">
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#6366F1] mb-3">VERIFIED CREDENTIALS</div>
            <h2 className="text-2xl font-bold text-white mb-8">Google AI Credentials</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <a href="https://www.credly.com/badges/bdcf68d2-cc92-4561-862a-cbff3419d5ca/public_url" target="_blank" rel="noopener noreferrer" className="group bg-[#111111] border border-[#262626] rounded-xl p-3 hover:border-[#6366F1] transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] flex flex-col items-center gap-1">
                <img src="/badges/prompt-design-vertex-ai.png" alt="Prompt Design in Vertex AI" className="w-full rounded-lg overflow-hidden mb-1" />
                <span className="text-[11px] font-medium text-[#A3A3A3] w-full text-center">Issued July 24, 2026</span>
                <span className="text-xs font-semibold text-[#818CF8] group-hover:text-[#6366F1] transition-colors w-full text-center mt-1">Verify on Credly &rarr;</span>
              </a>

              <a href="https://www.credly.com/badges/5d38f23d-5d23-4671-96fd-8f586da15603/public_url" target="_blank" rel="noopener noreferrer" className="group bg-[#111111] border border-[#262626] rounded-xl p-3 hover:border-[#6366F1] transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] flex flex-col items-center gap-1">
                <img src="/badges/build-real-world-ai-gemini-imagen.png" alt="Build Real World AI Applications with Gemini and Imagen" className="w-full rounded-lg overflow-hidden mb-1" />
                <span className="text-[11px] font-medium text-[#A3A3A3] w-full text-center">Issued July 26, 2026</span>
                <span className="text-xs font-semibold text-[#818CF8] group-hover:text-[#6366F1] transition-colors w-full text-center mt-1">Verify on Credly &rarr;</span>
              </a>

              <a href="https://www.credly.com/badges/5c94f0e3-2ad1-4960-a564-2baa5b138751/public_url" target="_blank" rel="noopener noreferrer" className="group bg-[#111111] border border-[#262626] rounded-xl p-3 hover:border-[#6366F1] transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] flex flex-col items-center gap-1">
                <img src="/badges/develop-genai-streamlit.png" alt="Develop GenAI Apps with Gemini and Streamlit" className="w-full rounded-lg overflow-hidden mb-1" />
                <span className="text-[11px] font-medium text-[#A3A3A3] w-full text-center">Issued July 27, 2026</span>
                <span className="text-xs font-semibold text-[#818CF8] group-hover:text-[#6366F1] transition-colors w-full text-center mt-1">Verify on Credly &rarr;</span>
              </a>

              <a href="https://www.credly.com/badges/7430f68f-a85c-4288-ac93-410f3faaecf8/public_url" target="_blank" rel="noopener noreferrer" className="group bg-[#111111] border border-[#262626] rounded-xl p-3 hover:border-[#6366F1] transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] flex flex-col items-center gap-1">
                <img src="/badges/gemini-enterprise-application.png" alt="Gemini for Enterprise Application Developers" className="w-full rounded-lg overflow-hidden mb-1" />
                <span className="text-[11px] font-medium text-[#A3A3A3] w-full text-center">Issued August 1, 2026</span>
                <span className="text-xs font-semibold text-[#818CF8] group-hover:text-[#6366F1] transition-colors w-full text-center mt-1">Verify on Credly &rarr;</span>
              </a>

              <a href="https://www.credly.com/badges/1307f337-971f-41b9-8ebb-714c6467fecf/public_url" target="_blank" rel="noopener noreferrer" className="group bg-[#111111] border border-[#262626] rounded-xl p-3 hover:border-[#6366F1] transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] flex flex-col items-center gap-1">
                <img src="/badges/smart-cloud-vibe-coding-mcp.png" alt="Smart Cloud Vibe Coding MCP" className="w-full rounded-lg overflow-hidden mb-1" />
                <span className="text-[11px] font-medium text-[#A3A3A3] w-full text-center">Issued August 3, 2026</span>
                <span className="text-xs font-semibold text-[#818CF8] group-hover:text-[#6366F1] transition-colors w-full text-center mt-1">Verify on Credly &rarr;</span>
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <a href="https://www.credly.com/users/pro-prince/badges/credly" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6366F1] hover:underline">
                View all credentials on Credly &rarr;
              </a>
            </div>
          </FadeIn>
        </div>

        {/* BUILDER TIMELINE SECTION */}
        <div className="pt-24 pb-16">
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#6366F1] mb-3">JOURNEY</div>
            <h2 className="text-3xl font-bold text-white mb-12">Builder Timeline</h2>
          </FadeIn>
          
          <div className="relative border-l-2 border-[#262626] ml-2">
            {[
              {
                year: '2023',
                title: 'Started B.Tech in Computer Science',
                description: 'Enrolled in B.Tech Computer Science Engineering at PDEU, Gandhinagar, Gujarat. Started obsessing over how software actually works under the hood.'
              },
              {
                year: '2026',
                title: 'HoverPick — Chrome Extension',
                description: 'Built and shipped HoverPick. A precision color picker for designers and developers using screen-capture pixel sampling directly inside the browser.'
              },
              {
                year: '2026',
                title: 'VTT Vision to Text — Chrome Extension',
                description: 'Built and shipped VTT. A local OCR tool that extracts text from any visible screen content with zero cloud uploads and full privacy.'
              },
              {
                year: '2026',
                title: 'Soul Sync — Web App',
                description: 'Built Soul Sync web app. Integrated Gemini AI, Supabase backend, mood analytics, five premium themes, and a full emotional wellness experience.'
              },
              {
                year: '2026',
                title: 'Life Tracker — LifeOS',
                description: 'Built Life Tracker. A full-stack personal OS combining habit tracking, expense management, and health analytics with real-time data visualizations.'
              },
              {
                year: '2026',
                title: 'Soul Sync — Android App',
                description: 'Shipped Soul Sync natively for Android using Kotlin and Jetpack Compose. AI-powered reflection engine, mood analytics, cycle tracking, memory scrapbook, and achievements — all offline-first with Room Database and Supabase cloud sync.'
              },
              {
                year: '2026',
                title: 'Amul Kool Gold — D2C Concept Storefront',
                description: 'Built a cinematic scroll-driven e-commerce concept storefront for a premium dairy beverage brand. Frame-sequence hero animation tied to scroll position, a full flavour catalog, working cart, three-step checkout with validation, and a complete order simulation from scroll to receipt.'
              },
              {
                year: '2026',
                title: 'PDF Craft — Browser-Based PDF Editor',
                description: 'Built a full-featured browser-based PDF editor with a complete annotation toolkit — text editing, signatures, redaction, shapes, and stamps — plus secure document management and high-fidelity export using pdf.js and pdf-lib.'
              }
            ].map((event, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="mb-10 pl-8 relative flex flex-col">
                  <div className="absolute w-[12px] h-[12px] bg-[#6366F1] rounded-full border-2 border-[#0A0A0A] left-[-7px] top-2"></div>
                  <div>
                    <span className="text-xs bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1 text-[#6366F1] font-mono mb-2 inline-block">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-1">{event.title}</h3>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed">{event.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* GITHUB ACTIVITY SECTION */}
        <div className="py-16 max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#6366F1] mb-3">GITHUB ACTIVITY</div>
            <h2 className="text-3xl font-bold text-white mb-10">Code in Numbers</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-5 text-center hover:border-[#3F3F46] transition-colors">
                <div className="text-3xl font-bold text-[#6366F1] mb-1">7</div>
                <div className="text-sm text-[#A3A3A3]">Public Repos</div>
              </div>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-5 text-center hover:border-[#3F3F46] transition-colors">
                <div className="text-3xl font-bold text-[#22D3EE] mb-1">7+</div>
                <div className="text-sm text-[#A3A3A3]">Products Shipped</div>
              </div>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-5 text-center hover:border-[#3F3F46] transition-colors">
                <div className="text-3xl font-bold text-[#22C55E] mb-1">2026</div>
                <div className="text-sm text-[#A3A3A3]">Active Since</div>
              </div>
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-5 text-center hover:border-[#3F3F46] transition-colors">
                <div className="text-3xl font-bold text-[#F59E0B] mb-1">100%</div>
                <div className="text-sm text-[#A3A3A3]">Open Source</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="https://github.com/Pro-Prince" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-[8px] px-6 py-3 transition-all font-semibold">
                View GitHub Profile &rarr;
              </a>
            </div>
          </FadeIn>
        </div>

      </div>
    </main>
  );
}
