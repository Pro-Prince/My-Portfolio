import { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Instagram, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    // Normally you'd handle actual submission here
  };

  return (
    <main className="pt-24 pb-16 md:pb-24 py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Page header */}
        <div className="text-xs font-semibold tracking-widest uppercase text-[#6366F1] mb-3">CONTACT</div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3">Let's Connect</h1>
        <p className="text-xl text-[#A3A3A3] mb-16">Open to freelance projects, full-time roles, and interesting builds.</p>

        <div className="grid grid-cols-1 md:grid-cols-[44%_56%] gap-12">
          
          {/* LEFT COLUMN — Contact method cards */}
          <div>
            <div className="flex flex-col gap-4">
              <a href="mailto:princepatel5807@gmail.com" className="bg-[#111111] border border-[#262626] rounded-2xl p-5 flex items-center gap-4 hover:border-[#6366F1] transition-colors block">
                <div className="w-[48px] h-[48px] bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center flex-shrink-0 text-[#6366F1]">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#525252] uppercase tracking-widest mb-1">Email</div>
                  <div className="text-sm font-medium text-white">princepatel5807@gmail.com</div>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/prince-patel476/" target="_blank" rel="noopener noreferrer" className="bg-[#111111] border border-[#262626] rounded-2xl p-5 flex items-center gap-4 hover:border-[#6366F1] transition-colors block">
                <div className="w-[48px] h-[48px] bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center flex-shrink-0 text-[#0A66C2]">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#525252] uppercase tracking-widest mb-1">LinkedIn</div>
                  <div className="text-sm font-medium text-white">linkedin.com/in/prince-patel476</div>
                </div>
              </a>

              <a href="https://github.com/Pro-Prince" target="_blank" rel="noopener noreferrer" className="bg-[#111111] border border-[#262626] rounded-2xl p-5 flex items-center gap-4 hover:border-[#6366F1] transition-colors block">
                <div className="w-[48px] h-[48px] bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center flex-shrink-0 text-[#FAFAFA]">
                  <Github size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#525252] uppercase tracking-widest mb-1">GitHub</div>
                  <div className="text-sm font-medium text-white">github.com/Pro-Prince</div>
                </div>
              </a>

              <a href="https://x.com/Pro_Prince_1" target="_blank" rel="noopener noreferrer" className="bg-[#111111] border border-[#262626] rounded-2xl p-5 flex items-center gap-4 hover:border-[#6366F1] transition-colors block">
                <div className="w-[48px] h-[48px] bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center flex-shrink-0 text-[#FAFAFA]">
                  <Twitter size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#525252] uppercase tracking-widest mb-1">X</div>
                  <div className="text-sm font-medium text-white">@Pro_Prince_1</div>
                </div>
              </a>

              <a href="https://www.instagram.com/pro.prince.1/" target="_blank" rel="noopener noreferrer" className="bg-[#111111] border border-[#262626] rounded-2xl p-5 flex items-center gap-4 hover:border-[#6366F1] transition-colors block">
                <div className="w-[48px] h-[48px] bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center flex-shrink-0 text-[#E1306C]">
                  <Instagram size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#525252] uppercase tracking-widest mb-1">Instagram</div>
                  <div className="text-sm font-medium text-white">@pro.prince.1</div>
                </div>
              </a>
            </div>

            <div className="mt-6 bg-[#111111] border border-[#262626] rounded-2xl p-5">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full inline-block mr-2"></div>
                <span className="font-medium text-white text-sm">Available for work</span>
              </div>
              <p className="text-xs text-[#A3A3A3] leading-relaxed mt-2">
                Currently taking freelance projects and exploring full-time roles. Typical response time under 24 hours.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — Contact Form */}
          <div>
            <div className="bg-[#111111] border border-[#262626] rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <div className="text-xs text-[#525252] uppercase tracking-widest mb-2">NAME</div>
                  <input type="text" placeholder="Your Name" required className="w-full bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-3 text-[#FAFAFA] placeholder-[#525252] text-sm focus:outline-none focus:border-[#6366F1] transition-colors" />
                </div>
                
                <div className="mb-5">
                  <div className="text-xs text-[#525252] uppercase tracking-widest mb-2">EMAIL</div>
                  <input type="email" placeholder="your@email.com" required className="w-full bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-3 text-[#FAFAFA] placeholder-[#525252] text-sm focus:outline-none focus:border-[#6366F1] transition-colors" />
                </div>

                <div className="mb-5">
                  <div className="text-xs text-[#525252] uppercase tracking-widest mb-2">SUBJECT</div>
                  <input type="text" placeholder="What is this about?" required className="w-full bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-3 text-[#FAFAFA] placeholder-[#525252] text-sm focus:outline-none focus:border-[#6366F1] transition-colors" />
                </div>

                <div className="mb-5">
                  <div className="text-xs text-[#525252] uppercase tracking-widest mb-2">MESSAGE</div>
                  <textarea rows={5} placeholder="Tell me about your project or opportunity..." required className="w-full bg-[#1A1A1A] border border-[#262626] rounded-xl px-4 py-3 text-[#FAFAFA] placeholder-[#525252] text-sm focus:outline-none focus:border-[#6366F1] transition-colors resize-y"></textarea>
                </div>

                {isSent ? (
                  <div className="mt-2 bg-[#052E16] border border-[#22C55E] rounded-xl p-4 text-[#22C55E] text-sm text-center flex flex-col items-center gap-2">
                    <CheckCircle size={24} />
                    Message sent! I will reply within 24 hours.
                  </div>
                ) : (
                  <button type="submit" className="w-full mt-2 bg-[#6366F1] text-white rounded-lg px-5 py-3 hover:bg-[#4F46E5] transition-colors font-medium text-sm">
                    Send Message &rarr;
                  </button>
                )}
              </form>

              <div className="text-center mt-4 text-xs text-[#525252]">
                or email directly at <a href="mailto:princepatel5807@gmail.com" className="text-[#6366F1] underline">princepatel5807@gmail.com</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
