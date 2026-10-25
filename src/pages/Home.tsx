import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';
import { useDynamicTitle } from '../hooks/useDynamicTitle';
import { Atom, FileCode2, Paintbrush, Database, Sparkles, FlaskConical, Smartphone, LayoutTemplate, Puzzle, BarChart3, Heart, Type, ExternalLink } from 'lucide-react';
import { trackProjectClick } from '../hooks/useTrackClick';
import { projects } from '../data/projects';

export default function Home() {
  useDynamicTitle('Prince Patel - I Build Things That Actually Work');

  const { count: count1, ref: ref1 } = useCountUp(13);
  const { count: count2, ref: ref2 } = useCountUp(2);
  const { count: count3, ref: ref3 } = useCountUp(5);
  const { count: count4, ref: ref4 } = useCountUp(1);
  const { count: count5, ref: ref5 } = useCountUp(1);
  const { count: count6, ref: ref6 } = useCountUp(1);
  const { count: count7, ref: ref7 } = useCountUp(1);
  const { count: count8, ref: ref8 } = useCountUp(1);
  const { count: count9, ref: ref9 } = useCountUp(1);

  return (
    <main className="pt-24 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO SECTION */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_340px] gap-10 md:gap-12 items-center mb-16">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2.5 bg-[#111111] border border-[#262626] rounded-full px-4 py-2 w-fit">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] pulse-dot shadow-[0_0_8px_#22C55E]"></div>
                <span className="text-sm text-[#A3A3A3] font-medium">Open to Freelance & Opportunities</span>
              </div>
              <h1 className="mb-4 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#FAFAFA]">
                <div>I Build Things</div>
                <div className="text-[#FAFAFA]">
                  That Actually <span className="text-[#6366F1]">Work.</span>
                </div>
              </h1>
              <p className="mb-10 text-lg md:text-xl text-[#A3A3A3] leading-relaxed max-w-xl">
                I design and ship AI-powered products - Chrome extensions, full-stack web apps, and native Android apps. I use AI as a force multiplier to build faster and think bigger, not as a shortcut.
              </p>
              <div className="flex gap-4 flex-wrap">
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
            </FadeIn>

            <FadeIn delay={0.1} className="flex justify-center md:justify-end items-center">
              <div className="relative flex justify-center items-center">
                {/* Ambient glow behind portrait */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#6366F1]/20 to-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Photo frame with full dark grey ring outline & aura glow */}
                <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full p-1.5 bg-[#262626] shadow-[0_0_50px_rgba(99,102,241,0.18)] flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#1A1A1A]">
                    <img
                      src="/prince-photo.jpg"
                      alt="Prince Patel"
                      className="w-full h-full object-cover object-center rounded-full"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* METRICS ROW */}
          <FadeIn delay={0.2} className="pt-10 border-t border-[#1F1F1F] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-9 gap-x-6 gap-y-8">
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-[#6366F1]">
                <span ref={ref1}>{count1}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1 font-medium">Products Shipped</div>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-[#6366F1]">
                <span ref={ref2}>{count2}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1 font-medium">Chrome Extensions</div>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-[#6366F1]">
                <span ref={ref3}>{count3}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1 font-medium">Web Apps</div>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-[#6366F1]">
                <span ref={ref4}>{count4}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1 font-medium">Android App</div>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-[#6366F1]">
                <span ref={ref5}>{count5}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1 font-medium">AI Product</div>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-[#6366F1]">
                <span ref={ref6}>{count6}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1 font-medium">AI Companion</div>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-[#6366F1]">
                <span ref={ref7}>{count7}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1 font-medium">Computer Vision</div>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-[#6366F1]">
                <span ref={ref8}>{count8}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1 font-medium">Desktop App</div>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-[#6366F1]">
                <span ref={ref9}>{count9}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] mt-1 font-medium">Game</div>
            </div>
          </FadeIn>
        </div>

        {/* FEATURED PROJECTS SECTION */}
        <div className="mb-24">
          <FadeIn>
            <div className="text-[10px] font-bold tracking-[0.2em] text-[#6366F1] uppercase mb-3">FEATURED WORK</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-2">What I've Built</h2>
            <p className="text-[#A3A3A3] mb-12">Real products. Real code. No tutorials.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...projects]
              .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
              .slice(0, 6)
              .map((project, idx) => (
                <FadeIn key={project.name} delay={idx * 0.1}>
                  <div className="project-card p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-4">
                      <span className={`${project.categoryBadgeStyle || 'bg-indigo-400/10 text-[#6366F1] text-[10px] font-bold uppercase'} rounded-full px-3 py-1`}>
                        {project.categoryBadge || project.category}
                      </span>
                      <span className={`${project.statusBadgeStyle || 'bg-green-950 text-[#22C55E] text-[10px] font-bold'} rounded-full px-3 py-1 uppercase`}>
                        {project.status === 'shipped' ? 'Shipped' : 'In Progress'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-sm text-[#A3A3A3] leading-relaxed flex-grow">
                      {project.shortDescription || project.description}
                    </p>
                    <div className="border-t border-[#1F1F1F] my-4"></div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.map(tag => (
                        <span key={tag} className="tech-tag text-[10px] font-mono px-2 py-0.5 rounded-full uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-row gap-2 mt-4">
                      {project.gptLink ? (
                        <a
                          href={project.gptLink}
                          onClick={() => trackProjectClick(project.name, 'live_demo')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.3)] hover:bg-[rgba(99,102,241,0.15)] hover:border-[#6366F1] text-[#6366F1] rounded-[8px] px-3 py-2 transition-colors text-sm whitespace-nowrap"
                        >
                          <ExternalLink size={14} className="mr-1.5" />
                          {project.demoLabel || 'Try the GPT →'}
                        </a>
                      ) : (
                        <>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              onClick={() => trackProjectClick(project.name, 'live_demo')}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.3)] hover:bg-[rgba(99,102,241,0.15)] hover:border-[#6366F1] text-[#6366F1] rounded-lg px-3 py-2 transition-colors text-sm whitespace-nowrap"
                            >
                              <ExternalLink size={14} className="mr-1.5" />
                              {project.demoLabel || 'Live Demo →'}
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              onClick={() => trackProjectClick(project.name, 'github')}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 flex items-center justify-center bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-[8px] px-3 py-2 transition-colors text-sm whitespace-nowrap"
                            >
                              View on GitHub &rarr;
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/projects" className="inline-block bg-transparent border border-[#3F3F46] hover:border-[#6366F1] text-[#FAFAFA] rounded-[8px] px-6 py-3 transition-all font-semibold">
              View All 13 Projects &rarr;
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
              { icon: <Atom size={28} className="text-[#61DAFB]" />, name: 'React', sub: 'UI Framework' },
              { icon: <FileCode2 size={28} className="text-[#3178C6]" />, name: 'TypeScript', sub: 'Type Safety' },
              { icon: <Paintbrush size={28} className="text-[#38BDF8]" />, name: 'Tailwind CSS', sub: 'Styling' },
              { icon: <Database size={28} className="text-[#3ECF8E]" />, name: 'Supabase', sub: 'Backend & DB' },
              { icon: <Sparkles size={28} className="text-[#8B5CF6]" />, name: 'Gemini AI', sub: 'AI Integration' },
              { icon: <FlaskConical size={28} className="text-[#F59E0B]" />, name: 'Google AI Studio', sub: 'AI Dev' },
              { icon: <Smartphone size={28} className="text-[#7F52FF]" />, name: 'Kotlin', sub: 'Android Native' },
              { icon: <LayoutTemplate size={28} className="text-[#4285F4]" />, name: 'Jetpack Compose', sub: 'Android UI' },
              { icon: <Puzzle size={28} className="text-[#FBBF24]" />, name: 'Chrome Ext', sub: 'MV3 Platform' },
              { icon: <BarChart3 size={28} className="text-[#22D3EE]" />, name: 'Recharts', sub: 'Data Viz' },
              { icon: <Heart size={28} className="text-[#F43F5E]" />, name: 'Lovable', sub: 'Vibe Coding' },
              { icon: <Type size={28} className="text-[#A3A3A3]" />, name: 'Tesseract.js', sub: 'Local OCR' },
            ].map((tech, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                className="bg-[#111111] border border-[#262626] rounded-xl p-4 flex flex-col items-center text-center hover:border-[#3F3F46] transition-colors"
              >
                <div className="mb-3">{tech.icon}</div>
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
