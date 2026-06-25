import FadeIn from '../components/FadeIn';
import { useDynamicTitle } from '../hooks/useDynamicTitle';
import { PenLine } from 'lucide-react';

export default function Blog() {
  useDynamicTitle('Blog — Prince Patel');

  return (
    <main className="pt-24 pb-16 md:pb-24 py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Page header */}
        <FadeIn>
          <div className="text-xs font-semibold tracking-widest uppercase text-[#6366F1] mb-3">NOTES</div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-3">Things I've Learned</h1>
          <p className="text-xl text-[#A3A3A3] mb-20">What I built, what broke, and what I figured out.</p>
        </FadeIn>

        {/* Empty state */}
        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-col items-center text-center">
            <div className="mb-6 text-[#6366F1] bg-[#111111] border border-[#262626] rounded-2xl p-6 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
              <PenLine size={48} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white mb-3">First post coming soon.</h2>
            <p className="text-[#A3A3A3] max-w-md leading-relaxed mb-8">
              I'm documenting my builder journey. Follow along on X while I write the first post.
            </p>
            <a href="https://x.com/Pro_Prince_1" target="_blank" rel="noopener noreferrer" className="bg-[#6366F1] text-white rounded-lg px-5 py-2.5 hover:bg-[#4F46E5] transition-colors font-medium">
              Follow on X &rarr;
            </a>
          </div>
        </FadeIn>

        {/* Topics preview */}
        <div className="mt-24">
          <div className="text-xs tracking-widest text-[#525252] uppercase mb-6 text-center">TOPICS I'LL COVER</div>
          <div className="flex justify-center flex-wrap gap-3">
            {[
              'Chrome Extensions', 'AI Integration', 'Building with Lovable', 
              'Android Development', 'Freelancing', 'Product Design', 
              'Google AI Studio', 'Supabase', 'Shipping Fast'
            ].map(topic => (
              <span key={topic} className="bg-[#1A1A1A] border border-[#262626] text-[#A3A3A3] text-sm rounded-full px-3 py-1">
                {topic}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
