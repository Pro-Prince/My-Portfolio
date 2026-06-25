import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';
import { useDynamicTitle } from '../hooks/useDynamicTitle';

export default function Home() {
  useDynamicTitle('Prince Patel — I Build Things That Actually Work');

  const { count: count1, ref: ref1 } = useCountUp(5);
  const { count: count2, ref: ref2 } = useCountUp(2);
  const { count: count3, ref: ref3 } = useCountUp(2);
  const { count: count4, ref: ref4 } = useCountUp(1);

  return (
    <main className="pt-24 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center mb-24">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2.5 bg-[#111111] border border-[#262626] rounded-full px-4 py-2 w-fit">
              <div className="w-2 h-2 rounded-full bg-[#22C55E] pulse-dot shadow-[0_0_8px_#22C55E]"></div>
              <span className="text-sm text-[#A3A3A3] font-medium">Open to Freelance & Opportunities</span>
            </div>
            <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-[1.1] text-[#FAFAFA]">
              <div>I Build Things</div>
              <div className="text-[#FAFAFA]">
                That Actually <span className="text-[#6366F1]">Work.</span>
              </div>
            </h1>
            <p className="mb-10 text-lg text-[#A3A3A3] leading-relaxed max-w-lg">
              CS student turned product builder. I've shipped 5 software products — Chrome extensions, full-stack web apps, and a native Android app — using AI as a force multiplier.
            </p>
            <div className="flex gap-4 mb-14 flex-wrap">
              <Link
                to="/projects"
                className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-6 py-3 rounded-[8px] font-semibold transition-all"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] px-6 py-3 rounded-[8px] font-semibold transition-all"
              >
                Get In Touch
              </Link>
            </div>
            <FadeIn delay={0.2} className="mt-12 flex flex-wrap gap-8 md:gap-12">
              <div>
                <div className="text-4xl font-bold text-[#6366F1]">
                  <span ref={ref1}>{count1}</span>
                </div>
                <div className="text-sm text-[#A3A3A3] mt-1">Products Shipped</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#6366F1]">
                  <span ref={ref2}>{count2}</span>
                </div>
                <div className="text-sm text-[#A3A3A3] mt-1">Chrome Extensions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#6366F1]">
                  <span ref={ref3}>{count3}</span>
                </div>
                <div className="text-sm text-[#A3A3A3] mt-1">Web Apps</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#6366F1]">
                  <span ref={ref4}>{count4}</span>
                </div>
                <div className="text-sm text-[#A3A3A3] mt-1">Android App</div>
              </div>
            </FadeIn>
          </FadeIn>
          <div className="hidden md:flex justify-end">
            <div style={{ width: 180, height: 180, borderRadius: '50%', background: '#1A1A1A', border: '4px solid rgba(99,102,241,0.2)', boxShadow: '0 0 40px rgba(99,102,241,0.15)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/prince-photo.jpg" alt="Prince Patel" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>

        {/* FEATURED PROJECTS SECTION */}
        <div className="mb-24">
          <FadeIn>
            <div className="text-[10px] font-bold tracking-[0.2em] text-[#6366F1] uppercase mb-3">FEATURED WORK</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-2">What I've Built</h2>
            <p className="text-[#A3A3A3] mb-12">Real products. Real code. No tutorials.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <FadeIn delay={0}>
              <div className="project-card p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-cyan-400/10 text-[#22D3EE] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Chrome Extension</span>
                  <span className="bg-green-950 text-[#22C55E] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Shipped</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">HoverPick</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed flex-grow">
                  A precision color picker that extracts exact colors from any website in real time. Pixel-level magnification, HEX and RGB support, one-click copying, zero workflow interruption.
                </p>
                <div className="border-t border-[#1F1F1F] my-4"></div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['JavaScript', 'Chrome MV3', 'Canvas API', 'Screen Capture'].map(tag => (
                    <span key={tag} className="tech-tag text-[10px] font-mono px-2 py-0.5 rounded-full uppercase">{tag}</span>
                  ))}
                </div>
                <a href="https://github.com/Pro-Prince/HoverPick" target="_blank" rel="noreferrer" className="block text-center w-full bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-[8px] px-5 py-2.5 transition-colors text-sm font-semibold">
                  View on GitHub &rarr;
                </a>
              </div>
            </FadeIn>

            {/* CARD 2 */}
            <FadeIn delay={0.1}>
              <div className="project-card p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Web App</span>
                  <span className="bg-green-950 text-[#22C55E] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Shipped</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">SoulSync</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed flex-grow">
                  AI-powered emotional wellness platform. Journaling, mood tracking, Gemini AI reflections, and emotional analytics — all in one calm digital sanctuary. Built for web and Android.
                </p>
                <div className="border-t border-[#1F1F1F] my-4"></div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'TypeScript', 'Supabase', 'Gemini AI', 'Kotlin'].map(tag => (
                    <span key={tag} className="tech-tag text-[10px] font-mono px-2 py-0.5 rounded-full uppercase">{tag}</span>
                  ))}
                </div>
                <a href="https://github.com/Pro-Prince/yoursoulsync" target="_blank" rel="noreferrer" className="block text-center w-full bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-[8px] px-5 py-2.5 transition-colors text-sm font-semibold">
                  View on GitHub &rarr;
                </a>
                <a href="https://yoursoulsync.lovable.app" target="_blank" rel="noopener noreferrer" className="text-xs text-[#6366F1] hover:underline mt-2 block text-center">
                  ↗ View Live Demo
                </a>
              </div>
            </FadeIn>

            {/* CARD 3 */}
            <FadeIn delay={0.2}>
              <div className="project-card p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Web App</span>
                  <span className="bg-green-950 text-[#22C55E] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Shipped</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Life Tracker — LifeOS</h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed flex-grow">
                  A full-stack personal OS unifying habit tracking, expense management, and health analytics into a single intelligent dashboard with real-time insights.
                </p>
                <div className="border-t border-[#1F1F1F] my-4"></div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'TypeScript', 'Supabase', 'Recharts', 'PostgreSQL'].map(tag => (
                    <span key={tag} className="tech-tag text-[10px] font-mono px-2 py-0.5 rounded-full uppercase">{tag}</span>
                  ))}
                </div>
                <a href="https://github.com/Pro-Prince/yourlifetracker" target="_blank" rel="noreferrer" className="block text-center w-full bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-[8px] px-5 py-2.5 transition-colors text-sm font-semibold">
                  View on GitHub &rarr;
                </a>
                <a href="https://yourlifetracker.lovable.app" target="_blank" rel="noopener noreferrer" className="text-xs text-[#6366F1] hover:underline mt-2 block text-center">
                  ↗ View Live Demo
                </a>
              </div>
            </FadeIn>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/projects" className="inline-block bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-[8px] px-6 py-3 transition-all font-semibold">
              View All 5 Projects &rarr;
            </Link>
          </div>
        </div>

        {/* TECH STACK SECTION */}
        <div className="mb-24">
          <FadeIn>
            <div className="text-[10px] font-bold tracking-[0.2em] text-[#6366F1] uppercase mb-3">TECH STACK</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-2">What I Actually Use</h2>
            <p className="text-[#A3A3A3] mb-12">Tools I've used in real shipped products.</p>
          </FadeIn>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { emoji: '⚛️', name: 'React', sub: 'UI Framework' },
              { emoji: '🟦', name: 'TypeScript', sub: 'Type Safety' },
              { emoji: '🎨', name: 'Tailwind CSS', sub: 'Styling' },
              { emoji: '🗄️', name: 'Supabase', sub: 'Backend & DB' },
              { emoji: '🤖', name: 'Gemini AI', sub: 'AI Integration' },
              { emoji: '🧪', name: 'Google AI Studio', sub: 'AI Dev' },
              { emoji: '📱', name: 'Kotlin', sub: 'Android Native' },
              { emoji: '🖼️', name: 'Jetpack Compose', sub: 'Android UI' },
              { emoji: '🧩', name: 'Chrome Ext', sub: 'MV3 Platform' },
              { emoji: '📊', name: 'Recharts', sub: 'Data Viz' },
              { emoji: '💜', name: 'Lovable', sub: 'Vibe Coding' },
              { emoji: '🔤', name: 'Tesseract.js', sub: 'Local OCR' },
            ].map((tech, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                className="bg-[#111111] border border-[#262626] rounded-xl p-4 text-center hover:border-[#3F3F46] transition-colors"
              >
                <div className="text-3xl mb-3">{tech.emoji}</div>
                <div className="text-sm font-medium text-[#FAFAFA] mb-1">{tech.name}</div>
                <div className="text-xs text-[#525252]">{tech.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM CTA SECTION */}
        <FadeIn>
          <div className="bg-[#111111] border border-[#262626] rounded-[16px] p-12 text-center accent-gradient-top">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 relative z-10">Have a project in mind?</h2>
            <p className="text-[#A3A3A3] mb-8 relative z-10">I'm open to freelance work, collaborations, and full-time opportunities.</p>
            <div className="flex gap-4 justify-center flex-wrap relative z-10">
              <a href="mailto:princepatel5807@gmail.com" className="bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-[8px] px-6 py-3 transition-all font-semibold">
                Let's Talk &rarr;
              </a>
              <Link to="/projects" className="bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-[8px] px-6 py-3 transition-all font-semibold">
                View My Work
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
